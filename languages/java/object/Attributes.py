# -*- coding: utf-8 -*-$
##!/usr/bin/env python3
# Author :
#			Leo Le Van Canh dit Ban
#			Adrien Grzechowiak
# Date : 2022-03-29
try:
	from java.regexData import *
except Exception:
	import sys
	sys.path.insert(0,"../")
	from regexData import *
####################################################################################
#                File Description [Attributes.py] 
#
# Utility : 
# --------
#
# This file contains the Class Attributes , it's used by the object JUml, to store an Attribute data
#
# Class :
# -------
#Attributes()
#    L __convertData(self)
#    |       L This function is used to convert the data of the dictionary into correct format for UML
#    L __prepareData(self, data: tuple)
#    |       L This function is used to prepare the data of the attribute into a dictionary
#    L __prepareImport(self)
#    |       L This function is used to extract relation of the attribute
#    L renderUml(self)
#            L This function is called when we need to convert the object to JavaScript code
#
####################################################################################
class Attributes:
	"""
	Attributes class for UML
	"""

	def __init__(self, data: tuple):
		self.flags = {"security": "", "final": "", "static": "", "type": "", "name": ""}
		self.__prepareData(data)
		self.__convertData()
		self.importNeeds = []
		self.__prepareImport()

	def __convertData(self):
		self.flags["security"] = security_Dict[self.flags["security"]]
		self.flags["final"] = class_specification[self.flags["final"]]
		self.flags["static"] = class_specification[self.flags["static"]]

	def __prepareData(self, data: tuple):
		indexData = 0
		for flag in self.flags:
			self.flags[flag] = re.sub(" ", "", data[indexData])
			indexData += 1

	def __prepareImport(self):
		if self.flags["type"] != "":
			self.flags["type"]= re.sub(r"(?P<type>\w+)[\[\]]+","\g<type>",self.flags["type"])
			rType= re.sub(r"[a-zA-Z]+<(?P<type>\w+)(,(?P<type2>\w+))?>","\g<type>|\g<type2>",self.flags["type"])
			if "|" in rType:
				rType = rType.split("|")
				for types in rType:
					if not types in java_loaded_type:
						self.importNeeds.append(types)
			else :			
				if not rType in java_loaded_type:
					self.importNeeds.append(rType)

	def renderUml(self):
		return " ".join(list(self.flags.values()))


##############################
#					         #
#		Test Unitaire        #
#                            #
##############################
if __name__ == "__main__":
	print("Start test for Attributes\n"+"-"*26)
	test_dict = {
		"public static int nb_player;":False,
		"private String name;":False,
		"public final static double PRICE = 5":False,
		"protected List<String> players;":False
	}
	responseDict = {
		"public static int nb_player;":"+  {static} int nb_player",
		"private String name;":"-   String name",
		"public final static double PRICE = 5":"+ {final} {static} double PRICE",
		"protected List<String> players;":"#   List<String> players"
	}
	for test in test_dict:
		print("Testing : \"{}\"".format(test),end=" : ")
		exploded_data = re.findall(attributes_declaration,test)
		if exploded_data != []:
			exploded_data = exploded_data[0]
			object_test = Attributes(exploded_data)
			if object_test.renderUml() != responseDict[test] :
				print("Fail")
				print(object_test.renderUml())
			else:
				print("Success")
				test_dict[test] = True
		else:
			print("Error, Invalide test {}".format(test))
	if not all(test_dict.values()):
		raise Exception("Test Fail !")


