"use strict";
// Завдання #7: UpperCaseKeys
const playerUpperCaseKeys = {
    NAME: 'Bill',
    position: 'defender', //Object literal may only specify known properties, but 'position' does not exist in type 'UpperCaseKeys<IPlayer>'.
    //  Did you mean to write 'POSITION'?ts(2561)
};
console.log(playerUpperCaseKeys);
