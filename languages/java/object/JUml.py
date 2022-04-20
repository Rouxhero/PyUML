
# -*- coding: utf-8 -*-$
##!/usr/bin/env python3
# Author :
#			Leo Le Van Canh dit Ban
#			Adrien Grzechowiak
# Date : 2022-01-19
from java.object.Position import *
####################################################################################
#                File Description [JUml.py] 
#
# Utility : 
# --------
#
# This file contains the main object for java UML class diagrame. This object is updated by the main script of this language 
# and at the end , it's generate the code , in JavaScript, using JointJS API.
#
# Functions :
# -----------
#
#  head(w,h)
#       => this litle function create the header of the JavaScipt file, with the given option for the canvas (Width,Height)
#
# Class :
# -------
#
# JUml()
#    L setCurrentPackage(self, package)
#    |       L this function is to set the current package where the scipt working
#	 L setCurrentClass(self, classe)
#    |        L this function is to set the current class where the scipt working
#    L addMethod(self, method)
#    |        L this function is to add the founded methode to the current class
#    L addAttribute(self, attribute)
#	 |        L this function is to add the founded attribut to the current class
#    L _makeRelation(self)
# 	 |        L this function is called when we needs to get back the JS code. It's create relation:
#    |               - Association
#    |   			 - Implementation
# 	 | 				 - Generalization	
#	 L renderUml(self)
#             L This function is called when we need to get back the JS code. It's generate all JavaScript code
#
####################################################################################


def head(w,h) :
    return """
var graph = new joint.dia.Graph();
const removed = Array()
const paper =  new joint.dia.Paper({
    el: document.getElementById('paper'),
    width: """+str(w)+""",
    height: """+str(h)+""",
    gridSize: 1,
    model: graph
});

var uml = joint.shapes.uml;

var classes = {
"""

class JUml:
	"""
	Main class for Java UML render. 
	"""

	def __init__(self):
		self.current = {"package": None, "class": None}
		self.packages = []
		self.classes = []

	def setCurrentPackage(self, package):
		if self.current["package"] != None and package != None:
			if package.getName() != self.current["package"].getName():
				self.current["package"] = package
				self.packages.append(package)
		else:
			self.current["package"] = package
			self.packages.append(package)

	def setCurrentClass(self, classe):
		self.current["class"] = classe
		if self.current["package"] == None:
			self.classes.append(classe)
		else:
			self.current["package"].addClass(classe)

	def addMethod(self, method):
		self.current["class"].addMethod(method)

	def addAttribute(self, attribute):
		self.current["class"].addAttribute(attribute)
	def _makeRelation(self):
		txt = ""
		# Abstract: ƒ ()
		# AbstractView: ƒ ()
		# Aggregation: ƒ ()
		# Association: ƒ ()
		# Class: ƒ ()
		# ClassView: ƒ ()
		# Composition: ƒ ()
		# EndState: ƒ ()
		# Generalization: ƒ ()
		# Implementation: ƒ ()
		# Interface: ƒ ()
		# InterfaceView: ƒ ()
		# StartState: ƒ ()
		# State: ƒ ()
		# Transition: ƒ ()
		for package in self.packages:
			if package != None:
				for classe in package.classes:
					if classe.importNeeds != "":
						if classe.relation[0] == "implements":
							txt += "if (classes."+classe.relation[1]+"!=null){relations.push(new uml.Implementation({ source: { id: classes."+classe.flags["name"]+".id }, target: { id: classes."+classe.relation[1]+".id }}))}\n"
						elif classe.relation[0] == "extends":
							txt += "if (classes."+classe.relation[1]+"!=null){relations.push(new uml.Generalization({ source: { id: classes."+classe.flags["name"]+".id }, target: { id: classes."+classe.relation[1]+".id }}))}\n"
					for attribute in classe.attributes:
						for imp in attribute.importNeeds:
							txt += "if (classes."+imp+"!=null ){relations.push(new uml.Association({ source: { id: classes."+classe.flags["name"]+".id }, target: { id: classes."+imp+".id }}))}\n"
					for method in classe.methods:
						for imp in method.importNeeds:
							txt += "if (classes."+imp+"!=null ){relations.push(new uml.Association({ source: { id: classes."+classe.flags["name"]+".id }, target: { id: classes."+imp+".id }}))}\n"

		for classe in self.classes:
			if classe.importNeeds != "":
				if classe.relation[0] == "implements":
						txt += "if (classes."+classe.relation[1]+"!=null ){relations.push(new uml.Implementation({ source: { id: classes."+classe.flags["name"]+".id }, target: { id: classes."+classe.relation[1]+".id }}))}\n"
				elif classe.relation[0] == "extends":
					txt += "if (classes."+classe.relation[1]+"!=null ){ relations.push(new uml.Generalization({ source: { id: classes."+classe.flags["name"]+".id }, target: { id: classes."+classe.relation[1]+".id }}))}\n"
					
			for attribute in classe.attributes:
				for imp in attribute.importNeeds:
					txt += "if (classes."+imp+"!=null){relations.push(new uml.Association({ source: { id: classes."+classe.flags["name"]+".id }, target: { id: classes."+imp+".id }}))}\n"
			for method in classe.methods:
				for imp in method.importNeeds:
					txt += "if (classes."+imp+"!=null){ relations.push(new uml.Association({ source: { id: classes."+classe.flags["name"]+".id }, target: { id: classes."+imp+".id }}))}\n"
		return txt



	def renderUml(self):
		txt = head(10000,10000)
		count = Position()
		for package in self.packages:
			if package != None:
				txt += package.renderUml(count)
		for classe in self.classes:
			txt += classe.renderUml(count)
		txt+="}"
		relation= self._makeRelation()

		txt += """
  
const allClass = Array()
Object.keys(classes).forEach(function(key) {
    graph.addCell(classes[key]);
    allClass.push(classes[key]);
});


var relations = [];
    """+relation+"""




"""
		return txt