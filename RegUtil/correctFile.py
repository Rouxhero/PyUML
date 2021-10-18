# author : Rouxhero 
import re

def correctFile(path):
	with open(path,'r') as file:
		data = file.read()
		re.sub(r'\s:\s',':',data)
		re.sub(r':\s',':',data)
		re.sub(r'\s:',':',data)
		re.sub(r'\s+{','{',data)
		open(path,'w').write(data)

