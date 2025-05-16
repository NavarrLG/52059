// Generated from c:/Users/leanx/Analizador 2k2 Leandro Navarrete/ECMAScryptanalizador/ECMASG.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import ECMASGListener from './ECMASGListener.js';
import ECMASGVisitor from './ECMASGVisitor.js';

const serializedATN = [4,1,19,73,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,4,0,18,8,0,11,0,12,0,19,1,1,1,1,1,1,3,1,25,8,
1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,
4,1,4,1,4,1,4,1,5,1,5,5,5,50,8,5,10,5,12,5,53,9,5,1,5,1,5,1,6,1,6,1,6,5,
6,60,8,6,10,6,12,6,63,9,6,1,7,1,7,1,7,1,7,1,7,1,7,3,7,71,8,7,1,7,0,0,8,0,
2,4,6,8,10,12,14,0,1,1,0,12,15,71,0,17,1,0,0,0,2,24,1,0,0,0,4,26,1,0,0,0,
6,34,1,0,0,0,8,39,1,0,0,0,10,47,1,0,0,0,12,56,1,0,0,0,14,70,1,0,0,0,16,18,
3,2,1,0,17,16,1,0,0,0,18,19,1,0,0,0,19,17,1,0,0,0,19,20,1,0,0,0,20,1,1,0,
0,0,21,25,3,4,2,0,22,25,3,6,3,0,23,25,3,8,4,0,24,21,1,0,0,0,24,22,1,0,0,
0,24,23,1,0,0,0,25,3,1,0,0,0,26,27,5,1,0,0,27,28,3,10,5,0,28,29,5,2,0,0,
29,30,5,6,0,0,30,31,3,12,6,0,31,32,5,7,0,0,32,33,5,10,0,0,33,5,1,0,0,0,34,
35,5,16,0,0,35,36,5,11,0,0,36,37,3,12,6,0,37,38,5,10,0,0,38,7,1,0,0,0,39,
40,5,3,0,0,40,41,5,5,0,0,41,42,5,4,0,0,42,43,5,6,0,0,43,44,3,12,6,0,44,45,
5,7,0,0,45,46,5,10,0,0,46,9,1,0,0,0,47,51,5,8,0,0,48,50,3,2,1,0,49,48,1,
0,0,0,50,53,1,0,0,0,51,49,1,0,0,0,51,52,1,0,0,0,52,54,1,0,0,0,53,51,1,0,
0,0,54,55,5,9,0,0,55,11,1,0,0,0,56,61,3,14,7,0,57,58,7,0,0,0,58,60,3,14,
7,0,59,57,1,0,0,0,60,63,1,0,0,0,61,59,1,0,0,0,61,62,1,0,0,0,62,13,1,0,0,
0,63,61,1,0,0,0,64,71,5,16,0,0,65,71,5,17,0,0,66,67,5,6,0,0,67,68,3,12,6,
0,68,69,5,7,0,0,69,71,1,0,0,0,70,64,1,0,0,0,70,65,1,0,0,0,70,66,1,0,0,0,
71,15,1,0,0,0,5,19,24,51,61,70];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ECMASGParser extends antlr4.Parser {

    static grammarFileName = "ECMASG.g4";
    static literalNames = [ null, "'do'", "'while'", "'console'", "'log'", 
                            "'.'", "'('", "')'", "'{'", "'}'", "';'", "'='", 
                            "'+'", "'-'", "'*'", "'/'" ];
    static symbolicNames = [ null, "DO", "WHILE", "CONSOLE", "LOG", "DOT", 
                             "LPAREN", "RPAREN", "LBRACE", "RBRACE", "SEMI", 
                             "ASSIGN", "PLUS", "MINUS", "STAR", "SLASH", 
                             "ID", "NUMBER", "NEWLINE", "WS" ];
    static ruleNames = [ "prog", "stat", "doWhileStat", "assignmentStat", 
                         "consoleStat", "block", "expr", "term" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ECMASGParser.ruleNames;
        this.literalNames = ECMASGParser.literalNames;
        this.symbolicNames = ECMASGParser.symbolicNames;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ECMASGParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 16;
	            this.stat();
	            this.state = 19; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 65546) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stat() {
	    let localctx = new StatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ECMASGParser.RULE_stat);
	    try {
	        this.state = 24;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 21;
	            this.doWhileStat();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 22;
	            this.assignmentStat();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 23;
	            this.consoleStat();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	doWhileStat() {
	    let localctx = new DoWhileStatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ECMASGParser.RULE_doWhileStat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.match(ECMASGParser.DO);
	        this.state = 27;
	        this.block();
	        this.state = 28;
	        this.match(ECMASGParser.WHILE);
	        this.state = 29;
	        this.match(ECMASGParser.LPAREN);
	        this.state = 30;
	        this.expr();
	        this.state = 31;
	        this.match(ECMASGParser.RPAREN);
	        this.state = 32;
	        this.match(ECMASGParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignmentStat() {
	    let localctx = new AssignmentStatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ECMASGParser.RULE_assignmentStat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.match(ECMASGParser.ID);
	        this.state = 35;
	        this.match(ECMASGParser.ASSIGN);
	        this.state = 36;
	        this.expr();
	        this.state = 37;
	        this.match(ECMASGParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	consoleStat() {
	    let localctx = new ConsoleStatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ECMASGParser.RULE_consoleStat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this.match(ECMASGParser.CONSOLE);
	        this.state = 40;
	        this.match(ECMASGParser.DOT);
	        this.state = 41;
	        this.match(ECMASGParser.LOG);
	        this.state = 42;
	        this.match(ECMASGParser.LPAREN);
	        this.state = 43;
	        this.expr();
	        this.state = 44;
	        this.match(ECMASGParser.RPAREN);
	        this.state = 45;
	        this.match(ECMASGParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ECMASGParser.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this.match(ECMASGParser.LBRACE);
	        this.state = 51;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 65546) !== 0)) {
	            this.state = 48;
	            this.stat();
	            this.state = 53;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 54;
	        this.match(ECMASGParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expr() {
	    let localctx = new ExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, ECMASGParser.RULE_expr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this.term();
	        this.state = 61;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 61440) !== 0)) {
	            this.state = 57;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 61440) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 58;
	            this.term();
	            this.state = 63;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, ECMASGParser.RULE_term);
	    try {
	        this.state = 70;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 16:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 64;
	            this.match(ECMASGParser.ID);
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 65;
	            this.match(ECMASGParser.NUMBER);
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 66;
	            this.match(ECMASGParser.LPAREN);
	            this.state = 67;
	            this.expr();
	            this.state = 68;
	            this.match(ECMASGParser.RPAREN);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

ECMASGParser.EOF = antlr4.Token.EOF;
ECMASGParser.DO = 1;
ECMASGParser.WHILE = 2;
ECMASGParser.CONSOLE = 3;
ECMASGParser.LOG = 4;
ECMASGParser.DOT = 5;
ECMASGParser.LPAREN = 6;
ECMASGParser.RPAREN = 7;
ECMASGParser.LBRACE = 8;
ECMASGParser.RBRACE = 9;
ECMASGParser.SEMI = 10;
ECMASGParser.ASSIGN = 11;
ECMASGParser.PLUS = 12;
ECMASGParser.MINUS = 13;
ECMASGParser.STAR = 14;
ECMASGParser.SLASH = 15;
ECMASGParser.ID = 16;
ECMASGParser.NUMBER = 17;
ECMASGParser.NEWLINE = 18;
ECMASGParser.WS = 19;

ECMASGParser.RULE_prog = 0;
ECMASGParser.RULE_stat = 1;
ECMASGParser.RULE_doWhileStat = 2;
ECMASGParser.RULE_assignmentStat = 3;
ECMASGParser.RULE_consoleStat = 4;
ECMASGParser.RULE_block = 5;
ECMASGParser.RULE_expr = 6;
ECMASGParser.RULE_term = 7;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ECMASGParser.RULE_prog;
    }

	stat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatContext);
	    } else {
	        return this.getTypedRuleContext(StatContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ECMASGListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ECMASGListener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ECMASGVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ECMASGParser.RULE_stat;
    }

	doWhileStat() {
	    return this.getTypedRuleContext(DoWhileStatContext,0);
	};

	assignmentStat() {
	    return this.getTypedRuleContext(AssignmentStatContext,0);
	};

	consoleStat() {
	    return this.getTypedRuleContext(ConsoleStatContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ECMASGListener ) {
	        listener.enterStat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ECMASGListener ) {
	        listener.exitStat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ECMASGVisitor ) {
	        return visitor.visitStat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DoWhileStatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ECMASGParser.RULE_doWhileStat;
    }

	DO() {
	    return this.getToken(ECMASGParser.DO, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	WHILE() {
	    return this.getToken(ECMASGParser.WHILE, 0);
	};

	LPAREN() {
	    return this.getToken(ECMASGParser.LPAREN, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	RPAREN() {
	    return this.getToken(ECMASGParser.RPAREN, 0);
	};

	SEMI() {
	    return this.getToken(ECMASGParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ECMASGListener ) {
	        listener.enterDoWhileStat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ECMASGListener ) {
	        listener.exitDoWhileStat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ECMASGVisitor ) {
	        return visitor.visitDoWhileStat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignmentStatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ECMASGParser.RULE_assignmentStat;
    }

	ID() {
	    return this.getToken(ECMASGParser.ID, 0);
	};

	ASSIGN() {
	    return this.getToken(ECMASGParser.ASSIGN, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	SEMI() {
	    return this.getToken(ECMASGParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ECMASGListener ) {
	        listener.enterAssignmentStat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ECMASGListener ) {
	        listener.exitAssignmentStat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ECMASGVisitor ) {
	        return visitor.visitAssignmentStat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConsoleStatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ECMASGParser.RULE_consoleStat;
    }

	CONSOLE() {
	    return this.getToken(ECMASGParser.CONSOLE, 0);
	};

	DOT() {
	    return this.getToken(ECMASGParser.DOT, 0);
	};

	LOG() {
	    return this.getToken(ECMASGParser.LOG, 0);
	};

	LPAREN() {
	    return this.getToken(ECMASGParser.LPAREN, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	RPAREN() {
	    return this.getToken(ECMASGParser.RPAREN, 0);
	};

	SEMI() {
	    return this.getToken(ECMASGParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ECMASGListener ) {
	        listener.enterConsoleStat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ECMASGListener ) {
	        listener.exitConsoleStat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ECMASGVisitor ) {
	        return visitor.visitConsoleStat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ECMASGParser.RULE_block;
    }

	LBRACE() {
	    return this.getToken(ECMASGParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(ECMASGParser.RBRACE, 0);
	};

	stat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatContext);
	    } else {
	        return this.getTypedRuleContext(StatContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ECMASGListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ECMASGListener ) {
	        listener.exitBlock(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ECMASGVisitor ) {
	        return visitor.visitBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ECMASGParser.RULE_expr;
    }

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
	    }
	};

	PLUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ECMASGParser.PLUS);
	    } else {
	        return this.getToken(ECMASGParser.PLUS, i);
	    }
	};


	MINUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ECMASGParser.MINUS);
	    } else {
	        return this.getToken(ECMASGParser.MINUS, i);
	    }
	};


	STAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ECMASGParser.STAR);
	    } else {
	        return this.getToken(ECMASGParser.STAR, i);
	    }
	};


	SLASH = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ECMASGParser.SLASH);
	    } else {
	        return this.getToken(ECMASGParser.SLASH, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ECMASGListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ECMASGListener ) {
	        listener.exitExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ECMASGVisitor ) {
	        return visitor.visitExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ECMASGParser.RULE_term;
    }

	ID() {
	    return this.getToken(ECMASGParser.ID, 0);
	};

	NUMBER() {
	    return this.getToken(ECMASGParser.NUMBER, 0);
	};

	LPAREN() {
	    return this.getToken(ECMASGParser.LPAREN, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	RPAREN() {
	    return this.getToken(ECMASGParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ECMASGListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ECMASGListener ) {
	        listener.exitTerm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ECMASGVisitor ) {
	        return visitor.visitTerm(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




ECMASGParser.ProgContext = ProgContext; 
ECMASGParser.StatContext = StatContext; 
ECMASGParser.DoWhileStatContext = DoWhileStatContext; 
ECMASGParser.AssignmentStatContext = AssignmentStatContext; 
ECMASGParser.ConsoleStatContext = ConsoleStatContext; 
ECMASGParser.BlockContext = BlockContext; 
ECMASGParser.ExprContext = ExprContext; 
ECMASGParser.TermContext = TermContext; 
