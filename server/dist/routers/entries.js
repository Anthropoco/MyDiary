'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.entriesRouter = undefined;

var _entries = require('../controllers/entries');

var _app = require('../app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var entriesRouter = function entriesRouter(req, res) {
    // app.use('/entries', entriesController);
    (0, _entries.entriesController)(req, res);
    console.log('outer router');
};

exports.entriesRouter = entriesRouter;