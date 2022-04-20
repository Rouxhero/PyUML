# -*- coding: utf-8 -*-$
##!/usr/bin/env python3
# Author :
#			Leo Le Van Canh dit Ban
#			Adrien Grzechowiak
# Date : 2022-03-29



####################################################################################
#                File Description [Position.py] 
#
# Utility : 
# --------
#
# This file contains the Class Position , it's used by the object JUml, to set position of all class elements in the layout
#
## Class :
# -------
#Position()
#    L addOne(self,width)
#    |       L this function is used when we add a class element in the layout
#    L getPosition(self)
#            L This function is called when we needs to get the position for the layout
#
####################################################################################
class Position:
	"""
	This class represents a position in the Uml graph in JointJS api
	it's the default position for all class, with no layout 
	"""
	def __init__(self):
		self.x = 50
		self.y = 50
	
	def addOne(self,width):
		self.x += width + 30
		if self.x >= 1800:
			self.y += 200
			self.x = 50

	def getPosition(self):
		return self.x, self.y

