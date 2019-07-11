"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var TransportObject = /** @class */ (function () {
    function TransportObject(options) {
        this.data = options;
    }
    return TransportObject;
}());
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1.default();
        this.routes = new routes_1.default(this.app);
        this.app.get('/home', this.home);
        this.app.listen(8080, function () {
            console.log('Example app listening on port 8080!');
        });
    }
    Server.prototype.home = function (req, res) {
        res.send(new TransportObject({
            messages: "123"
        }));
    };
    return Server;
}());
var server = new Server();
exports.default = server;
