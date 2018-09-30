'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pgPromise = require('pg-promise');

var _pgPromise2 = _interopRequireDefault(_pgPromise);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pgp = (0, _pgPromise2.default)({});
var db = pgp('postgres://postgres@localhost:5432/diary');

function generateID(func) {
    return new Promise(function (resolve, reject) {
        _fs2.default.readFile('./server/src/models/lastAssignedID', function (err, idBuffer) {
            if (err) reject(err);
            var id = Number(idBuffer.toString('utf8')) + 1;
            resolve(id);
        });
    });
}

function updateIDStore(id) {
    return new Promise(function (resolve, reject) {
        _fs2.default.writeFile('./server/src/models/lastAssignedID', id, function (err) {
            if (err) {
                reject(err);
            }
            resolve;
        });
    });
}

var entriesModel = {
    getAllEntries: function getAllEntries(req, res) {
        db.any('SELECT * FROM entries').then(function (data) {
            console.log(JSON.stringify(data));
            res.write(JSON.stringify(data));
            res.end();
        });
    },
    getEntry: function getEntry(req, res) {
        db.one('SELECT * FROM entries WHERE id = $1', req.params.id).then(function (entry) {
            res.end(JSON.stringify(entry));
        }).catch(function (err) {
            res.status(400).send("Ooops! We couldn't find the entry  you're looking for");
        });
    },
    createEntry: function createEntry(data, res) {
        console.log(data);
        generateID().then(function (id) {
            console.log('generatedID', id);
            db.manyOrNone('INSERT INTO entries (id, title, text, date) VALUES ($1, $2, $3, NOW())', [id, data.title, data.text]);
            return id;
        }).then(function (id) {
            updateIDStore(id);
            res.status(200).send("entry was created successfully");
        }).catch(function (err) {
            console.log(err);
            res.status(400).send("sorry we couldn't create the entry. Try again");
        });
    },
    modifyEntry: function modifyEntry(entryId, data) {
        var entry = this.getEntry(entryId);
        if (!entry) return null;

        //overwrites the entry
        entry = Object.assign(entry, data);

        return entry;
    },
    deleteEntry: function deleteEntry(entryId) {
        var entryToDelete = this.getEntry(entryId);
        if (entryToDelete) {
            var idx = this.entries.indexOf(entryToDelete);
            var prevlen = this.entries.length;
            this.entries.splice(idx, 1); //delete the element using its index
            if (this.entries.length < prevlen) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
};

exports.default = entriesModel;