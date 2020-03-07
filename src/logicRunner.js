const antlr4 = require('antlr4/index');

const LogicLexer = require('./grammar/LogicLexer');
const LogicParser = require('./grammar/LogicParser');
const HtmlLogicListener = require('./HtmlLogicListener').HtmlLogicListener;

module.exports = (code) => {
  response = { output: "" };

  var chars = new antlr4.InputStream(code);
  var lexer = new LogicLexer.LogicLexer(chars);
  var tokens = new antlr4.CommonTokenStream(lexer);
  var parser = new LogicParser.LogicParser(tokens);
  parser.buildParseTrees = true;

  var tree = parser.statement();
  var htmlLogic = new HtmlLogicListener(response);
  antlr4.tree.ParseTreeWalker.DEFAULT.walk(htmlLogic, tree);

  return response
};
