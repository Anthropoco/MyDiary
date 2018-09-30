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
        _entries2.default.getEntry(req, res);
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
        _entries2.default.createEntry(req.body, res);
    };

    if (req.method == 'POST') createNewEntry(req, res);

    //modify an existing entry
    var modifyEntry = function modifyEntry(req, res) {
        _entries2.default.modifyEntry(req.params.id, req.body, res);
    };

    if (req.method == 'PUT') modifyEntry(req, res);

    //delete an entry
    var deleteEntry = function deleteEntry(req, res) {
        _entries2.default.deleteEntry(req.params.id, res);
    };

    if (req.method == 'DELETE') deleteEntry(req, res);
};

exports.entriesController = entriesController;