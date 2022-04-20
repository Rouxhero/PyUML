
var graph = new joint.dia.Graph();
const removed = Array()
const paper =  new joint.dia.Paper({
    el: document.getElementById('paper'),
    width: 10000,
    height: 10000,
    gridSize: 1,
    model: graph
});

var uml = joint.shapes.uml;

var classes = {
//package game 
	MainFarmGame: new uml.Class({
        position: { x:50  , y: 50 },
        size: { width: 170, height:40 },
        name: 'MainFarmGame',
        attributes: [],
        methods: [],
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
    }),	MainWarGame: new uml.Class({
        position: { x:250  , y: 50 },
        size: { width: 165, height:40 },
        name: 'MainWarGame',
        attributes: [],
        methods: [],
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
    }),	Ressources: new uml.Class({
        position: { x:445  , y: 50 },
        size: { width: 170, height:80 },
        name: '<<Enum>>Ressources',
        attributes: ['-   int REWARD',],
        methods: ['-   Ressources ()','+   setReward (int reward) :void','+   getReward () :int',],
        attrs: {
 			'.uml-class-name-rect': {
                fill: '#FF5F6D',
                stroke: '#ffffff',
                'stroke-width': 0.5
            },
            '.uml-class-attrs-rect': {
                fill: '#FFC371',
                stroke: '#fff',
                'stroke-width': 0.5
            },
            '.uml-class-methods-rect': {
                fill: '#FFC371',
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
//package game.board 
	Board: new uml.Abstract({
        position: { x:645  , y: 50 },
        size: { width: 245, height:400 },
        name: 'Board',
        attributes: ['#   Tile board','#   Tile allGround',],
        methods: ['+   Board (int witdh, int height)','+   getNbOfTile (int nbFirstTile) :int','+   getHeight () :int','+   getWitdh () :int','-   generateBoard () :void','-   genertateOcean () :void','-   generateFirstTile () :void','-   generateOtherTiles (int nbOfTile) :void','-   checkValidity (int posX, int posY) :boolean','-   createTile (int nb, int x, int y) :Tile','+   getAllFreeGround () :Tile','+   removeOccupedGround (Tile tile) :void','+   getBoardStatus () :int','+   showBoard () :String','-   generateHead (int widht) :String','-   getStr (int y) :String','+   getTile (int x, int y) :Tile','+   getOtherTile (Tile tile) :Tile',],
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
    }),	EndGameByBoard: new uml.Class({
        position: { x:920  , y: 50 },
        size: { width: 180, height:40 },
        name: 'EndGameByBoard',
        attributes: [],
        methods: ['+   EndGameByBoard ()','+   EndGameByBoard (String arg0)',],
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
    }),	FarmBoard: new uml.Class({
        position: { x:1130  , y: 50 },
        size: { width: 195, height:40 },
        name: 'FarmBoard',
        attributes: [],
        methods: ['+   FarmBoard (int witdh, int height)',],
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
    }),	WarBoard: new uml.Class({
        position: { x:1355  , y: 50 },
        size: { width: 190, height:40 },
        name: 'WarBoard',
        attributes: [],
        methods: ['+   WarBoard (int witdh, int height)',],
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
//package game.character 
	Army: new uml.Class({
        position: { x:1575  , y: 50 },
        size: { width: 250, height:260 },
        name: 'Army',
        attributes: ['#   int size','# {final}  int MAX_SIZE',],
        methods: ['+   Army (Tile position, Player owner, int size)','+   getSize () :int','+   numberUnitsClaimed () :int','+   meet (Army other) :String','+   supportArmy (Army other) :String','+   fight (Army other) :String','+   changeOwner (Player owner) :void','+   looseFight () :void','+   extendArmy () :void','+   setTile (Tile newTile) :void','+   receiveReward (int reward) :void',],
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
    }),	Character: new uml.Abstract({
        position: { x:50  , y: 250 },
        size: { width: 225, height:260 },
        name: 'Character',
        attributes: ['#   int gold','#   Player owner','#   Tile position',],
        methods: ['+   Character (Tile position, Player owner)','+   setTile (Tile newTile) :void','+   getGold () :int','+   getTile () :Tile','+   getOwner () :Player','+   kill () :void','+   changeOwner (Player owner) :void','+   numberUnitsClaimed () :int','+   addGold (int pay) :void','+   toString () :String',],
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
    }),	CharacterException: new uml.Class({
        position: { x:305  , y: 250 },
        size: { width: 200, height:40 },
        name: 'CharacterException',
        attributes: [],
        methods: ['+   CharacterException ()','+   CharacterException (String arg0)',],
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
    }),	Worker: new uml.Class({
        position: { x:535  , y: 250 },
        size: { width: 210, height:40 },
        name: 'Worker',
        attributes: [],
        methods: ['+   Worker (Tile position, Player owner)','+   receiveReward (int i) :void',],
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
//package game.gamemode 
	FarmGame: new uml.Class({
        position: { x:775  , y: 250 },
        size: { width: 315, height:60 },
        name: 'FarmGame',
        attributes: [],
        methods: ['+   FarmGame (int width, int height, int nbRound)','+   playOneRound (Player thePlayer, boolean isRandom) :String','+   randomFirstAction (Player thePlayer) :String',],
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
    }),	Game: new uml.Abstract({
        position: { x:1120  , y: 250 },
        size: { width: 200, height:200 },
        name: 'Game',
        attributes: ['#   Board theBoard','#   Player allPlayer','#  {static} Random ALEA','#   int nbRound',],
        methods: ['+   Game (int nbRound)','+   addPlayer (Player thePlayer) :void','+   getPlayer () :Player','+   getTheBoard () :Board','+   getNbRound () :int','+   play () :String',],
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
    }),	WarGame: new uml.Class({
        position: { x:1350  , y: 250 },
        size: { width: 315, height:60 },
        name: 'WarGame',
        attributes: [],
        methods: ['+   WarGame (int width, int height, int nbRound)','+   playOneRound (Player thePlayer, boolean isRandom) :String','+   randomFirstAction (Player thePlayer) :String',],
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
//package game.player 
	FarmPlayer: new uml.Class({
        position: { x:1695  , y: 250 },
        size: { width: 305, height:80 },
        name: 'FarmPlayer',
        attributes: [],
        methods: ['+   FarmPlayer (String name, Board board, boolean isRandom)','+   doNothing () :String','+   deployCharact (int size, int x, int y) :String','+   getPoint () :int',],
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
    }),	Player: new uml.Abstract({
        position: { x:50  , y: 450 },
        size: { width: 345, height:520 },
        name: 'Player',
        attributes: ['#   boolean isRandomPlayer','#   Character listeChar','#   Random ALEA','#   int reward','#   String name','#   Board theboard',],
        methods: ['+   Player (String name, int reward, Board board, boolean isRandom)','+   looseChar (Character character) :void','+   earnChar (Character character) :void','+   harvestTile () :String','+   getName () :String','-   increaseResources (Ressources theRess) :void','+   convertAllResources () :String','-   cleanResources () :void','#   convertResources (Ressources res) :void','+   getRandomTile () :Tile','+   isRandom () :boolean','+   doNothing () :String','+   rewardCharacter () :String','+   getNbSoldier () :int','+   looseFight (Character character) :void','+   getReward () :int','+   getNbRessources (Ressources theRess) :int','+   getCharacterString () :String','+   toString () :String','-   getRessourcesToString () :String',],
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
    }),	PlayerException: new uml.Class({
        position: { x:425  , y: 450 },
        size: { width: 185, height:40 },
        name: 'PlayerException',
        attributes: [],
        methods: ['+   PlayerException ()','+   PlayerException (String arg0)',],
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
    }),	WarPlayer: new uml.Class({
        position: { x:640  , y: 450 },
        size: { width: 300, height:160 },
        name: 'WarPlayer',
        attributes: ['-   int gold','-   int nbSoldier',],
        methods: ['+   WarPlayer (String name, Board board, boolean isRandom)','+   looseChar (Character character) :void','+   getNbSoldier () :int','+   deployCharact (int size, int x, int y) :String','+   getGold () :int','+   getPoint () :int',],
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
//package game.tile 
	Desert: new uml.Class({
        position: { x:970  , y: 450 },
        size: { width: 220, height:320 },
        name: 'Desert',
        attributes: ['#  {static} int REWARD_COEF','# {final}  String STRING_PICT','#  {static} int SIZE_COEF','#  {static} int MAX_SIZE','#  {static} int END_REWARD',],
        methods: ['+   Desert (int x, int y)','+  {static} setEnd_Reward (int coef) :void','+   getEndCoef () :int','+  {static} setRewardCoef (int coef) :void','+  {static} setSizeCoef (int coef) :void','+  {static} setMaxSize (int size) :void','+   getMaxSize () :int','+   getSizeCoef () :int','+   getRewardCoef () :int','+   getHarvest () :Ressources','+   toString () :String',],
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
    }),	Forest: new uml.Class({
        position: { x:1220  , y: 450 },
        size: { width: 220, height:320 },
        name: 'Forest',
        attributes: ['#  {static} int REWARD_COEF','# {final}  String STRING_PICT','#  {static} int SIZE_COEF','#  {static} int MAX_SIZE','#  {static} int END_REWARD',],
        methods: ['+   Forest (int x, int y)','+  {static} setEnd_Reward (int coef) :void','+   getEndCoef () :int','+  {static} setRewardCoef (int coef) :void','+  {static} setSizeCoef (int coef) :void','+  {static} setMaxSize (int size) :void','+   getMaxSize () :int','+   getSizeCoef () :int','+   getRewardCoef () :int','+   getHarvest () :Ressources','+   toString () :String',],
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
    }),	Hills: new uml.Class({
        position: { x:1470  , y: 450 },
        size: { width: 220, height:320 },
        name: 'Hills',
        attributes: ['# {final}  String STRING_PICT','#  {static} int REWARD_COEF','#  {static} int SIZE_COEF','#  {static} int MAX_SIZE','#  {static} int END_REWARD',],
        methods: ['+   Hills (int x, int y)','+  {static} setEnd_Reward (int coef) :void','+   getEndCoef () :int','+  {static} setRewardCoef (int coef) :void','+  {static} setSizeCoef (int coef) :void','+  {static} setMaxSize (int size) :void','+   getMaxSize () :int','+   getSizeCoef () :int','+   getRewardCoef () :int','+   getHarvest () :Ressources','+   toString () :String',],
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
    }),	Plain: new uml.Class({
        position: { x:1720  , y: 450 },
        size: { width: 220, height:320 },
        name: 'Plain',
        attributes: ['# {final}  String STRING_PICT','#  {static} int REWARD_COEF','#  {static} int SIZE_COEF','#  {static} int MAX_SIZE','#  {static} int END_REWARD',],
        methods: ['+   Plain (int x, int y)','+  {static} setEnd_Reward (int coef) :void','+   getEndCoef () :int','+  {static} setRewardCoef (int coef) :void','+  {static} setSizeCoef (int coef) :void','+  {static} setMaxSize (int size) :void','+   getMaxSize () :int','+   getSizeCoef () :int','+   getRewardCoef () :int','+   getHarvest () :Ressources','+   toString () :String',],
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
    }),	Sea: new uml.Class({
        position: { x:50  , y: 650 },
        size: { width: 205, height:180 },
        name: 'Sea',
        attributes: ['# {final} {static} String STRING_PICT',],
        methods: ['+   Sea (int x, int y)','+   getEndCoef () :int','+  {static} isSea (Tile other) :boolean','+   getRewardCoef () :int','+   getSizeCoef () :int','+   getMaxSize () :int','+   toString () :String','+   getHarvest () :Ressources',],
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
    }),	Tile: new uml.Abstract({
        position: { x:285  , y: 650 },
        size: { width: 180, height:260 },
        name: 'Tile',
        attributes: ['+ {final}  Ressources HARVEST_RES','#   int x','#   int y','# {final}  String STRING_PICT','#   boolean isEmpty','#   Character user',],
        methods: ['+   Tile (int x, int y)','+   getX () :int','+   getY () :int','+   isEmpty () :boolean','+   getUser () :Character','+   setUser (Character user) :void','+   leaveChar () :void',],
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
    }),	WrongTileException: new uml.Class({
        position: { x:495  , y: 650 },
        size: { width: 200, height:40 },
        name: 'WrongTileException',
        attributes: [],
        methods: ['+   WrongTileException ()','+   WrongTileException (String arg0)',],
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
//package game.util 
	Clear: new uml.Class({
        position: { x:725  , y: 650 },
        size: { width: 170, height:40 },
        name: 'Clear',
        attributes: [],
        methods: ['+   Clear ()','+  {static} clearScreen () :void',],
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
    }),	Input: new uml.Class({
        position: { x:925  , y: 650 },
        size: { width: 175, height:60 },
        name: 'Input',
        attributes: ['-  {static} Scanner scanner',],
        methods: ['+  {static} readString () :String','+  {static} readInt () :int',],
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
    }),	Main: new uml.Class({
        position: { x:1130  , y: 650 },
        size: { width: 220, height:60 },
        name: 'Main',
        attributes: [],
        methods: ['+  {static} isOption (String arg) :boolean','+  {static} getHelp () :String','+  {static} getError () :String',],
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
    }),
//-------------------------
}
  
const allClass = Array()
Object.keys(classes).forEach(function(key) {
    graph.addCell(classes[key]);
    allClass.push(classes[key]);
});


var relations = [];
    if (classes.Tile!=null ){relations.push(new uml.Association({ source: { id: classes.Board.id }, target: { id: classes.Tile.id }}))}
if (classes.Tile!=null ){relations.push(new uml.Association({ source: { id: classes.Board.id }, target: { id: classes.Tile.id }}))}
if (classes.Tile!=null ){relations.push(new uml.Association({ source: { id: classes.Board.id }, target: { id: classes.Tile.id }}))}
if (classes.Tile!=null ){relations.push(new uml.Association({ source: { id: classes.Board.id }, target: { id: classes.Tile.id }}))}
if (classes.Tile!=null ){relations.push(new uml.Association({ source: { id: classes.Board.id }, target: { id: classes.Tile.id }}))}
if (classes.Tile!=null ){relations.push(new uml.Association({ source: { id: classes.Board.id }, target: { id: classes.Tile.id }}))}
if (classes.Board!=null){relations.push(new uml.Generalization({ source: { id: classes.FarmBoard.id }, target: { id: classes.Board.id }}))}
if (classes.Board!=null){relations.push(new uml.Generalization({ source: { id: classes.WarBoard.id }, target: { id: classes.Board.id }}))}
if (classes.Character!=null){relations.push(new uml.Generalization({ source: { id: classes.Army.id }, target: { id: classes.Character.id }}))}
if (classes.Player!=null ){relations.push(new uml.Association({ source: { id: classes.Character.id }, target: { id: classes.Player.id }}))}
if (classes.Tile!=null ){relations.push(new uml.Association({ source: { id: classes.Character.id }, target: { id: classes.Tile.id }}))}
if (classes.Tile!=null ){relations.push(new uml.Association({ source: { id: classes.Character.id }, target: { id: classes.Tile.id }}))}
if (classes.Player!=null ){relations.push(new uml.Association({ source: { id: classes.Character.id }, target: { id: classes.Player.id }}))}
if (classes.Character!=null){relations.push(new uml.Generalization({ source: { id: classes.Worker.id }, target: { id: classes.Character.id }}))}
if (classes.Game!=null){relations.push(new uml.Generalization({ source: { id: classes.FarmGame.id }, target: { id: classes.Game.id }}))}
if (classes.Board!=null ){relations.push(new uml.Association({ source: { id: classes.Game.id }, target: { id: classes.Board.id }}))}
if (classes.Player!=null ){relations.push(new uml.Association({ source: { id: classes.Game.id }, target: { id: classes.Player.id }}))}
if (classes.Random!=null ){relations.push(new uml.Association({ source: { id: classes.Game.id }, target: { id: classes.Random.id }}))}
if (classes.Player!=null ){relations.push(new uml.Association({ source: { id: classes.Game.id }, target: { id: classes.Player.id }}))}
if (classes.Board!=null ){relations.push(new uml.Association({ source: { id: classes.Game.id }, target: { id: classes.Board.id }}))}
if (classes.Game!=null){relations.push(new uml.Generalization({ source: { id: classes.WarGame.id }, target: { id: classes.Game.id }}))}
if (classes.Player!=null){relations.push(new uml.Generalization({ source: { id: classes.FarmPlayer.id }, target: { id: classes.Player.id }}))}
if (classes.Character!=null ){relations.push(new uml.Association({ source: { id: classes.Player.id }, target: { id: classes.Character.id }}))}
if (classes.Random!=null ){relations.push(new uml.Association({ source: { id: classes.Player.id }, target: { id: classes.Random.id }}))}
if (classes.Board!=null ){relations.push(new uml.Association({ source: { id: classes.Player.id }, target: { id: classes.Board.id }}))}
if (classes.Tile!=null ){relations.push(new uml.Association({ source: { id: classes.Player.id }, target: { id: classes.Tile.id }}))}
if (classes.Player!=null){relations.push(new uml.Generalization({ source: { id: classes.WarPlayer.id }, target: { id: classes.Player.id }}))}
if (classes.Tile!=null){relations.push(new uml.Generalization({ source: { id: classes.Desert.id }, target: { id: classes.Tile.id }}))}
if (classes.Ressources!=null ){relations.push(new uml.Association({ source: { id: classes.Desert.id }, target: { id: classes.Ressources.id }}))}
if (classes.Tile!=null){relations.push(new uml.Generalization({ source: { id: classes.Forest.id }, target: { id: classes.Tile.id }}))}
if (classes.Ressources!=null ){relations.push(new uml.Association({ source: { id: classes.Forest.id }, target: { id: classes.Ressources.id }}))}
if (classes.Tile!=null){relations.push(new uml.Generalization({ source: { id: classes.Hills.id }, target: { id: classes.Tile.id }}))}
if (classes.Ressources!=null ){relations.push(new uml.Association({ source: { id: classes.Hills.id }, target: { id: classes.Ressources.id }}))}
if (classes.Tile!=null){relations.push(new uml.Generalization({ source: { id: classes.Plain.id }, target: { id: classes.Tile.id }}))}
if (classes.Ressources!=null ){relations.push(new uml.Association({ source: { id: classes.Plain.id }, target: { id: classes.Ressources.id }}))}
if (classes.Tile!=null){relations.push(new uml.Generalization({ source: { id: classes.Sea.id }, target: { id: classes.Tile.id }}))}
if (classes.Ressources!=null ){relations.push(new uml.Association({ source: { id: classes.Sea.id }, target: { id: classes.Ressources.id }}))}
if (classes.Ressources!=null ){relations.push(new uml.Association({ source: { id: classes.Tile.id }, target: { id: classes.Ressources.id }}))}
if (classes.Character!=null ){relations.push(new uml.Association({ source: { id: classes.Tile.id }, target: { id: classes.Character.id }}))}
if (classes.Character!=null ){relations.push(new uml.Association({ source: { id: classes.Tile.id }, target: { id: classes.Character.id }}))}





