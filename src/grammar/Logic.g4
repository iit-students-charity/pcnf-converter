grammar Logic;

statement: formula EOF;

binary: CONJUNCTION | DISJUNCTION | IMPLICATION | EQUIVALENT;

unary_formula: OBRACKET NEGATION formula CBRACKET;
binary_formula:  OBRACKET formula binary formula CBRACKET;
formula: CONST | ATOM | unary_formula | binary_formula;

CONST : '[10]' ;
ATOM: '[A-Z]' ;

NEGATION : '!' ;

CONJUNCTION : '&' ;
DISJUNCTION : '|' ;
IMPLICATION : '->' ;
EQUIVALENT : '~' ;

OBRACKET : '(' ;
CBRACKET : ')' ;

WS : [ \t\r\n]+ -> skip ;
