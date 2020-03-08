// Generated from Logic.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by LogicParser.

function LogicVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

LogicVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
LogicVisitor.prototype.constructor = LogicVisitor;

// Visit a parse tree produced by LogicParser#statement.
LogicVisitor.prototype.visitStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LogicParser#binaryOperation.
LogicVisitor.prototype.visitBinaryOperation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LogicParser#unaryFormula.
LogicVisitor.prototype.visitUnaryFormula = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LogicParser#binaryFormula.
LogicVisitor.prototype.visitBinaryFormula = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by LogicParser#formula.
LogicVisitor.prototype.visitFormula = function(ctx) {
  return this.visitChildren(ctx);
};



exports.LogicVisitor = LogicVisitor;