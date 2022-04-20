/*!
 * @author grzechowiak, levancanhditban
 * date 03/16/2022
 * extension.js : fichier de base qui permet de gérer le fonctionnement de l'extension
 */

/* ####################################################################################
#                File Description [extension.js] 
#
# Utility : 
# --------
#
# This file is the base of the extension with the package.json.
# It retrieve all the commands we assign in the package file, and for each commands, we associate a function to 
# execute what we want to do.
# 
# Functions :
# -----------
# activate(context)
# 		=> This function is called when the extension is loaded and make the commands operationals
#
# deactivate()
# 		=> This function is called when the extension is deactivated
#
# codetouml(context)
#		=> This function can retrieve the selected code of an open file and generate the associated UML with a python script launched via the function "request"
#
# fileCodetouml(context)
# 		=> This function can retrieve all the code of an open file and generate the associated UML with a python script launched via the function "request"
#
# javaFileToUml(context, fileUri)
#        => This function get the path of a java file available in the file explorer of the vscode window and generate the UML associated with a python script launched via the function "request"
#
# folderToUml(context, fileUri)
#		=> This function get the path of a directory available in the file explorer of the vscode window and generate the UML associated with a python script launched via the function "request"
#
# importAddsHtml(panel, context)
# 		=> This function import the additional files generated or modified during the user experience, all the static files are located on a virtual private server
#
# openFullPreview(context)
# 		=> This function is called when the code of the UML is generated and when we want to see the UML in a full page in vscode
#
# openPreviewToTheSide(context)
# 		=> This function is called when the code of the UML is generated and when we want to see the UML on the side of the vscode window
#
# getWebviewContent(jsURI)
# 		=> This function returns the html code of the preview (UML), with the js file path generated with the python script
#
# request(code, file, context)
# 		=> This function launches the python script (UML JS generation script) with the right options for each different cases (dir, code or file)
#
####################################################################################

############### Variables #################*/
/*# vscode is needed to get the necessary integrated functions of the IDE*/
const vscode = require('vscode');
/*# path is used to join multiple paths*/
const path = require('path');
/*# exec is used to run commands*/
const { exec } = require('child_process');
/*# pythonRuntime is a variable to know if the user is using python or python3 to avoid any problems*/
let pythonRuntime = ""


/*############### Functions ##################### */

/**
 * get the right version of python and save it in the pythonRuntime variable
 */
exec(`python -h`, (error, __, _) => {
    if (error) {
        pythonRuntime = "python3"
    } else {
        pythonRuntime = "python"
    }
})

/**
 * function active when the extension is loaded. Register the different commands declared in package.json
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

    var commands = [
        vscode.commands.registerCommand('pyuml.codeToUml', function() { codetouml(context); }),
        vscode.commands.registerCommand('pyuml.folderToUml', function async(fileUri) { folderToUml(context, fileUri); }),
        vscode.commands.registerCommand('pyuml.fileCodetouml', function() { fileCodetouml(context); }),
        vscode.commands.registerCommand('pyuml.javaFileToUml', function async(fileUri) { javaFileToUml(context, fileUri); }),
        vscode.commands.registerCommand('pyuml.openPreviewToTheSide', function() { openPreviewToTheSide(context); }),
        vscode.commands.registerCommand('pyuml.openFullPreview', function() { openFullPreview(context); })

    ];
    commands.forEach(function(command) {
        context.subscriptions.push(command);
    });
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
    activate,
    deactivate
}

/** Select some lines of code on the screen and push them to the uml generator
 * @param {vscode.ExtensionContext} context
 */
function codetouml(context) {
    vscode.window.showInformationMessage('codeToUml!');
    let editor = vscode.window.activeTextEditor;
    if (!editor) {
        vscode.window.showInformationMessage('Open an Editor First!');
        return;
    }
    let selection = editor.selection;
    let text = editor.document.getText(selection);
    request(1, text, context)
}

/** S8 than codetouml but gets all the lines of code instead
 * @param {vscode.ExtensionContext} context
 */
function fileCodetouml(context) {
    vscode.window.showInformationMessage('Launching Code To UML: File to UML');
    let editor = vscode.window.activeTextEditor;
    if (!editor) {
        vscode.window.showInformationMessage('Open an Editor First!');
        return;
    }
    let document = editor.document;
    let text = document.getText();
    // console.log("🚀 ~ file: extension.js ~ line 63 ~ fileCodetouml ~ text", text)

    request(1, text, context)
}

/** get the path of the java file selected in explorer and push it to the uml generator
 * @param {vscode.ExtensionContext} context
 * @param {vscode} fileUri Uri of the file select in the explorer
 */
function javaFileToUml(context, fileUri) {
    vscode.window.showInformationMessage('Launching Code To UML: Java File to UML');
    request(0, fileUri.path, context)
        // console.log("🚀 ~ file: extension.js ~ line 82 ~ javaFileToUml ~ fileUri.path", fileUri.path)
}

/** S8 than javaFileToUml but with a directory
 * @param {vscode.ExtensionContext} context
 */
