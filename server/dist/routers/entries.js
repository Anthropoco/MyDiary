'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.entriesRouter = undefined;

var _entries = require('./controllers/entries');

var _entries2 = _interopRequireDefault(_entries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var entriesRouter = function entriesRouter(req, res, next) {
    app.all('/entries', _entries2.default);
};

exports.entriesRouter = entriesRouter;