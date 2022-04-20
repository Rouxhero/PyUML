# -*- coding: utf-8 -*-$
##!/usr/bin/env python3
# Author :
#			Leo Le Van Canh dit Ban
#			Adrien Grzechowiak
# Date : 2022-01-15
import os
import re
####################################################################################
#                File Description [regexData.py] 
#
# Utility : 
# --------
#
# This file contains all regex variable for the java code detection
# 
####################################################################################


################ Variable #################
#Import management
import_declaration = r"import .*;"

# security_Dict (dict) contains key and value for security word in java
security_Dict = {"protected": "#", "public": "+", "private": "-"}
# class_specification (dict) contains key and value for class specification in java0
class_specification = {
	"abstract": "{abstract}",
	"static": "{static}",
	"final": "{final}",
	"": "",
}
# java_loaded_type (list) contains all  type how are already loaded in java (not needs import)
java_loaded_type = [
	"int",
	"String",
	"void",
	"boolean",
	"Integer",
	"float",
	"double",
	"Double",
	"Exception",
	"Scanner",
	"",
]

abstract_r = r"(abstract\s)?"
class_type_r = r"(class|interface|enum)"
dependencies_r = r"(extends|implements)"
protection_r = r"(protected|public|private)"

# class_declaration (regex pattern) :
# (public)\s => security declaration
# (abstract)?\s? => abstract declaration (optional)
# (class|interface|enum)\s => class type
# ([A-Z][a-zA-Z]*)\s?\s? => class name
# ((extends|implements)\s => dependencies
# [a-zA-Z]+)?			 => dependencies class name
class_declaration = (
	r"(public)\s"
	+ abstract_r
	+ ""
	+ class_type_r
	+ "\s([A-Z]\w*)\s?\s?("
	+ dependencies_r
	+ "\s\w+)?"
)
# methode_declaration (regex pattern) :
# (abstract\s)? => abstract declaration (optional)
# (protected|public|private)\s? => protection declaration
# ([a-zA-Z\[\]<,>]+)?\s => type declaration (optional)
# ([a-zA-Z][a-zA-Z]*)\s? => name declaration
# ?(\(([a-zA-Z]+\s[a-zA-Z]+,?\s?)*\)) => parameter declaration
methode_declaration = (
	r""
	+ abstract_r
	+ ""
	+ protection_r
	+ "\s?(static\s)?([a-zA-Z\[\]<,>]+)?\s(\w\w*)\s?(\(\n?\s*(\w+\s\w+,?\n?\s*)*\))"
)
# attributes_declaration (regex pattern):
# (protected|public|private)\s => protection declaration
# (final\s)? => final declaration (optional)
# (static\s)? => static declaration (optional)
# ([a-zA-Z\[\]<,>]+)\s => type declaration
# ([a-zA-Z][a-zA-Z1-9_]*) => attributes name
# (;|\s=) => end line
attributes_declaration = (
	r"" + protection_r + "\s(final\s)?(static\s)?([a-zA-Z\[\]<,>]+)\s(\w\w*)(;|\s=)"
)
# package_declaration (regex pattern) :
package_declaration = r"package\s[a-zA-Z.]*"
# java_loaded_class (list) list of class names that are already loaded in java (no need to import)
java_loaded_class = ["Exception"]
