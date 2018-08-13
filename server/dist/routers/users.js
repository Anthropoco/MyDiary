'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.usersRouter = undefined;

var _users = require('./controllers/users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var usersRouter = function usersRouter(req, res, next) {
    //handle login
    app.all('/users', _users2.default);
};

exports.usersRouter = usersRouter;