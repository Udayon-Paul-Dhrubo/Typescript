"use strict";
let arr = [3, 'hello', { p: 3 }];
arr[0] = 'word'; // no error
//arr[1] = false; // error => by inference it is string | number | object
// ----------------- Tuples -----------------
let arr2 = [3, 'hello', { p: 3 }];
//arr2[0] = 'hello'; // error => explicit type checking position wise
