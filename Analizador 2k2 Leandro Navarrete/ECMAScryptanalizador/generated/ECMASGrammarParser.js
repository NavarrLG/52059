// Generated from c:/Users/leanx/Analizador 2k2 Leandro Navarrete/ECMAScryptanalizador/ECMASGrammar.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import ECMASGrammarListener from './ECMASGrammarListener.js';
import ECMASGrammarVisitor from './ECMASGrammarVisitor.js';

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

export default class ECMASGrammarParser extends antlr4.Parser {

    static grammarFileName = "ECMASGrammar.g4";
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
        this.ruleNames = ECMASGrammarParser.ruleNames;
        this.literalNames = ECMASGrammarParser.literalNames;
        this.symbolicNames = ECMASGrammarParser.symbolicNames;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ECMASGrammarParser.RULE_prog);
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
	    this.enterRule(localctx, 2, ECMASGrammarParser.RULE_stat);
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
	    this.enterRule(localctx, 4, ECMASGrammarParser.RULE_doWhileStat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.match(ECMASGrammarParser.DO);
	        this.state = 27;
	        this.block();
	        this.state = 28;
	        this.match(ECMASGrammarParser.WHILE);
	        this.state = 29;
	        this.match(ECMASGrammarParser.LPAREN);
	        this.state = 30;
	        this.expr();
	        this.state = 31;
	        this.match(ECMASGrammarParser.RPAREN);
	        this.state = 32;
	        this.match(ECMASGrammarParser.SEMI);
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
	    this.enterRule(localctx, 6, ECMASGrammarParser.RULE_assignmentStat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.match(ECMASGrammarParser.ID);
	        this.state = 35;
	        this.match(ECMASGrammarParser.ASSIGN);
	        this.state = 36;
	        this.expr();
	        this.state = 37;
	        this.match(ECMASGrammarParser.SEMI);
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
	    this.enterRule(localctx, 8, ECMASGrammarParser.RULE_consoleStat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this.match(ECMASGrammarParser.CONSOLE);
	        this.state = 40;
	        this.match(ECMASGrammarParser.DOT);
	        this.state = 41;
	        this.match(ECMASGrammarParser.LOG);
	        this.state = 42;
	        this.match(ECMASGrammarParser.LPAREN);
	        this.state = 43;
	        this.expr();
	        this.state = 44;
	        this.match(ECMASGrammarParser.RPAREN);
	        this.state = 45;
	        this.match(ECMASGrammarParser.SEMI);
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
	    this.enterRule(localctx, 10, ECMASGrammarParser.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this.match(ECMASGrammarParser.LBRACE);
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
	        this.match(ECMASGrammarParser.RBRACE);
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
	    this.enterRule(localctx, 12, ECMASGrammarParser.RULE_expr);
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
	    this.enterRule(localctx, 14, ECMASGrammarParser.RULE_term);
	    try {
	        this.state = 70;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 16:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 64;
	            this.match(ECMASGrammarParser.ID);
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 65;
	            this.match(ECMASGrammarParser.NUMBER);
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 66;
	            this.match(ECMASGrammarParser.LPAREN);
	            this.state = 67;
	            this.expr();
	            this.state = 68;
	            this.match(ECMASGrammarParser.RPAREN);
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

ECMASGrammarParser.EOF = antlr4.Token.EOF;
ECMASGrammarParser.DO = 1;
ECMASGrammarParser.WHILE = 2;
ECMASGrammarParser.CONSOLE = 3;
ECMASGrammarParser.LOG = 4;
ECMASGrammarParser.DOT = 5;
ECMASGrammarParser.LPAREN = 6;
ECMASGrammarParser.RPAREN = 7;
ECMASGrammarParser.LBRACE = 8;
ECMASGrammarParser.RBRACE = 9;
ECMASGrammarParser.SEMI = 10;
ECMASGrammarParser.ASSIGN = 11;
ECMASGrammarParser.PLUS = 12;
ECMASGrammarParser.MINUS = 13;
ECMASGrammarParser.STAR = 14;
ECMASGrammarParser.SLASH = 15;
ECMASGrammarParser.ID = 16;
ECMASGrammarParser.NUMBER = 17;
ECMASGrammarParser.NEWLINE = 18;
ECMASGrammarParser.WS = 19;

ECMASGrammarParser.RULE_prog = 0;
ECMASGrammarParser.RULE_stat = 1;
ECMASGrammarParser.RULE_doWhileStat = 2;
ECMASGrammarParser.RULE_assignmentStat = 3;
ECMASGrammarParser.RULE_consoleStat = 4;
ECMASGrammarParser.RULE_block = 5;
ECMASGrammarParser.RULE_expr = 6;
ECMASGrammarParser.RULE_term = 7;

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
        this.ruleIndex = ECMASGrammarParser.RULE_prog;
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
	    if(listener instanceof ECMASGrammarListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ECMASGrammarListener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ECMASGrammarVisitor ) {
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
        this.ruleIndex = ECMASGrammarParser.RULE_stat;
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
	    if(listener instanceof ECMASGrammarListener ) {
	        listener.enterStat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ECMASGrammarListener ) {
	        listener.exitStat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ECMASGrammarVisitor ) {
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
        this.ruleIndex = ECMASGrammarParser.RULE_doWhileStat;
    }

	DO() {
	    return this.getToken(ECMASGrammarParser.DO, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	WHILE() {
	    return this.getToken(ECMASGrammarParser.WHILE, 0);
	};

	LPAREN() {
	    return this.getToken(ECMASGrammarParser.LPAREN, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	RPAREN() {
	    return this.getToken(ECMASGrammarParser.RPAREN, 0);
	};

	SEMI() {
	    return this.getToken(ECMASGrammarParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ECMASGrammarListener ) {
	        listener.enterDoWhileStat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ECMASGrammarListener ) {
	        listener.exitDoWhileStat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ECMASGrammarVisitor ) {
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
        this.ruleIndex = ECMASGrammarParser.RULE_assignmentStat;
    }

	ID() {
	    return this.getToken(ECMASGrammarParser.ID, 0);
	};

	ASSIGN() {
	    return this.getToken(ECMASGrammarParser.ASSIGN, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	SEMI() {
	    return this.getToken(ECMASGrammarParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ECMASGrammarListener ) {
	        listener.enterAssignmentStat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ECMASGrammarListener ) {
	        listener.exitAssignmentStat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ECMASGrammarVisitor ) {
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
        this.ruleIndex = ECMASGrammarParser.RULE_consoleStat;
    }

	CONSOLE() {
	    return this.getToken(ECMASGrammarParser.CONSOLE, 0);
	};

	DOT() {
	    return this.getToken(ECMASGrammarParser.DOT, 0);
	};

	LOG() {
	    return this.getToken(ECMASGrammarParser.LOG, 0);
	};

	LPAREN() {
	    return this.getToken(ECMASGrammarParser.LPAREN, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	RPAREN() {
	    return this.getToken(ECMASGrammarParser.RPAREN, 0);
	};

	SEMI() {
	    return this.getToken(ECMASGrammarParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ECMASGrammarListener ) {
	        listener.enterConsoleStat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ECMASGrammarListener ) {
	        listener.exitConsoleStat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ECMASGrammarVisitor ) {
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
        this.ruleIndex = ECMASGrammarParser.RULE_block;
    }

	LBRACE() {
	    return this.getToken(ECMASGrammarParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(ECMASGrammarParser.RBRACE, 0);
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
	    if(listener instanceof ECMASGrammarListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ECMASGrammarListener ) {
	        listener.exitBlock(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ECMASGrammarVisitor ) {
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
        this.ruleIndex = ECMASGrammarParser.RULE_expr;
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
	        return this.getTokens(ECMASGrammarParser.PLUS);
	    } else {
	        return this.getToken(ECMASGrammarParser.PLUS, i);
	    }
	};


	MINUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ECMASGrammarParser.MINUS);
	    } else {
	        return this.getToken(ECMASGrammarParser.MINUS, i);
	    }
	};


	STAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ECMASGrammarParser.STAR);
	    } else {
	        return this.getToken(ECMASGrammarParser.STAR, i);
	    }
	};


	SLASH = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ECMASGrammarParser.SLASH);
	    } else {
	        return this.getToken(ECMASGrammarParser.SLASH, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ECMASGrammarListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ECMASGrammarListener ) {
	        listener.exitExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ECMASGrammarVisitor ) {
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
        this.ruleIndex = ECMASGrammarParser.RULE_term;
    }

	ID() {
	    return this.getToken(ECMASGrammarParser.ID, 0);
	};

	NUMBER() {
	    return this.getToken(ECMASGrammarParser.NUMBER, 0);
	};

	LPAREN() {
	    return this.getToken(ECMASGrammarParser.LPAREN, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	RPAREN() {
	    return this.getToken(ECMASGrammarParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ECMASGrammarListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ECMASGrammarListener ) {
	        listener.exitTerm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ECMASGrammarVisitor ) {
	        return visitor.visitTerm(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




ECMASGrammarParser.ProgContext = ProgContext; 
ECMASGrammarParser.StatContext = StatContext; 
ECMASGrammarParser.DoWhileStatContext = DoWhileStatContext; 
ECMASGrammarParser.AssignmentStatContext = AssignmentStatContext; 
ECMASGrammarParser.ConsoleStatContext = ConsoleStatContext; 
ECMASGrammarParser.BlockContext = BlockContext; 
ECMASGrammarParser.ExprContext = ExprContext; 
ECMASGrammarParser.TermContext = TermContext; 
