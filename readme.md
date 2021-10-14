<p align="center">
	<img src="https://see.fontimg.com/api/renderfont4/WyO0O/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjMEYxQTdEIiwiYmdjIjoiIzAwMDAwMCIsInQiOjF9/UHlVTUw/magic-owl-personal-use.png" alt="Title">
</p>



![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/Rouxhero/PyUML?style=flat-square)
[![GitHub all releases](https://img.shields.io/github/downloads/Rouxhero/PyUML/total)](https://github.com/Rouxhero/GitDuBled/archive/refs/tags/V1.1.zip)
# How to use !

WSD synthaxe
-
```wsd
<package1Name>{

	[abstract]<class1>{
		[#|+|-] [static] [final] <Vartype> <Varname>
		[#|+|-] [static] [final] <Funcname>(<argType> <argName> , <..>)[:<return>]
	}
	[abstract]<enum1>{
		[#|+|-] [static] [final] <Vartype> <Varname>
		[#|+|-] [static] [final] <Funcname>(<argType> <argName> , <..>)[:<return>]
	}
	[abstract]<interface>{
		[#|+|-] [static] [final] <Vartype> <Varname>
		[#|+|-] [static] [final] <Funcname>(<argType> <argName> , <..>)[:<return>]
	}

	<class1><|--<class2>
	<class1>*--<class3>
}

```
Run
-

use `run.bat` or `./run.sh` to run UI<br>
/!\ if you have install python3 in windows path with the name `python3`, you needs to change run.bat with python3
> Main while check update and downloads New file if needs !

## TODO 
- [x] Corriger Extends
- [ ] Problemen Extends/Iplement name -> .* name.*
- [x] corriger Abstract FUnc
- [ ] corriger open GUI linux : /usr/bin/thunar ~
- [x] import *****
- [ ] Create UML
- [ ] Load UML
