
var graph = new joint.dia.Graph();
const removed = Array()
const paper =  new joint.dia.Paper({
    el: document.getElementById('paper'),
    width: 1800,
    height: 1800,
    gridSize: 1,
    model: graph
});

var uml = joint.shapes.uml;

var classes = {
    Main: new uml.Class({
        position: { x:50  , y: 50 },
        size: { width: 250, height:160 },
        name: 'Main',
        attributes: [],
        methods: ['+   collectPackage (Packages package,JUml uml)','+   collectClass (JavaClass class,JUml uml)','+   collectMethod (Methodes methodes,JUml uml)','+   collectAttributes (Attributes attr,JUml uml)','+   uncodeFile ( str filepath, str path)','+   uncodeProject ( str path,str path2)','+   init ()','+   correct_export (String text)',],
        attrs: {
 			'.uml-class-name-rect': {
                fill: '#70e1f5',
                stroke: '#ffffff',
                'stroke-width': 0.5
            },
            '.uml-class-attrs-rect': {
                fill: '#93F9B9',
                stroke: '#fff',
                'stroke-width': 0.5
            },
            '.uml-class-methods-rect': {
                fill: '#93F9B9',
                stroke: '#fff',
                'stroke-width': 0.5
            },
            '.uml-class-attrs-text': {
                ref: '.uml-class-attrs-rect',
                'ref-y': 0.5,
                'y-alignment': 'middle'
            },
            '.uml-class-methods-text': {
                ref: '.uml-class-methods-rect',
                'ref-y': 0.5,
                'y-alignment': 'middle'
            },
        }
    }),	RegexData: new uml.Class({
        position: { x:295  , y: 50 },
        size: { width: 155, height:40 },
        name: 'RegexData',
        attributes: [],
        methods: [],
        attrs: {
 '.uml-class-name-rect': {
                fill: '#ff8450',
                stroke: '#fff',
                'stroke-width': 0.5,
            },
            '.uml-class-attrs-rect': {
                fill: '#fe976a',
                stroke: '#fff',
                'stroke-width': 0.5
            },
            '.uml-class-methods-rect': {
                fill: '#fe976a',
                stroke: '#fff',
                'stroke-width': 0.5
            },
            '.uml-class-attrs-text': {
                ref: '.uml-class-attrs-rect',
                'ref-y': 0.5,
                'y-alignment': 'middle'
            },
            '.uml-class-methods-text': {
                ref: '.uml-class-methods-rect',
                'ref-y': 0.5,
                'y-alignment': 'middle'
            }
        }
    }),
//-------------------------
//package projet.object 
	JUml: new uml.Class({
        position: { x:50  , y: 50 },
        size: { width: 220, height:120 },
        name: 'JUml',
        attributes: [],
        methods: ['+   setCurrentPackage (Attributes package)','+   setCurrentClass (Attributes classe)','+   addAttribute (Attributes attr)','+   addMethod (Methodes method)','#   makeRelation ()','+   renderUml ()',],
        attrs: {
 '.uml-class-name-rect': {
                fill: '#ff8450',
                stroke: '#fff',
                'stroke-width': 0.5,
            },
            '.uml-class-attrs-rect': {
                fill: '#fe976a',
                stroke: '#fff',
                'stroke-width': 0.5
            },
            '.uml-class-methods-rect': {
                fill: '#fe976a',
                stroke: '#fff',
                'stroke-width': 0.5
            },
            '.uml-class-attrs-text': {
                ref: '.uml-class-attrs-rect',
                'ref-y': 0.5,
                'y-alignment': 'middle'
            },
            '.uml-class-methods-text': {
                ref: '.uml-class-methods-rect',
                'ref-y': 0.5,
                'y-alignment': 'middle'
            }
        }
    }),	Params: new uml.Class({
        position: { x:300  , y: 50 },
        size: { width: 155, height:40 },
        name: 'Params',
        attributes: [],
        methods: ['-   prepareData (String data)','+   renderUml ()',],
        attrs: {
 '.uml-class-name-rect': {
                fill: '#ff8450',
                stroke: '#fff',
                'stroke-width': 0.5,
            },
            '.uml-class-attrs-rect': {
                fill: '#fe976a',
                stroke: '#fff',
                'stroke-width': 0.5
            },
            '.uml-class-methods-rect': {
                fill: '#fe976a',
                stroke: '#fff',
                'stroke-width': 0.5
            },
            '.uml-class-attrs-text': {
                ref: '.uml-class-attrs-rect',
                'ref-y': 0.5,
                'y-alignment': 'middle'
            },
            '.uml-class-methods-text': {
                ref: '.uml-class-methods-rect',
                'ref-y': 0.5,
                'y-alignment': 'middle'
            }
        }
    }),	Attributes: new uml.Class({
        position: { x:485  , y: 50 },
        size: { width: 160, height:80 },
        name: 'Attributes',
        attributes: [],
        methods: ['-   convertData ()','-   prepareData (Tuple data)','-   prepareImport ()','+   renderUml ()',],
        attrs: {
 '.uml-class-name-rect': {
                fill: '#ff8450',
                stroke: '#fff',
                'stroke-width': 0.5,
            },
            '.uml-class-attrs-rect': {
                fill: '#fe976a',
                stroke: '#fff',
                'stroke-width': 0.5
            },
            '.uml-class-methods-rect': {
                fill: '#fe976a',
                stroke: '#fff',
                'stroke-width': 0.5
            },
            '.uml-class-attrs-text': {
                ref: '.uml-class-attrs-rect',
                'ref-y': 0.5,
                'y-alignment': 'middle'
            },
            '.uml-class-methods-text': {
                ref: '.uml-class-methods-rect',
                'ref-y': 0.5,
                'y-alignment': 'middle'
            }
        }
    }),	Methods: new uml.Class({
        position: { x:675  , y: 50 },
        size: { width: 150, height:80 },
        name: 'Methods',
        attributes: [],
        methods: ['-   convertData ()','-   prepareData (Tuple data)','-   prepareImport ()','+   renderUml ()',],
        attrs: {
 '.uml-class-name-rect': {
                fill: '#ff8450',
                stroke: '#fff',
                'stroke-width': 0.5,
            },
            '.uml-class-attrs-rect': {
                fill: '#fe976a',
                stroke: '#fff',
                'stroke-width': 0.5
            },
            '.uml-class-methods-rect': {
                fill: '#fe976a',
                stroke: '#fff',
                'stroke-width': 0.5
            },
            '.uml-class-attrs-text': {
                ref: '.uml-class-attrs-rect',
                'ref-y': 0.5,
                'y-alignment': 'middle'
            },
            '.uml-class-methods-text': {
                ref: '.uml-class-methods-rect',
                'ref-y': 0.5,
                'y-alignment': 'middle'
            }
        }
    }),	Packages: new uml.Class({
        position: { x:855  , y: 50 },
        size: { width: 170, height:60 },
        name: 'Packages',
        attributes: [],
        methods: ['+   addClass (Attributes classe)','+   getName ()','+   renderUml (Position cnt)',],
        attrs: {
 '.uml-class-name-rect': {
                fill: '#ff8450',
                stroke: '#fff',
                'stroke-width': 0.5,
            },
            '.uml-class-attrs-rect': {
                fill: '#fe976a',
                stroke: '#fff',
                'stroke-width': 0.5
            },
            '.uml-class-methods-rect': {
                fill: '#fe976a',
                stroke: '#fff',
                'stroke-width': 0.5
            },
            '.uml-class-attrs-text': {
                ref: '.uml-class-attrs-rect',
                'ref-y': 0.5,
                'y-alignment': 'middle'
            },
            '.uml-class-methods-text': {
                ref: '.uml-class-methods-rect',
                'ref-y': 0.5,
                'y-alignment': 'middle'
            }
        }
    }),	Position: new uml.Class({
        position: { x:1055  , y: 50 },
        size: { width: 150, height:40 },
        name: 'Position',
        attributes: [],
        methods: ['+   addOne (int width)','+   getPosition ()',],
        attrs: {
 '.uml-class-name-rect': {
                fill: '#ff8450',
                stroke: '#fff',
                'stroke-width': 0.5,
            },
            '.uml-class-attrs-rect': {
                fill: '#fe976a',
                stroke: '#fff',
                'stroke-width': 0.5
            },
            '.uml-class-methods-rect': {
                fill: '#fe976a',
                stroke: '#fff',
                'stroke-width': 0.5
            },
            '.uml-class-attrs-text': {
                ref: '.uml-class-attrs-rect',
                'ref-y': 0.5,
                'y-alignment': 'middle'
            },
            '.uml-class-methods-text': {
                ref: '.uml-class-methods-rect',
                'ref-y': 0.5,
                'y-alignment': 'middle'
            }
        }
    }),	JavaClass: new uml.Class({
        position: { x:1235  , y: 50 },
        size: { width: 180, height:80 },
        name: 'JavaClass',
        attributes: [],
        methods: ['-   prepareData (Tuple data)','+   addAttribute (Attributes attr)','+   addMethod (Methodes method)','+   renderUml (Position cnt)',],
        attrs: {
 '.uml-class-name-rect': {
                fill: '#ff8450',
                stroke: '#fff',
                'stroke-width': 0.5,
            },
            '.uml-class-attrs-rect': {
                fill: '#fe976a',
                stroke: '#fff',
                'stroke-width': 0.5
            },
            '.uml-class-methods-rect': {
                fill: '#fe976a',
                stroke: '#fff',
                'stroke-width': 0.5
            },
            '.uml-class-attrs-text': {
                ref: '.uml-class-attrs-rect',
                'ref-y': 0.5,
                'y-alignment': 'middle'
            },
            '.uml-class-methods-text': {
                ref: '.uml-class-methods-rect',
                'ref-y': 0.5,
                'y-alignment': 'middle'
            }
        }
    })
//-------------------------
}
  
const allClass = Array()
Object.keys(classes).forEach(function(key) {
    graph.addCell(classes[key]);
    allClass.push(classes[key]);
});


var relations = [
    new uml.Association({ source: { id: classes.JUml.id }, target: { id: classes.JavaClass.id } }),
    new uml.Association({ source: { id: classes.JavaClass.id }, target: { id: classes.Attributes.id } }),
    new uml.Association({ source: { id: classes.JavaClass.id }, target: { id: classes.Methods.id } }),
    new uml.Association({ source: { id: classes.Methods.id }, target: { id: classes.Params.id } }),
    new uml.Association({ source: { id: classes.RegexData.id }, target: { id: classes.Main.id } }),
    new uml.Association({ source: { id: classes.Packages.id }, target: { id: classes.JUml.id } }),
    new uml.Association({ source: { id: classes.Position.id }, target: { id: classes.JUml.id } }),
    new uml.Association({ source: { id: classes.Position.id }, target: { id: classes.JavaClass.id } }),

];
    