function folderToUml(context, fileUri) {
    vscode.window.showInformationMessage('Launching Code To UML: Folder to UML');
    request(2, fileUri.path, context)
        // console.log("🚀 ~ file: extension.js ~ line 88 ~ folderToUml ~ fileUri.path", fileUri.path)
}

/** Import the js file associated with the UML structure generated from the python and use it in the webview
 * @param {vscode.window} panel webview panel created in the open preview functions
 * @param {vscode.ExtensionContext} context
 */
function importAddsHtml(panel, context) {

    const onDiskPathJs = vscode.Uri.file(
        path.join(context.extensionPath, 'src', 'umlcd.js')
    );
    const jsURI = panel.webview.asWebviewUri(onDiskPathJs);

    panel.webview.html = getWebviewContent(jsURI);
}

/** Open a new tab in vscode with the full UML preview
 * @param {vscode.ExtensionContext} context
 */
function openFullPreview(context) {
    const panel = vscode.window.createWebviewPanel('openWebview', 'PyToUML', vscode.ViewColumn.One, { enableScripts: true });
    importAddsHtml(panel, context);
}

/** Open a new tab in split view in vscode with the full UML preview
 * @param {vscode.ExtensionContext} context
 */
function openPreviewToTheSide(context) {
    const panel = vscode.window.createWebviewPanel('openWebview', 'PyToUML', vscode.ViewColumn.Two, { enableScripts: true });
    importAddsHtml(panel, context);
}

/** Open a new tab in split view in vscode with the full UML preview
 * @param {vscode.Uri} jsURI path of the js file (all the time in the extension path)
 */
function getWebviewContent(jsURI) {
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="utf-8" />
    
        <title>Unified Modeling Language</title>
    
        <link rel="stylesheet" type="text/css" href="http://eatngo.cf/joint/build/joint.css" />
        <link rel="stylesheet" type="text/css" href="http://eatngo.cf/joint/css/umlcd.css" />
    </head>
    
    <body>
        <div id="paper" style="background-color: rgb(48,56,65)"></div>
    
        <script src="http://eatngo.cf/joint/node_modules/jquery/dist/jquery.js"></script>
        <script src="http://eatngo.cf/joint/node_modules/lodash/lodash.js"></script>
        <script src="http://eatngo.cf/joint/node_modules/backbone/backbone.js"></script>
    
        <script src="http://eatngo.cf/joint/build/joint.js"></script>
        <script src="` + jsURI + `"></script>
        <script src="http://eatngo.cf/joint/complement/pattern.js"></script>
        <script src="http://eatngo.cf/joint/complement/complement.js"></script>
        <div id="menus">
            <input type="button" name="open" value="🛠 " onclick="openToolBar()">
        </div>
        <div id="buttons">
            <input type="button" name="close" value="✖" onclick="closeToolBar()">
            <input type="button" name="Export svg" value="Export svg" onclick="exportUML()">
            <input type="button" name="Remove Association" value="Remove Association" onclick="removeAsso()">
            <input type="button" name="Layout" value="Layout" onclick="layout()">
            <input type="button" name="Auto Layout (Experimental)" value="Auto Layout (Experimental)" onclick="autoLayout()">
            <select name="classList" id="data">
                <option value = "Select" selected>Select item to remove</option>
             </select>
            <input type="button" name="Remove" value="select class first" disabled="true" id="button" onclick="removeClass() ">
        </div>
        <button name="up" id="upArrow" onclick="window.scrollTo(0,0);"><img src="https://cdn.discordapp.com/attachments/932011985183313941/952670060814675998/pngegg.png"></i></button>
    
    </body>
    
    </html>`;
}

/** Make the python request with the code or the path of the file/dir we want to generate the uml for
 * @param {vscode.ExtensionContext} context
 */
function request(code, file, context) {
    console.log("running")
    const onDiskMain = path.join(context.extensionPath, 'src', 'main.py')
    console.log("file")
    switch (code) {
        case 0:
            exec(`${pythonRuntime}    "${onDiskMain}" -f "${file}"`, (error, stdout, stderr) => {
                if (error) {
                    console.error(`exec error: ${error}`);
                    return;
                }
                vscode.window.showInformationMessage(`${stdout}`);
            });
            openPreviewToTheSide(context)
            break
        case 1:
            exec(`${pythonRuntime}    "${onDiskMain}" -c "${file}"`, (error, stdout, stderr) => {
                if (error) {
                    console.error(`exec error: ${error}`);
                    return;
                }
                vscode.window.showInformationMessage(`${stdout}`);
            });
            openPreviewToTheSide(context)
            break
        case 2:
            exec(`${pythonRuntime}    "${onDiskMain}" -d "${file}"`, (error, stdout, stderr) => {
                if (error) {
                    console.error(`exec error: ${error}`);
                    return;
                }
                vscode.window.showInformationMessage(`${stdout}`);
            });
            openPreviewToTheSide(context)
            break
        default:
            vscode.window.showInformationMessage(`Unknown code`);

    }
}