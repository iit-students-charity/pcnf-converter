grammar Logic;

statement: formula EOF;

binaryOperation: CONJUNCTION | DISJUNCTION | IMPLICATION | EQUIVALENT;

unaryFormula: OBRACKET NEGATION formula CBRACKET;
binaryFormula:  OBRACKET formula binaryOperation formula CBRACKET;
formula: CONST | ATOM | unaryFormula | binaryFormula;

CONST : [10] ;
ATOM : [A-Z] ;

NEGATION : '!' ;

CONJUNCTION : '&' ;
DISJUNCTION : '|' ;
IMPLICATION : '->' ;
EQUIVALENT : '~' ;

OBRACKET : '(' ;
CBRACKET : ')' ;

WS : [ \t\r\n]+ -> skip ;
