// Generated from src/grammar/Logic.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by LogicParser.
function LogicListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

LogicListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
LogicListener.prototype.constructor = LogicListener;

// Enter a parse tree produced by LogicParser#statement.
LogicListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by LogicParser#statement.
LogicListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by LogicParser#binary.
LogicListener.prototype.enterBinary = function(ctx) {
};

// Exit a parse tree produced by LogicParser#binary.
LogicListener.prototype.exitBinary = function(ctx) {
};


// Enter a parse tree produced by LogicParser#unary_formula.
LogicListener.prototype.enterUnary_formula = function(ctx) {
};

// Exit a parse tree produced by LogicParser#unary_formula.
LogicListener.prototype.exitUnary_formula = function(ctx) {
};


// Enter a parse tree produced by LogicParser#binary_formula.
LogicListener.prototype.enterBinary_formula = function(ctx) {
};

// Exit a parse tree produced by LogicParser#binary_formula.
LogicListener.prototype.exitBinary_formula = function(ctx) {
};


// Enter a parse tree produced by LogicParser#formula.
LogicListener.prototype.enterFormula = function(ctx) {
};

// Exit a parse tree produced by LogicParser#formula.
LogicListener.prototype.exitFormula = function(ctx) {
};



exports.LogicListener = LogicListener;