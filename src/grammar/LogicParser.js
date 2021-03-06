// Generated from Logic.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var LogicListener = require('./LogicListener').LogicListener;
var LogicVisitor = require('./LogicVisitor').LogicVisitor;

var grammarFileName = "Logic.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\f#\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005",
    "\u0006!\n\u0006\u0003\u0006\u0002\u0002\u0007\u0002\u0004\u0006\b\n",
    "\u0002\u0003\u0003\u0002\u0006\t\u0002 \u0002\f\u0003\u0002\u0002\u0002",
    "\u0004\u000f\u0003\u0002\u0002\u0002\u0006\u0011\u0003\u0002\u0002\u0002",
    "\b\u0016\u0003\u0002\u0002\u0002\n \u0003\u0002\u0002\u0002\f\r\u0005",
    "\n\u0006\u0002\r\u000e\u0007\u0002\u0002\u0003\u000e\u0003\u0003\u0002",
    "\u0002\u0002\u000f\u0010\t\u0002\u0002\u0002\u0010\u0005\u0003\u0002",
    "\u0002\u0002\u0011\u0012\u0007\n\u0002\u0002\u0012\u0013\u0007\u0005",
    "\u0002\u0002\u0013\u0014\u0005\n\u0006\u0002\u0014\u0015\u0007\u000b",
    "\u0002\u0002\u0015\u0007\u0003\u0002\u0002\u0002\u0016\u0017\u0007\n",
    "\u0002\u0002\u0017\u0018\u0005\n\u0006\u0002\u0018\u0019\u0005\u0004",
    "\u0003\u0002\u0019\u001a\u0005\n\u0006\u0002\u001a\u001b\u0007\u000b",
    "\u0002\u0002\u001b\t\u0003\u0002\u0002\u0002\u001c!\u0007\u0003\u0002",
    "\u0002\u001d!\u0007\u0004\u0002\u0002\u001e!\u0005\u0006\u0004\u0002",
    "\u001f!\u0005\b\u0005\u0002 \u001c\u0003\u0002\u0002\u0002 \u001d\u0003",
    "\u0002\u0002\u0002 \u001e\u0003\u0002\u0002\u0002 \u001f\u0003\u0002",
    "\u0002\u0002!\u000b\u0003\u0002\u0002\u0002\u0003 "].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, "'!'", "'&'", "'|'", "'->'", "'~'", 
                     "'('", "')'" ];

var symbolicNames = [ null, "CONST", "ATOM", "NEGATION", "CONJUNCTION", 
                      "DISJUNCTION", "IMPLICATION", "EQUIVALENT", "OBRACKET", 
                      "CBRACKET", "WS" ];

var ruleNames =  [ "statement", "binaryOperation", "unaryFormula", "binaryFormula", 
                   "formula" ];

function LogicParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

LogicParser.prototype = Object.create(antlr4.Parser.prototype);
LogicParser.prototype.constructor = LogicParser;

Object.defineProperty(LogicParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

LogicParser.EOF = antlr4.Token.EOF;
LogicParser.CONST = 1;
LogicParser.ATOM = 2;
LogicParser.NEGATION = 3;
LogicParser.CONJUNCTION = 4;
LogicParser.DISJUNCTION = 5;
LogicParser.IMPLICATION = 6;
LogicParser.EQUIVALENT = 7;
LogicParser.OBRACKET = 8;
LogicParser.CBRACKET = 9;
LogicParser.WS = 10;

LogicParser.RULE_statement = 0;
LogicParser.RULE_binaryOperation = 1;
LogicParser.RULE_unaryFormula = 2;
LogicParser.RULE_binaryFormula = 3;
LogicParser.RULE_formula = 4;

function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LogicParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.formula = function() {
    return this.getTypedRuleContext(FormulaContext,0);
};

StatementContext.prototype.EOF = function() {
    return this.getToken(LogicParser.EOF, 0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof LogicListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof LogicListener ) {
        listener.exitStatement(this);
	}
};

StatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LogicVisitor ) {
        return visitor.visitStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LogicParser.StatementContext = StatementContext;

LogicParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, LogicParser.RULE_statement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 10;
        this.formula();
        this.state = 11;
        this.match(LogicParser.EOF);
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
};

function BinaryOperationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LogicParser.RULE_binaryOperation;
    return this;
}

BinaryOperationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BinaryOperationContext.prototype.constructor = BinaryOperationContext;

BinaryOperationContext.prototype.CONJUNCTION = function() {
    return this.getToken(LogicParser.CONJUNCTION, 0);
};

BinaryOperationContext.prototype.DISJUNCTION = function() {
    return this.getToken(LogicParser.DISJUNCTION, 0);
};

BinaryOperationContext.prototype.IMPLICATION = function() {
    return this.getToken(LogicParser.IMPLICATION, 0);
};

BinaryOperationContext.prototype.EQUIVALENT = function() {
    return this.getToken(LogicParser.EQUIVALENT, 0);
};

BinaryOperationContext.prototype.enterRule = function(listener) {
    if(listener instanceof LogicListener ) {
        listener.enterBinaryOperation(this);
	}
};

BinaryOperationContext.prototype.exitRule = function(listener) {
    if(listener instanceof LogicListener ) {
        listener.exitBinaryOperation(this);
	}
};

BinaryOperationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LogicVisitor ) {
        return visitor.visitBinaryOperation(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LogicParser.BinaryOperationContext = BinaryOperationContext;

LogicParser.prototype.binaryOperation = function() {

    var localctx = new BinaryOperationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, LogicParser.RULE_binaryOperation);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 13;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LogicParser.CONJUNCTION) | (1 << LogicParser.DISJUNCTION) | (1 << LogicParser.IMPLICATION) | (1 << LogicParser.EQUIVALENT))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
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
};

function UnaryFormulaContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LogicParser.RULE_unaryFormula;
    return this;
}

UnaryFormulaContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UnaryFormulaContext.prototype.constructor = UnaryFormulaContext;

UnaryFormulaContext.prototype.OBRACKET = function() {
    return this.getToken(LogicParser.OBRACKET, 0);
};

UnaryFormulaContext.prototype.NEGATION = function() {
    return this.getToken(LogicParser.NEGATION, 0);
};

UnaryFormulaContext.prototype.formula = function() {
    return this.getTypedRuleContext(FormulaContext,0);
};

UnaryFormulaContext.prototype.CBRACKET = function() {
    return this.getToken(LogicParser.CBRACKET, 0);
};

UnaryFormulaContext.prototype.enterRule = function(listener) {
    if(listener instanceof LogicListener ) {
        listener.enterUnaryFormula(this);
	}
};

UnaryFormulaContext.prototype.exitRule = function(listener) {
    if(listener instanceof LogicListener ) {
        listener.exitUnaryFormula(this);
	}
};

UnaryFormulaContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LogicVisitor ) {
        return visitor.visitUnaryFormula(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LogicParser.UnaryFormulaContext = UnaryFormulaContext;

LogicParser.prototype.unaryFormula = function() {

    var localctx = new UnaryFormulaContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, LogicParser.RULE_unaryFormula);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 15;
        this.match(LogicParser.OBRACKET);
        this.state = 16;
        this.match(LogicParser.NEGATION);
        this.state = 17;
        this.formula();
        this.state = 18;
        this.match(LogicParser.CBRACKET);
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
};

function BinaryFormulaContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LogicParser.RULE_binaryFormula;
    return this;
}

BinaryFormulaContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BinaryFormulaContext.prototype.constructor = BinaryFormulaContext;

BinaryFormulaContext.prototype.OBRACKET = function() {
    return this.getToken(LogicParser.OBRACKET, 0);
};

BinaryFormulaContext.prototype.formula = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FormulaContext);
    } else {
        return this.getTypedRuleContext(FormulaContext,i);
    }
};

BinaryFormulaContext.prototype.binaryOperation = function() {
    return this.getTypedRuleContext(BinaryOperationContext,0);
};

BinaryFormulaContext.prototype.CBRACKET = function() {
    return this.getToken(LogicParser.CBRACKET, 0);
};

BinaryFormulaContext.prototype.enterRule = function(listener) {
    if(listener instanceof LogicListener ) {
        listener.enterBinaryFormula(this);
	}
};

BinaryFormulaContext.prototype.exitRule = function(listener) {
    if(listener instanceof LogicListener ) {
        listener.exitBinaryFormula(this);
	}
};

BinaryFormulaContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LogicVisitor ) {
        return visitor.visitBinaryFormula(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LogicParser.BinaryFormulaContext = BinaryFormulaContext;

LogicParser.prototype.binaryFormula = function() {

    var localctx = new BinaryFormulaContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, LogicParser.RULE_binaryFormula);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 20;
        this.match(LogicParser.OBRACKET);
        this.state = 21;
        this.formula();
        this.state = 22;
        this.binaryOperation();
        this.state = 23;
        this.formula();
        this.state = 24;
        this.match(LogicParser.CBRACKET);
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
};

function FormulaContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LogicParser.RULE_formula;
    return this;
}

FormulaContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormulaContext.prototype.constructor = FormulaContext;

FormulaContext.prototype.CONST = function() {
    return this.getToken(LogicParser.CONST, 0);
};

FormulaContext.prototype.ATOM = function() {
    return this.getToken(LogicParser.ATOM, 0);
};

FormulaContext.prototype.unaryFormula = function() {
    return this.getTypedRuleContext(UnaryFormulaContext,0);
};

FormulaContext.prototype.binaryFormula = function() {
    return this.getTypedRuleContext(BinaryFormulaContext,0);
};

FormulaContext.prototype.enterRule = function(listener) {
    if(listener instanceof LogicListener ) {
        listener.enterFormula(this);
	}
};

FormulaContext.prototype.exitRule = function(listener) {
    if(listener instanceof LogicListener ) {
        listener.exitFormula(this);
	}
};

FormulaContext.prototype.accept = function(visitor) {
    if ( visitor instanceof LogicVisitor ) {
        return visitor.visitFormula(this);
    } else {
        return visitor.visitChildren(this);
    }
};




LogicParser.FormulaContext = FormulaContext;

LogicParser.prototype.formula = function() {

    var localctx = new FormulaContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, LogicParser.RULE_formula);
    try {
        this.state = 30;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 26;
            this.match(LogicParser.CONST);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 27;
            this.match(LogicParser.ATOM);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 28;
            this.unaryFormula();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 29;
            this.binaryFormula();
            break;

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
};


exports.LogicParser = LogicParser;
