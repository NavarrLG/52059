


//lexer
grammar ECMASG;
 
prog: stat+;
    

stat: doWhileStat
    | assignmentStat
    | consoleStat
    ;

doWhileStat: 'do' block 'while' '(' expr ')' ';'
    ;

assignmentStat: ID '=' expr ';'
    ;

consoleStat: 'console' '.' 'log' '(' expr ')' ';'
    ;

block: '{' stat* '}'
    ;

expr: term (('+' | '-' | '*' | '/') term)*
    ;

term: ID
    | NUMBER
    | '(' expr ')'
    ;

//tokens
DO        : 'do';
WHILE     : 'while';
CONSOLE   : 'console';
LOG       : 'log';
DOT       : '.';
LPAREN    : '(';
RPAREN    : ')';
LBRACE    : '{';
RBRACE    : '}';
SEMI      : ';';
ASSIGN    : '=';
PLUS      : '+';
MINUS     : '-';
STAR      : '*';
SLASH     : '/';
ID    : [a-zA-Z_][a-zA-Z_0-9]*;
NUMBER     : [0-9]+;
NEWLINE: '\r'? '\n' -> skip;
WS: [ \t]+ -> skip;
