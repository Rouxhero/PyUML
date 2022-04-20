#_addon-java
# -*- coding: utf-8 -*-$
##!/usr/bin/env python3
# Author :
# 			Leo Le Van Canh dit Ban
# 			Adrien Grzechowiak
# Date : 2022-01-18
from tkinter.filedialog import askdirectory
import re
from java.object import *
####################################################################################
#                File Description [main.py] 
#
# Utility : 
# --------
#
# This file contains all functions for the UML generation *see bellow*.
# detect all class declaration , attribute and methodeThe dict who contains all valide options for running the code.
# 
# Functions :
# -----------
#collectPackage(package: list, uml)
# 		=> This function is called when the script found a package in a java file
#
#collectClass(classN: list, uml)
# 		=> This function is called when the script found a class in a java file
#
# collectMethod(methodes: list, uml)
#		=> This function is called when the script found a methode in a java file, and add to the class previously founded
#
# collectAttributes(attribue: list, uml)
# 		=> This function is called when the script found an Attribute in a java file and add to the class previously founded
#
# uncodeFile(filename: str, uml=JUml())
#        => This function is called by the main script of the extention, and analyse the file in parram
#
#  uncodeProject(path: str, uml=JUml())
#		=> This function is called by the main script of the extention, and analyse the directory in parram
#
#  init()
# 		=> This function is called by the main script, to initialize the language UML object
#
#  correct_export(text)
# 		=> This function is called when the UML is generated and needs to clear some data(ex : Array or list)
#
####################################################################################

############### Variables #################
# regex_option (dict) : dictionary of all regex options, with value for traitement
regex_option = {}


############### Functions #####################
def collectPackage(package: list, uml):
	if package != []:
		uml.setCurrentPackage(Packages(package[0].split(" ")[1]))
	else:
		uml.setCurrentPackage(None)


def collectClass(classN: list, uml):
	if classN != []:
		uml.setCurrentClass(JavaClass(classN[0]))


def collectMethod(methodes: list, uml):
	for methode in methodes:
		uml.addMethod(Methods(methode))


def collectAttributes(attribue: list, uml):
	for att in attribue:
		uml.addAttribute(Attributes(att))

# def collectImport(importe_l : list, uml):
#     for imp in importe_l:
#         uml.addImport(Import(imp))

############## Functions necessary for working language #################
def uncodeFile(filename: str, uml=JUml()):
	"""
	Read file and detect all regex patterns of java file
	Return class object, link to file
	:param filename: 
	java filename to uncode
	:param uml: optional uml object for multi file support
	:return class JavaClass object
	:CU : valid fileName
	"""
	with open(filename, "r") as f:
		lines = f.read()
		for case in regex_option:
			data = re.findall(case, lines)
			regex_option[case](data, uml)


def uncodeProject(path: str, uml=JUml()):
	for path, dirs, files in os.walk(path):
		for filename in files:
			if filename.endswith(".java"):
				uncodeFile(path + "/" + filename, uml)

def init():
	"""
	Create all asset needs for addon
	"""
	return JUml()

def correct_export(text):
	"""
	This function is used to clean the code
	

	Args:
		text (str): The Uml text to clean

	Returns:
		str: the text cleaned
	"""
	text = re.sub(r"(?P<type>classes\.\w+)[\[\]]+","\g<type>",text)
	text = re.sub(r"[a-zA-Z]+<(?P<type>\w+)>","\g<type>",text)
	return text
	
### Updating regex_option with all methode
regex_option[package_declaration] = collectPackage
regex_option[class_declaration] = collectClass
regex_option[methode_declaration] = collectMethod
regex_option[attributes_declaration] = collectAttributes
# regex_option[import_declaration] = collectImport


# main for test
if __name__ == "__main__":
	uml =init()
	path = askdirectory()
	uncodeProject(path, uml)
	text = uml.renderUml()
	text = correct_export(text)
	print(text)