var graph = new joint.dia.Graph();
const removed = Array()
const paper = new joint.dia.Paper({
    el: document.getElementById('paper'),
    width: 1800,
    height: 1800,
    gridSize: 1,
    model: graph
});

var uml = joint.shapes.uml;

var classes = {
    //package account 
    AbstractAccount: new uml.Abstract({
        position: { x: 50, y: 50 },
        size: { width: 210, height: 220 },
        name: 'AbstractAccount',
        attributes: ['#  {static} int MAX_LENGTH', '#  {static} int MAX_CD', '#   Double balance', ],
        methods: ['+   AbstractAccount ()', '+   getBalance () :Double', '+   getCredit () :int', '+   getDebit () :int', '+   getCurrentBalance () :Double', '+ {abstract}  addCredit (Double i) :void', '+   addDebit (Double i) :void', '#   resetBalance () :void', ],
        attrs: {
            '.uml-class-name-rect': {
                fill: '#68ddd5',
                stroke: '#ffffff',
                'stroke-width': 0.5
            },
            '.uml-class-attrs-rect': {
                fill: '#9687fe',
                stroke: '#fff',
                'stroke-width': 0.5
            },
            '.uml-class-methods-rect': {
                fill: '#9687fe',
                stroke: '#fff',
                'stroke-width': 0.5
            },
            '.uml-class-methods-text, .uml-class-attrs-text': {
                fill: '#fff'
            }

        }
    }),
    ClassicAccount: new uml.Class({
        position: { x: 290, y: 50 },
        size: { width: 180, height: 60 },
        name: 'ClassicAccount',
        attributes: [],
        methods: ['+   ClassicAccount ()', '+   addCredit (Double i) :void', '+   addDebit (Double i) :void', ],
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
    Account: new uml.Interface({
        position: { x: 500, y: 50 },
        size: { width: 170, height: 120 },
        name: 'Account',
        attributes: [],
        methods: ['+   getBalance () :Double', '+   getCredit () :int', '+   getDebit () :int', '+   getCurrentBalance () :Double', '+   addCredit (Double i) :void', '+   addDebit (Double i) :void', ],
        attrs: {
            '.uml-class-name-rect': {
                fill: '#feb662',
                stroke: '#ffffff',
                'stroke-width': 0.5
            },
            '.uml-class-attrs-rect': {
                fill: '#fdc886',
                stroke: '#fff',
                'stroke-width': 0.5
            },
            '.uml-class-methods-rect': {
                fill: '#fdc886',
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
    AccountOperationException: new uml.Class({
        position: { x: 700, y: 50 },
        size: { width: 240, height: 40 },
        name: 'AccountOperationException',
        attributes: [],
        methods: ['+   AccountOperationException (String message)', ],
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
    SavingAccount: new uml.Class({
        position: { x: 970, y: 50 },
        size: { width: 175, height: 120 },
        name: 'SavingAccount',
        attributes: ['#   double interest', ],
        methods: ['+   SavingAccount (double d)', '+   addCredit (Double i) :void', '+   addDebit (Double i) :void', '+   getInterest () :double', '+   echeance () :void', ],
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
}

const allClass = Array()
Object.keys(classes).forEach(function(key) {
    graph.addCell(classes[key]);
    allClass.push(classes[key]);
});


var relations = [
    classes.Account == null ? console.log() : new uml.Implementation({ source: { id: classes.AbstractAccount.id }, target: { id: classes.Account.id } }),
    classes.Double == null ? console.log() : new uml.Association({ source: { id: classes.AbstractAccount.id }, target: { id: classes.Double.id } }),
    classes.Double == null ? console.log() : new uml.Association({ source: { id: classes.AbstractAccount.id }, target: { id: classes.Double.id } }),
    classes.AbstractAccount == null ? console.log() : new uml.Generalization({ source: { id: classes.ClassicAccount.id }, target: { id: classes.AbstractAccount.id } }),
    classes.Double == null ? console.log() : new uml.Association({ source: { id: classes.Account.id }, target: { id: classes.Double.id } }),
    classes.Exception == null ? console.log() : new uml.Generalization({ source: { id: classes.AccountOperationException.id }, target: { id: classes.Exception.id } }),
    classes.AbstractAccount == null ? console.log() : new uml.Generalization({ source: { id: classes.SavingAccount.id }, target: { id: classes.AbstractAccount.id } }),

];