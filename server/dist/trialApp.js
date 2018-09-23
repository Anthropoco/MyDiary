'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _users = require('./routers/users.js');

var _entries = require('./routers/entries.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use((0, _bodyParser2.default)());
app.use('/users', _users.usersRouter);
//the order of the next two is important
app.use('/entries/:id', _entries.entriesRouter);
app.use('/entries', _entries.entriesRouter);

app.listen(3000, function () {
  return console.log('Example app listening on port 3000!');
});

exports.default = app;