const antlr4 = require('antlr4/index');

const LogicLexer = require('./grammar/LogicLexer');
const LogicParser = require('./grammar/LogicParser');
const convert = require('./pcnfConverter').convert;
const Visitor = require('./Visitor').Visitor;

module.exports = (input) => {
  try{
    var chars = new antlr4.InputStream(input);
    var lexer = new LogicLexer.LogicLexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new LogicParser.LogicParser(tokens);

    parser.removeErrorListeners();
    parser.addErrorListener({
      syntaxError: (recognizer, offendingSymbol, line, column, msg, err) => {
        throw "Not a logic formula";
      }
    });
    parser.buildParseTrees = true;

    var visitor = new Visitor();
    var tree = parser.statement();

    if (tree.getText() !== input.replace(/\s/g, '') + '<EOF>') {
      throw "Not a logic formula";
    }

    var statement = visitor.visitStatement(tree);

    return convert(statement);
  } catch {
    return { pcnf: "Invalid formula", table: {}, error: true }
  }
};
