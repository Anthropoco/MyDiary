"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var entriesModel = {

    id: 1, //create an id issuing system. it will be incremented for each new entry

    entries: [{ id: 1, date: "02/12/2017", title: "dummy entry title", text: "dummy entry body. lorem ipsum bla bla bla" }],

    getAllEntries: function getAllEntries() {
        return this.entries;
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