def selecPath():
    return askdirectory()


def selectFile():
    return askopenfilename(
        title="Open WSD file", filetypes=[("wsd files", ".wsd"), ("all files", ".*")]
    )
def selectFileJava():
    return askopenfilename(
        title="Open Java file", filetypes=[("java files", ".java"), ("all files", ".*")]
    )


defauldName = {
    "path": "path/to/project",
    "Floder Name": "Name of the folder project",
    "Project Name": "Name of project",
    "wsd file": "path/to/file.wsd",
    "Project Path": "path/to/src/project/",
    "showPackage": "Show package",
    "showRelation": "Show class relation",
    "File Path": "path/to/file.java/",
}