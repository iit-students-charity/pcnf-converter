var LogicVisitor = require('./grammar/LogicVisitor').LogicVisitor;

function Visitor() {
  LogicVisitor.call(this);
  return this;
};

Visitor.prototype = Object.create(LogicVisitor.prototype);
Visitor.prototype.constructor = Visitor;

Visitor.prototype.visitStatement = function(ctx) {
  return this.visitFormula(ctx.formula())
}

Visitor.prototype.visitFormula = function(ctx) {
    if (ctx.binaryFormula() !== null) {
      return this.visitBinaryFormula(ctx.binaryFormula());
    } else if (ctx.unaryFormula() !== null) {
      return this.visitUnaryFormula(ctx.unaryFormula());
    } else if (ctx.CONST() !== null) {
      return { type: 'const', value: parseInt(ctx.CONST().getText()) };
    } else if (ctx.ATOM() !== null) {
      return { type: 'atom', name: ctx.ATOM().getText() };
    }
};

Visitor.prototype.visitUnaryFormula = function(ctx) {
  return { type: 'unary', operation: 'negation', target: this.visitFormula(ctx.formula()) };
}

Visitor.prototype.visitBinaryFormula = function(ctx) {
  let operation = operationFromContext(ctx.binaryOperation());
  let left = this.visitFormula(ctx.formula()[0])
  let right = this.visitFormula(ctx.formula()[1])
  return { type: 'binary', operation: operation, left: left, right: right };
}

function operationFromContext(binaryOperationContext) {
  switch(binaryOperationContext.getText()) {
  case '|':
    return 'disjunction';
  case '&':
    return 'conjunction';
  case '~':
    return 'equivalent';
  case '->':
    return 'implication';
  }
}

exports.Visitor = Visitor;
