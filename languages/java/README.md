# Java language

--------------------------------

***Authors***

- Le Van Canh dit Ban Leo
- Grzechowiak Adrien

--------------------------------

## How it' works

This language is configured like this :

```txt
📂 java
    |
    📂 object
    |    📄 __init__.py
    |    📄 javaClass.py
    |    📄 JUml.py
    📄 __init__.py
    📄 main.py
    📄 regexData.py
    📄 exemple.java
    📄 exemple2.java

```

> you can read [here](../) for more information about creation of languages and

All step of the language is :

- Read the file
- Detect all class,enum,interface of the file
- Detect all attributes and methods of the file
- Link methode and attributes in the class,and class with package
- Update JUml object, who contains all data of the project
- return JUml object for the Main app
