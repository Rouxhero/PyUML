# -*- coding: utf-8 -*-$
##!/usr/bin/env python3
# Author :
#			Leo Le Van Canh dit Ban
#			Adrien Grzechowiak
# Date : 2022-03-29

try:
	from java.regexData import *
	from java.object.Params import *
except Exception:
	import sys
	sys.path.insert(0,"../")
	from regexData import *
	from Params import *



####################################################################################
#                File Description [Methodes.py] 
#
# Utility : 
# --------
#
# This file contains the Class Methodes , it's used by the object JUml, to store an Methode data
#
# Class :
# -------
#Methods()
#    L __convertData(self)
#    |       L This function is used to convert the data of the dictionary into correct format for UML
#    L __prepareData(self, data: tuple)
#    |       L This function is used to prepare the data of the Method into a dictionary
#    L __prepareImport(self)
#    |       L This function is used to extract relation of the Method
#    L renderUml(self)
#            L This function is called when we need to convert the object to JavaScript code
#
####################################################################################
class Methods:
	"""

	Methods class for UML
	"""

	def __init__(self, data: tuple):
		self.flags = {
			"abstract": "",
			"security": "",
			"static": "",
			"returnT": "",
			"name": "",
			"param": "",
		}
		self.importNeeds = []
		self.__prepareData(data)
		self.__convertData()
		self.__prepareImport()

	def __convertData(self):
		self.flags["security"] = security_Dict[self.flags["security"]]
		self.flags["abstract"] = class_specification[self.flags["abstract"]]
		self.flags["static"] = class_specification[self.flags["static"]]

	def __prepareData(self, data: tuple):
		indexData = 0
		for flag in self.flags:
			if flag == "param":
				self.flags[flag] = Params(re.sub("\t|\n|\(|\)", "", data[indexData]))
			else:
				self.flags[flag] = re.sub("\t|\n| ", "", data[indexData])
			indexData += 1

	def __prepareImport(self):
		if self.flags["returnT"] != "":
			self.flags["returnT"]= re.sub(r"(?P<type>\w+)[\[\]]+","\g<type>",self.flags["returnT"])
			rType= re.sub(r"[a-zA-Z]+<(?P<type>\w+)(,(?P<type2>\w+))?>","\g<type>|\g<type2>",self.flags["returnT"])
			if "|" in rType:
				rType = rType.split("|")
				for types in rType:
					if not types in java_loaded_type:
						self.importNeeds.append(types)
			else :			
				if not rType in java_loaded_type:
					self.importNeeds.append(rType)

	def renderUml(self):
		txt = (
			self.flags["security"]
			+ " "
			+ self.flags["abstract"]
			+ " "
			+ self.flags["static"]
			+ " "
			+ self.flags["name"]
			+ " "
			+ self.flags["param"].renderUml()
		)
		if self.flags["returnT"] != "":
			txt += " :" + self.flags["returnT"]
		return txt

##############################
#					         #
#		Test Unitaire        #
#                            #
##############################
if __name__ == "__main__":
	print("Start test for Methodes\n"+"-"*26)
	test_dict = {
		"public static int getNbPlayer()":False,
		"private String getName()":False,
		"public void setPrice(int price)":False,
		"protected void updatePlayers(int index,String name)":False
	}
	responseDict = {
		"public static int getNbPlayer()":"+  {static} getNbPlayer () :int",
		"private String getName()":"-   getName () :String",
		"public void setPrice(int price)":"+   setPrice (int price) :void",
		"protected void updatePlayers(int index,String name)":"#   updatePlayers (int index,String name) :void"
	}
	for test in test_dict:
		print("Testing : \"{}\"".format(test),end=" : ")
		exploded_data = re.findall(methode_declaration,test)
		if exploded_data != []:
			exploded_data = exploded_data[0]
			object_test = Methods(exploded_data)
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

