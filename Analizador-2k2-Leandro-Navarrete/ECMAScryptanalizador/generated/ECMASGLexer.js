// Generated from c:/Users/leanx/Analizador 2k2 Leandro Navarrete/ECMAScryptanalizador/ECMASG.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,19,108,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,1,0,1,0,1,
0,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,
3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,
12,1,12,1,13,1,13,1,14,1,14,1,15,1,15,5,15,85,8,15,10,15,12,15,88,9,15,1,
16,4,16,91,8,16,11,16,12,16,92,1,17,3,17,96,8,17,1,17,1,17,1,17,1,17,1,18,
4,18,103,8,18,11,18,12,18,104,1,18,1,18,0,0,19,1,1,3,2,5,3,7,4,9,5,11,6,
13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,16,33,17,35,18,37,
19,1,0,4,3,0,65,90,95,95,97,122,4,0,48,57,65,90,95,95,97,122,1,0,48,57,2,
0,9,9,32,32,111,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,
0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,
1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,
0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,1,39,1,0,0,0,3,42,1,0,0,0,5,48,1,
0,0,0,7,56,1,0,0,0,9,60,1,0,0,0,11,62,1,0,0,0,13,64,1,0,0,0,15,66,1,0,0,
0,17,68,1,0,0,0,19,70,1,0,0,0,21,72,1,0,0,0,23,74,1,0,0,0,25,76,1,0,0,0,
27,78,1,0,0,0,29,80,1,0,0,0,31,82,1,0,0,0,33,90,1,0,0,0,35,95,1,0,0,0,37,
102,1,0,0,0,39,40,5,100,0,0,40,41,5,111,0,0,41,2,1,0,0,0,42,43,5,119,0,0,
43,44,5,104,0,0,44,45,5,105,0,0,45,46,5,108,0,0,46,47,5,101,0,0,47,4,1,0,
0,0,48,49,5,99,0,0,49,50,5,111,0,0,50,51,5,110,0,0,51,52,5,115,0,0,52,53,
5,111,0,0,53,54,5,108,0,0,54,55,5,101,0,0,55,6,1,0,0,0,56,57,5,108,0,0,57,
58,5,111,0,0,58,59,5,103,0,0,59,8,1,0,0,0,60,61,5,46,0,0,61,10,1,0,0,0,62,
63,5,40,0,0,63,12,1,0,0,0,64,65,5,41,0,0,65,14,1,0,0,0,66,67,5,123,0,0,67,
16,1,0,0,0,68,69,5,125,0,0,69,18,1,0,0,0,70,71,5,59,0,0,71,20,1,0,0,0,72,
73,5,61,0,0,73,22,1,0,0,0,74,75,5,43,0,0,75,24,1,0,0,0,76,77,5,45,0,0,77,
26,1,0,0,0,78,79,5,42,0,0,79,28,1,0,0,0,80,81,5,47,0,0,81,30,1,0,0,0,82,
86,7,0,0,0,83,85,7,1,0,0,84,83,1,0,0,0,85,88,1,0,0,0,86,84,1,0,0,0,86,87,
1,0,0,0,87,32,1,0,0,0,88,86,1,0,0,0,89,91,7,2,0,0,90,89,1,0,0,0,91,92,1,
0,0,0,92,90,1,0,0,0,92,93,1,0,0,0,93,34,1,0,0,0,94,96,5,13,0,0,95,94,1,0,
0,0,95,96,1,0,0,0,96,97,1,0,0,0,97,98,5,10,0,0,98,99,1,0,0,0,99,100,6,17,
0,0,100,36,1,0,0,0,101,103,7,3,0,0,102,101,1,0,0,0,103,104,1,0,0,0,104,102,
1,0,0,0,104,105,1,0,0,0,105,106,1,0,0,0,106,107,6,18,0,0,107,38,1,0,0,0,
5,0,86,92,95,104,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class ECMASGLexer extends antlr4.Lexer {

    static grammarFileName = "ECMASG.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'do'", "'while'", "'console'", "'log'", 
                         "'.'", "'('", "')'", "'{'", "'}'", "';'", "'='", 
                         "'+'", "'-'", "'*'", "'/'" ];
	static symbolicNames = [ null, "DO", "WHILE", "CONSOLE", "LOG", "DOT", 
                          "LPAREN", "RPAREN", "LBRACE", "RBRACE", "SEMI", 
                          "ASSIGN", "PLUS", "MINUS", "STAR", "SLASH", "ID", 
                          "NUMBER", "NEWLINE", "WS" ];
	static ruleNames = [ "DO", "WHILE", "CONSOLE", "LOG", "DOT", "LPAREN", 
                      "RPAREN", "LBRACE", "RBRACE", "SEMI", "ASSIGN", "PLUS", 
                      "MINUS", "STAR", "SLASH", "ID", "NUMBER", "NEWLINE", 
                      "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

ECMASGLexer.EOF = antlr4.Token.EOF;
ECMASGLexer.DO = 1;
ECMASGLexer.WHILE = 2;
ECMASGLexer.CONSOLE = 3;
ECMASGLexer.LOG = 4;
ECMASGLexer.DOT = 5;
ECMASGLexer.LPAREN = 6;
ECMASGLexer.RPAREN = 7;
ECMASGLexer.LBRACE = 8;
ECMASGLexer.RBRACE = 9;
ECMASGLexer.SEMI = 10;
ECMASGLexer.ASSIGN = 11;
ECMASGLexer.PLUS = 12;
ECMASGLexer.MINUS = 13;
ECMASGLexer.STAR = 14;
ECMASGLexer.SLASH = 15;
ECMASGLexer.ID = 16;
ECMASGLexer.NUMBER = 17;
ECMASGLexer.NEWLINE = 18;
ECMASGLexer.WS = 19;



