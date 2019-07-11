"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Routes = /** @class */ (function () {
    function Routes(app) {
        app.get('/', function (req, res) {
            res.send('Hello Worlds!');
        });
        app.get('/test', function (req, res) {
            res.send('Test');
        });
    }
    return Routes;
}());
exports.default = Routes;
