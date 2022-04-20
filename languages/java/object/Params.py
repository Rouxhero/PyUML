# -*- coding: utf-8 -*-$
##!/usr/bin/env python3
# Author :
#			Leo Le Van Canh dit Ban
#			Adrien Grzechowiak
# Date : 2022-03-29



####################################################################################
#                File Description [Params.py] 
#
# Utility : 
# --------
#
# This file contains the Class Params , it's used by the object JUml, to store param data from a methode
#
# Class :
# -------
#Params()
#    L __prepareData(self, data: tuple)
#    |       L This function is used to prepare the data of the Param into a dictionary
#    L renderUml(self)
#            L This function is called when we need to convert the object to JavaScript code
#
####################################################################################
class Params:
	"""
	Param Class for UML
	"""

	def __init__(self, data: str):
		self.args = []
		self.__prepareData(data)


	def __prepareData(self, data: str):
		for arg in data.split(","):
			self.args.append(tuple(arg.split(" ")))

	def renderUml(self):
		txt = "("
		if len(self.args) > 1:
			for arg in self.args[:len(self.args)-1]:
				txt += " ".join(arg) + ","
		txt += " ".join(self.args[-1])
		txt += ")"
		return txt

##############################
#					         #
#		Test Unitaire        #
#                            #
##############################
if __name__ == "__main__":
	print("Start test for Params\n"+"-"*26)
	test_dict = {
		"int price":False,
		"int index , String name":False,
	}
	responseDict = {
		"int price":"(int price)",
		"int index , String name":"(int index , String name)",
	}
	for test in test_dict:
		print("Testing : \"{}\"".format(test),end=" : ")
		object_test = Params(test)
		if object_test.renderUml() != responseDict[test] :
			print("Fail")
			print(object_test.renderUml())
		else:
			print("Success")
			test_dict[test] = True
	if not all(test_dict.values()):
		raise Exception("Test Fail !")
