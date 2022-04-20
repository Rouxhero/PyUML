# Languages

----

## How it's Works

Addon is package, how contains all working classes, work in this step :

> if it's a path, it's will read every files in the path , if it's can read it (the file is in the language)

- Read the file given
- detect with regex expression, all declaration, like class, function ,var
- Create object for all detection (depends of addon of course)
- create UML object, who while be used for the main App

----

## Create new languages

to create a new language:

- you need to create a folder ,named in the regex pattern : `[a-z][a-zA-Z]+`
- Create a  file named : `main.py` who contains 4 functions :

- uncodeFile
- uncodeProject
- getName
- getDescription

> you are free to create any other file in the same directory

your language folder should look like this :

```txt
languages
    |
    |
    📂 [language Name]
    |    📄 main.py
    |    📄 otherFile.py
    |    📂 otherFolder
    |        📄 otherFile2.py
    |        📄 ....
    📁 [other languages]   

```

----

## Installed languages

Name | Description
-----|-------------
[java](java/) | Java language who can read java files of projet, and generate wsd code for UML
