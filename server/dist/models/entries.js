"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var entriesModel = {

    id: 1, //create an id issuing system. it will be incremented for each new entry

    entries: [{ id: 1, date: "02/12/2017", title: "dummy entry title", text: "dummy entry body. lorem ipsum bla bla bla" }],

    getAllEntries: function getAllEntries() {
        return entries;
    },
    getEntry: function getEntry(id) {
        entries.forEach(function (entry, index) {
            if (id === entry.id) {
                return entry;
            };
        });
        return null;
    },
    createEntry: function createEntry(data) {
        data.id = id++; //assign id to our new entry
        if (entries.push(data)) return data;
        return null;
    },
    modifyEntry: function modifyEntry(entryId, data) {
        var entry = this.getEntry(entryId);
        if (!entry) return null;

        //TODO confirm if the following overwrites the entry
        entry = Object.assign(entry, data);

        return entry;
    },
    deleteEntry: function deleteEntry(entryId) {
        var entry = this.getEntry(entryId);
        var idx = entries.indexOf(entry);
        var prevlen = entries.length;
        entries.splice(idx, 1); //delete the element using its index
        if (entries.length < prevlen) {
            return true;
        } else {
            return false;
        }
    }
};

exports.entriesModel = entriesModel;