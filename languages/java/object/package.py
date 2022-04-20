# -*- coding: utf-8 -*-$
##!/usr/bin/env python3
# Author :
#			Leo Le Van Canh dit Ban
#			Adrien Grzechowiak
# Date : 2022-03-29



####################################################################################
#                File Description [Package.py] 
#
# Utility : 
# --------
#
# This file contains the Class Package , it's used by the object JUml, to store different package of the project
#
## Class :
# -------
#Packages()
#    L addClass(self,classe)
#    |       L This function is used to add a class to the current package
#    L getName(self)
#    |       L this function is call when we need to get the name of the package
#    L renderUml(self,cnt)
#             L This function is called when we need to convert the object to JavaScript code
#
####################################################################################

class Packages:

	def __init__(self, name: str):
		self.name = name
		self.classes = []

	def addClass(self, classe):		
		self.classes.append(classe)

	def getName(self):
		return self.name

	def renderUml(self,cnt):
		txt = "//package " + self.name + " \n"
		for classe in self.classes:
			txt += "\t" + classe.renderUml(cnt)
		txt += "\n//-------------------------\n"
		return txt
  
