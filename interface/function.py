from tkinter.filedialog import *

def selecPath():
    return askdirectory()


def selectFile():
    return askopenfilename(
        title="Open WSD file", filetypes=[("wsd files", ".wsd"), ("all files", ".*")]
    )
def selectFileJava():
    return askopenfilename(
        title="Open Java file", filetypes=[("java files", ".java"), ("all files", ".*")]
    )

