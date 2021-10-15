##!/usr/bin/env python3
from RegUtil.data import *


class Import :

	def __init__(self,packList):
		self.data = packList
		self.__genImport()



	def __genImport(self):
		print("generating Import : ",end="")
		allClassName = {}
		for pack in self.data:
			for clas in pack.classData:
				allClassName[(clas.flag['name'])] = [clas.types,clas,pack.name]

		txt = ""
		for tpe in allClassName:
			tpEE = allClassName[tpe]
			txt = ""
			for tps in tpEE[0]:
				tps = cleanTT(tps)
				tps = tps.split('<')
				tpss = tps
				tps = []
				for tt in tpss:
					allD = tt.split(',')
					for al in allD:
						tps.append(al)
				for tt in tps :
					tt = tt.split('>')[0]
					if tt in importVal :
						txt += importVal[tt]+line
					elif not tt in NoImport:
						if tt in allClassName :
							target = allClassName[tt][2]
							txt += "import {}.{} ;".format(target,tt)+line
			tpEE[1].imports = txt
		print('Done')

 
