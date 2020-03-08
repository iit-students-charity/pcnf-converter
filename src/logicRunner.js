const antlr4 = require('antlr4/index');

const LogicLexer = require('./grammar/LogicLexer');
const LogicParser = require('./grammar/LogicParser');
var Visitor = require('./Visitor').Visitor;

module.exports = (input) => {
  var input = "(A | B)";
  var chars = new antlr4.InputStream(input);
  var lexer = new LogicLexer.LogicLexer(chars);
  var tokens = new antlr4.CommonTokenStream(lexer);
  var parser = new LogicParser.LogicParser(tokens);
  var visitor = new Visitor();
  parser.buildParseTrees = true;
  var tree = parser.statement();

  var statement = visitor.visitStatement(tree);
  var atoms = getAtoms(statement);


  debugger

  return statementTree;
};
