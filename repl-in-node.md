# REPL in Node.js

REPL - Read-Eval-Print-Loop

## Commands
### .break
abort further input or processing of that expression
### .clear
reset context to an empty object
### .exit
clear the IO stream, and exit
### .help
show this list of special commands
### .save
save the current REPL session to a file 

> \> .save ./file/to/save.js
### .load
load a file into the current PEPL session 
> \> .load ./file/to/load.js

### .editor
enter editor mode

## _ variable
_ represents the most recently evaluated expression 

> \> ['a', 'b', 'c']
> \> _.length // 3

