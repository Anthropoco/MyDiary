'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _users = require('./routers/users.js');

var _users2 = _interopRequireDefault(_users);

var _entries = require('./routers/entries.js');

var _entries2 = _interopRequireDefault(_entries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use('/users', _users2.default);
app.use('/entries', _entries2.default);

app.listen(3000, function () {
  return console.log('Example app listening on port 3000!');
});