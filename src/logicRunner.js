const antlr4 = require('antlr4/index');

const LogicLexer = require('./grammar/LogicLexer');
const LogicParser = require('./grammar/LogicParser');
const convert = require('./pcnfConverter').convert;
var Visitor = require('./Visitor').Visitor;


class ErrorListener {
  constructor() {
    return this;
  }

  syntaxError() {
    throw "Not a logic formula";
  }
};


module.exports = (input) => {
  var chars = new antlr4.InputStream(input);
  var lexer = new LogicLexer.LogicLexer(chars);
  var tokens = new antlr4.CommonTokenStream(lexer);
  var parser = new LogicParser.LogicParser(tokens);
  parser.removeErrorListeners();
  parser.addErrorListener(new ErrorListener());
  parser.buildParseTrees = true;
  var visitor = new Visitor();
  var tree = parser.statement();

  var statement = visitor.visitStatement(tree);
  pcnf = convert(statement);

  return pcnf;
};
