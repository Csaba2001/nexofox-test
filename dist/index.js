"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import { isEnumMember, isNumericLiteral } from 'typescript';
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    if (req.query.x && req.query.y) {
        var x = req.query.x;
        var a = +x;
        var y = req.query.y;
        var b = +y;
        var c = 0;
        const tomb = [];
        if (a > b) {
            c = b;
            b = a;
            a = c;
        }
        do {
            var d = "";
            if (a % 3 == 0) {
                d += "fizz";
            }
            if (a % 5 == 0) {
                d += "buzz";
            }
            if (d) {
                tomb.push(d);
            }
            else {
                tomb.push(a);
            }
            a++;
        } while (a <= b);
        const jsonContent = JSON.stringify(tomb);
        res.send(jsonContent);
    }
});
app.listen(9876, () => {
    console.log('Running on 9876');
});
