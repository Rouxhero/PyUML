# -*- coding: utf-8 -*-$
##!/usr/bin/env python3
# Author :
#			Leo Le Van Canh dit Ban
#			Adrien Grzechowiak
# Date : 2022-03-16
import sys,os
current = sys.path[0]
sys.path.insert(0,current+"/../")
sys.path.insert(0,current+ "/../languages/java/")
sys.path.insert(0,current+ "/../languages/")
import languages.java as java
####################################################################################
#                File Description [main.py] 
#
# Utility : 
# --------
#
# This file contains all functions for the UML generation *see bellow*.
# The dict who contains all valide options for running the code.
# 
# Functions :
# -----------
# uncode_directory(path:str,paths:str)
#   =>  This function run the UML generation for a directory, it use the function of the package Java
#       (for now it's the java package but after it should be the package of the concerned language), 
#       who read all the files in the directory and if the file is a supported file, it ll start the generation for this file
# 
# uncode_code(code:str,path:str)
#   =>  This function run the UML generation for a part of code *Coming soon*
#
# uncode_file(filename:str,path:str)
#   => This function run the UML generation for a file. it use the function of the package Java, who read the file 
#       and thanks to the regex file, it ll detect all the importants parts of the code and complete the object **JUml** who can create the Uml after
#
####################################################################################


def uncode_directory(path,paths):
    """
    This function run the UML generation for a directory

    Args:
        path (str): the path where the code is located
        paths (str): the path for the output files (VScode extention location)
    """
    uml =java.init()
    if os.name!= "posix":
        path = path[1:]
    java.uncodeProject(path, uml)
    with open(paths+"/umlcd.js","w") as f:
        f.write(java.correct_export(uml.renderUml()))
    print("[PyUML] Uml Generated")
    
def uncode_code(code,path):
    """
    This function run the UML generation for a part of code

    Args:
        code (str): the part of code to be generated
        path (str): the path for the output files (VScode extention location)
    """
    print("[PyUML] code to uml Coming soon")
    pass
		
def uncode_file(filename,path):
    """
    This function run the UML generation for a file

    Args:
        filename (str): the part of code to be generated
        path (str): the path for the output files (VScode extention location)
    """
    uml =java.init()
    if os.name!= "posix":
        filename = filename[1:]
    java.uncodeFile(filename, uml)
    with open(path+"/umlcd.js","w") as f:
        f.write(java.correct_export(uml.renderUml()))
    print("[PyUML] Uml Generated")

# Arguments dictionary
arg_dict = {
    "-d" : uncode_directory,
    "-f" : uncode_file,
    "-c" : uncode_code,
}

# Main function for run
if __name__ == '__main__':
    # Get the path location of the main(VScode location) 
    path = sys.argv[0].split("main")[0]
    # Check there is the good amount of arg
    if len(sys.argv) <3:
        raise Exception('Needs more options for run')
    # Check the option is available
    if not sys.argv[1] in arg_dict:
        raise Exception('Unknown option {}'.format(sys.argv[1]))
    # Run the script
    arg_dict[sys.argv[1]](sys.argv[2],path)