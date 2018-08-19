'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.entriesRouter = undefined;

var _entries = require('../controllers/entries');

var entriesRouter = function entriesRouter(req, res) {
    (0, _entries.entriesController)(req, res);
};

exports.entriesRouter = entriesRouter;