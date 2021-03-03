"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const express = require("express");
const express_1 = require("express");
const path_1 = require("path");
const body_parser_1 = require("body-parser");
dotenv.config();
const port = process.env.PORT;
const fork = () => {
    try {
        const app = express();
        app.use(express_1.static(path_1.join(__dirname, '../public')));
        app.use(body_parser_1.json());
        app.use(body_parser_1.urlencoded({ extended: true }));
        app.get('*', (req, res) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.send(express_1.static(path_1.join(__dirname, '../public/index.html')));
        });
        app.use((err, req, res, next) => {
            console.log(err);
        });
        app.listen(port, () => {
            console.log('Express server listening on port ' + port);
        });
    }
    catch (err) {
        console.log(err);
    }
};
fork();
//# sourceMappingURL=app.js.map