// Generated from src/grammar/Logic.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\f1\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0006\u000b",
    ",\n\u000b\r\u000b\u000e\u000b-\u0003\u000b\u0003\u000b\u0002\u0002\f",
    "\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t",
    "\u0011\n\u0013\u000b\u0015\f\u0003\u0002\u0005\u0003\u000223\u0003\u0002",
    "C\\\u0005\u0002\u000b\f\u000f\u000f\"\"\u00021\u0002\u0003\u0003\u0002",
    "\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002",
    "\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002",
    "\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002",
    "\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002",
    "\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0003\u0017\u0003\u0002",
    "\u0002\u0002\u0005\u0019\u0003\u0002\u0002\u0002\u0007\u001b\u0003\u0002",
    "\u0002\u0002\t\u001d\u0003\u0002\u0002\u0002\u000b\u001f\u0003\u0002",
    "\u0002\u0002\r!\u0003\u0002\u0002\u0002\u000f$\u0003\u0002\u0002\u0002",
    "\u0011&\u0003\u0002\u0002\u0002\u0013(\u0003\u0002\u0002\u0002\u0015",
    "+\u0003\u0002\u0002\u0002\u0017\u0018\t\u0002\u0002\u0002\u0018\u0004",
    "\u0003\u0002\u0002\u0002\u0019\u001a\t\u0003\u0002\u0002\u001a\u0006",
    "\u0003\u0002\u0002\u0002\u001b\u001c\u0007#\u0002\u0002\u001c\b\u0003",
    "\u0002\u0002\u0002\u001d\u001e\u0007(\u0002\u0002\u001e\n\u0003\u0002",
    "\u0002\u0002\u001f \u0007~\u0002\u0002 \f\u0003\u0002\u0002\u0002!\"",
    "\u0007/\u0002\u0002\"#\u0007@\u0002\u0002#\u000e\u0003\u0002\u0002\u0002",
    "$%\u0007\u0080\u0002\u0002%\u0010\u0003\u0002\u0002\u0002&\'\u0007*",
    "\u0002\u0002\'\u0012\u0003\u0002\u0002\u0002()\u0007+\u0002\u0002)\u0014",
    "\u0003\u0002\u0002\u0002*,\t\u0004\u0002\u0002+*\u0003\u0002\u0002\u0002",
    ",-\u0003\u0002\u0002\u0002-+\u0003\u0002\u0002\u0002-.\u0003\u0002\u0002",
    "\u0002./\u0003\u0002\u0002\u0002/0\b\u000b\u0002\u00020\u0016\u0003",
    "\u0002\u0002\u0002\u0004\u0002-\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function LogicLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

LogicLexer.prototype = Object.create(antlr4.Lexer.prototype);
LogicLexer.prototype.constructor = LogicLexer;

Object.defineProperty(LogicLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

LogicLexer.EOF = antlr4.Token.EOF;
LogicLexer.CONST = 1;
LogicLexer.ATOM = 2;
LogicLexer.NEGATION = 3;
LogicLexer.CONJUNCTION = 4;
LogicLexer.DISJUNCTION = 5;
LogicLexer.IMPLICATION = 6;
LogicLexer.EQUIVALENT = 7;
LogicLexer.OBRACKET = 8;
LogicLexer.CBRACKET = 9;
LogicLexer.WS = 10;

LogicLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

LogicLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

LogicLexer.prototype.literalNames = [ null, null, null, "'!'", "'&'", "'|'", 
                                      "'->'", "'~'", "'('", "')'" ];

LogicLexer.prototype.symbolicNames = [ null, "CONST", "ATOM", "NEGATION", 
                                       "CONJUNCTION", "DISJUNCTION", "IMPLICATION", 
                                       "EQUIVALENT", "OBRACKET", "CBRACKET", 
                                       "WS" ];

LogicLexer.prototype.ruleNames = [ "CONST", "ATOM", "NEGATION", "CONJUNCTION", 
                                   "DISJUNCTION", "IMPLICATION", "EQUIVALENT", 
                                   "OBRACKET", "CBRACKET", "WS" ];

LogicLexer.prototype.grammarFileName = "Logic.g4";



exports.LogicLexer = LogicLexer;

