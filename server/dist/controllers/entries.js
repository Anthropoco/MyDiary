'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.entriesController = undefined;

var _entries = require('../models/entries');

var _entries2 = _interopRequireDefault(_entries);

var _app = require('../app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var entriesController = function entriesController(req, res) {
    // let users = usersModel.getAllUsers();

    // //if user isn't a member, redirect to home page
    // if (!(users.indexof(user))) { res.send(400, "User doesn't exist") };


    //get a particular entry
    var getEntry = function getEntry(req, res) {
        var entry = _entries2.default.getEntry(req.params.id);
        if (entry) {
            res.json(entry);
        } else {
            res.status(400).send("Ooops! We couldn't find the entry  you're looking for");
        }
    };

    if (req.method == 'GET' && Boolean(Number(req.params.id)) /*awkward code makes the if statement run
                                                              if and only if req.params.id is non-empty*/) getEntry(req, res);

    //get list of entries
    var getAllEntries = function getAllEntries(req, res) {
        _entries2.default.getAllEntries(req, res);
    };

    if (req.method == 'GET' && !Boolean(Number(req.params.id))) getAllEntries(req, res);

    //create a new entry
    var createNewEntry = function createNewEntry(req, res) {
        var newEntry = _entries2.default.createEntry(req.body);
        if (newEntry) {
            res.status(200).send("entry was created successfully");
        } else {
            res.status(400).send("sorry we couldn't create the entry. Try again");
        }
    };

    if (req.method == 'POST') createNewEntry(req, res);

    //modify an existing entry
    var modifyEntry = function modifyEntry(req, res) {
        var changedEntry = _entries2.default.modifyEntry(req.params.id, req.body);
        if (changedEntry) {
            res.status(200).send("entry was modified successfully");
        } else {
            res.status(400).send("sorry we couldn't modify the entry. Try again");
        }
    };

    if (req.method == 'PUT') modifyEntry(req, res);

    //delete an entry
    var deleteEntry = function deleteEntry(req, res) {
        var deletedEntry = _entries2.default.deleteEntry(req.params.id);
        if (deletedEntry) {
            res.status(200).send("entry was deleted successfully");
        } else {
            res.status(400).send("sorry we couldn't delete the entry. Try again");
        }
    };

    if (req.method == 'DELETE') deleteEntry(req, res);
};

exports.entriesController = entriesController;