# -*- coding: utf-8 -*-$
##!/usr/bin/env python3
# Author :
#			Leo Le Van Canh dit Ban
#			Adrien Grzechowiak
# Date : 2022-01-19
import re




try:
	from java.regexData import *
	from java.object.style import *
except Exception:
	import sys
	sys.path.insert(0,"../")
	from regexData import *
	from style import *
	from Position import Position
# Convertion dictionary for type java to JointJS
convertJoint = {
	"class":"Class",
	"interface" : "Interface",
	"enum":"Class"
}
####################################################################################
#                File Description [JavaClass.py] 
#
# Utility : 
# --------
#
# This file contains the Class JavaClass , it's used by the object JUml, to store all data about a class
#
## Class :
# -------
#JavaClass()
#    L __prepareData(self, data: tuple)
#    |       L This function is used to prepare the data of the attribute into a dictionary
#    L addMethod(self, method)
#    |       L This function is used to add a method to the current package
#    L addAttribute(self, attr)(self, method)
#    |       L This function is used to add an Attributes to the current package
#    L renderUml(self,cnt)
#             L This function is called when we need to convert the object to JavaScript code
#
####################################################################################

class JavaClass:
	"""
	Java class for UML
	"""

	def __init__(self, data: tuple):
		self.flags = {"security": "", "abstract": "", "type": "", "name": ""}
		self.relation = []
		self.attributes = []
		self.methods = []		
		self.importNeeds = ""
		self.__prepareData(data)
		

	def __prepareData(self, data: tuple):
		indexData = 0
		for flag in self.flags:
			self.flags[flag] = re.sub(" ", "", data[indexData])
			indexData += 1
		self.relation = data[indexData].split(" ")
		if len(self.relation) == 2:
			if not self.relation[1] in java_loaded_type:
				print(self.relation[1])
				self.importNeeds = [self.relation[1]]


	def addAttribute(self, attr):
		self.attributes.append(attr)

	def addMethod(self, method):
		self.methods.append(method)

	def renderUml(self,cnt):
		suplement = ""
		if self.flags["abstract"] != "": 
			typs ="Abstract"
			typs_style = typs
		elif self.flags["type"] == "enum":
			typs ="Class"
			typs_style = "Enum"
			suplement = "<<Enum>>"
		else:
			typs = convertJoint[self.flags["type"]]
			typs_style = typs
		if "Main" in self.flags["name"]:
			typs_style = "Main"
		atrTxt = ""
		lenghts = len(self.flags["name"])+20
		for attr in self.attributes:
			tt = attr.renderUml()
			lenghts =  max(lenghts,len(tt))
			atrTxt += "'"+tt + "',"
		methTxt = ""
		for method in self.methods:
			tt = method.renderUml() 
			lenghts =  max(lenghts,len(tt))
			methTxt += "'" +tt + "',"
		height = len(self.methods) + len(self.attributes)
		width = max(40,(lenghts*5)+10)
		x_coef,y_coef = cnt.getPosition()
		cnt.addOne(width)
		txt = self.flags["name"]+": new uml."+typs+"""({
        position: { x:"""+str(x_coef)+"""  , y: """+str(y_coef)+""" },
        size: { width: """+str(width)+""", height:""" +str(max(40,height*20))+""" },
        name: '"""+suplement+self.flags["name"]+"""',
        attributes: ["""+atrTxt+"""],
        methods: ["""+methTxt+"""],
        attrs: {"""+stylesheet[typs_style]+"""
        }
    }),"""
		return txt



