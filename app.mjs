
import Debug from "debug";
import http from 'http';
import  baseRange from './baseRange.mjs';

const debug = Debug("http");

http.createServer(function (req, res) {
    debug(req.method + ' ' + req.url);
    res.write(`
    baseRange(0,9): ${JSON.stringify(baseRange(0,9))}
    baseRange(0,9,2,true): ${JSON.stringify(baseRange(0,9,2,true)) }
    `);
    res.end();
}).listen(3000, console.log("http://localhost:3000"));
