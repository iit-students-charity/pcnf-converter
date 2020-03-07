const antlr4 = require('antlr4/index');
const LogicLexer = require('./grammar/LogicLexer');
const LogicParser = require('./grammar/LogicParser');
var LogicListener = require('./grammar/LogicListener').LogicListener;

HtmlLogicListener = function(result) {
  this.result = result;
  LogicListener.call(this); // inherit default listener
  return this;
};

// inherit default listener
HtmlLogicListener.prototype = Object.create(LogicListener.prototype);
HtmlLogicListener.prototype.constructor = HtmlLogicListener;

// override default listener behavior
HtmlLogicListener.prototype.enterNode = function(ctx) {
  this.result.output += "<strong>";
};

HtmlLogicListener.prototype.exitNode = function(ctx) {
  this.result.output += ctx.ID().getText();
  this.result.output += "</strong>";
};

exports.HtmlLogicListener = HtmlLogicListener;
