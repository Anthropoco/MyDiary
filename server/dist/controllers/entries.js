'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.entriesController = undefined;

var _entries = require('../models/entries');

var _entries2 = _interopRequireDefault(_entries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var entriesController = function entriesController(req, res) {
    var users = usersModel.getAllUsers();

    //if user isn't a member, redirect to home page
    if (!users.indexof(user)) {
        res.send(400, "User doesn't exist");
    };

    //get list of entries
    app.get('/entries', function (req, res) {
        var entries = _entries2.default.getAllEntries();
        res.json(entries);
    });

    //get a particular entry
    app.get('/entries/:id', function (req, res) {
        var entry = _entries2.default.getEntry(req.params.id);
        if (entry) {
            res.json(entry);
        } else {
            res.send(400, "Ooops! We couldn't find the entry  you're looking for");
        }
    });

    //create a new entry
    app.post('/entries', function (req, res) {
        var newEntry = _entries2.default.createEntry(req.body);
        if (newEntry) {
            res.send(200, "entry was created successfully");
        } else {
            res.send(400, "sorry we couldn't create the entry. Try again");
        }
    });

    //modify an existing entry
    app.put('/entries/:id', function (req, res) {
        var changedEntry = _entries2.default.modifyEntry(req.params.id, req.body);
        if (changedEntry) {
            res.send(200, "entry was modified successfully");
        } else {
            res.send(400, "sorry we couldn't modify the entry. Try again");
        }
    });

    //delete an entry
    app.delete('/entries/:id', function (req, res) {
        var deletedEntry = _entries2.default.deleteEntry(req.params.id);
        if (deletedEntry) {
            res.send(200, "entry was deleted successfully");
        } else {
            res.send(400, "sorry we couldn't deleted the entry. Try again");
        }
    });
};

exports.entriesController = entriesController;