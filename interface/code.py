import tkinter as tk
import tkinter.ttk as tkk
from tkinter.filedialog import *
from interface.entry import *
from interface.uml import *
from interface.function import *
from interface.data import *
import re

class CodePage(tk.Frame):
    def __init__(self, parent, controller):
        tk.Frame.__init__(self, parent)
        self.columnconfigure(1, weight=1)
        self.columnconfigure(2, weight=1)
        self.MultiFileflag = {
        "Project Path":"",
        "showPackage":None,
        "showRelation":None,
        }
        self.var = {}
        self.OneFileflag = {
        "File Path":"",
        "showPackage":None,
        "showRelation":None,
        }

        self.func  = {
        "Project Path": self.changePath,
        "showPackage": self.changePack,
        "showRelation": self.changeRela,
        "File Path": self.changeFile,
        }
        self.statuImport = True # If True : multiFile else oneFile
        self.varImprot =StringVar()
        self.varImprot.set("switch One file mode")
        self.varAsk = tk.LabelFrame(
            self, text="Configure Import", borderwidth=2, relief=GROOVE
            )
        self.__showImport()
        tk.Button(self, textvariable=self.varImprot , command=self.changeType).grid(
            row=0, column=0 ,sticky="e"
        )


    def __showImport(self):           
        self.varAsk = tk.LabelFrame(
            self, text="Configure Import", borderwidth=2, relief=GROOVE
        )
        pos = 0
        if self.statuImport :
            for key in self.MultiFileflag:
                # Show First Text
                tk.Label(self.varAsk, text="{} :".format(key)).grid(
                    row=pos, column=0, sticky="nsew"
                    )
                if key != "Project Path":
                    self.var[key] = tk.IntVar()
                    tk.Checkbutton(
                        self.varAsk,
                        variable=self.var[key],
                        onvalue=1,
                        offvalue=0,
                    ).grid(row=pos, column=1 , sticky="e")
                else :
                    # Variable Text
                    self.var[key] = tk.StringVar()
                    self.var[key].set(defauldName[key])

                    self.output_label = tk.Label(
                        self.varAsk,
                        textvariable=self.var[key],
                        width=50,
                        bg="white",
                        borderwidth=2,
                        relief=GROOVE,
                        )
                    self.output_label.grid(column=1,columnspan=2 ,row=pos)
                    tk.Button(self.varAsk, text="...", command=self.func[key]).grid(
                        row=pos, column=4 ,sticky="e"
                        )
                pos+=1
        else :
            for key in self.OneFileflag:
                # Show First Text
                tk.Label(self.varAsk, text="{} :".format(key)).grid(
                    row=pos, column=0, sticky="nsew"
                    )
                if key != "File Path":
                    self.var[key] = tk.IntVar()
                    tk.Checkbutton(
                        self.varAsk,
                        variable=self.var[key],
                        onvalue=1,
                        offvalue=0,
                    ).grid(row=pos, column=1 , sticky="e")
                else :
                    # Variable Text
                    self.var[key] = tk.StringVar()
                    self.var[key].set(defauldName[key])

                    self.output_label = tk.Label(
                        self.varAsk,
                        textvariable=self.var[key],
                        width=50,
                        bg="white",
                        borderwidth=2,
                        relief=GROOVE,
                        )
                    self.output_label.grid(column=1,columnspan=2 ,row=pos)
                    tk.Button(self.varAsk, text="...", command=self.func[key]).grid(
                        row=pos, column=4 ,sticky="e"
                        )
                pos+=1
        self.varAsk.grid(column=0,row=1)

    def changePath(self):
        self.var["Project Path"].set(selecPath())
    
    def changePack(self):
        pass
    
    def changeRela(self):
        pass
    
    def changeFile(self):
        self.var["File Path"].set(selectFileJava())

    def changeType(self):
        self.statuImport =  not self.statuImport
        if self.statuImport :
             self.varImprot.set("switch One file mode")
        else :
             self.varImprot.set("switch Multi file mode")
        self.__showImport()