'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pgPromise = require('pg-promise');

var _pgPromise2 = _interopRequireDefault(_pgPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pgp = (0, _pgPromise2.default)({});
var db = pgp('postgres://postgres@localhost:5432/diary');

var entriesModel = {
    getAllEntries: function getAllEntries(req, res) {
        db.any('SELECT * FROM entries').then(function (data) {
            console.log(JSON.stringify(data));
            res.write(JSON.stringify(data));
            res.end();
        });
    },
    getEntry: function getEntry(id) {
        for (var i = 0; i < this.entries.length; i++) {
            if (id == this.entries[i].id) return this.entries[i];
        }
        return null;
    },
    createEntry: function createEntry(data) {
        data.id = ++this.id; //assign id to our new entry
        if (this.entries.push(data)) return data;
        return null;
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