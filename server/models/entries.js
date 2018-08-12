let entriesModel = {

    id = 1, //create an id issuing system. it will be incremented for each new entry

    entries = [
        { id: id, date: "02/12/2017", title: "dummy entry title", text: "dummy entry body. lorem ipsum bla bla bla" },
    ],

    getAllEntries() {
        return entries;
    },

    getEntry(id) {
        entries.forEach((entry, index) => {
            if (id === entry.id) { return entry; };
        });
        return null;
    },

    createEntry(data) {
        data.id = id++;     //assign id to our new entry
        if (entries.push(data)) return data;
        return null;
    },

    modifyEntry(entryId, data) {
        const entry = this.getEntry(entryId);
        if (!entry) return null;

        //TODO confirm if the following overwrites the entry
        entry = Object.assign(entry, data);

        return entry;
    },

    deleteEntry(entryId) {
        const entry = this.getEntry(entryId);
        const idx = entries.indexOf(entry);
        const prevlen = entries.length;
        entries.splice(idx, 1); //delete the element using its index
        if (entries.length < prevlen) { return true } else { return false }
    }
}

export entriesModel;