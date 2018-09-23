'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.usersController = undefined;

var _users = require('../models/users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var usersController = function usersController(req, res) {
    var usersController = function usersController(req, res) {
        var users = _users2.default.getAllUsers();

        //if user isn't a member, redirect to home page
        if (!users.indexof(user)) {
            res.send(400, "User doesn't exist");
        };

        //user login
        app.get('/users/:id', function (req, res) {
            var user = _users2.default.getUser(req.params.id, req.body.password); //parameters are username and password
            if (user) {
                res.status(200).send("successfully logged in");
            } else {
                res.status(400).send("login was not successful. Try again");
            }
        });

        //create a new entry
        app.post('/users', function (req, res) {
            var newUser = _users2.default.createUser(req.body);
            if (newUser) {
                res.send(200, "entry was created successfully");
            } else {
                res.send(400, "sorry we couldn't create the entry. Try again");
            }
        });

        //modify an existing entry
        app.put('/entries/:id', function (req, res) {
            var changedUser = _users2.default.modifyUser(req.params.id);
            if (changedUser) {
                res.send(200, "user info was modified successfully");
            } else {
                res.send(400, "sorry we couldn't modify the user info. Try again");
            }
        });
    };
};

exports.usersController = usersController;