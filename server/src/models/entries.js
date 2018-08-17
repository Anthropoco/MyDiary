let entriesModel = {

    id: 1, //create an id issuing system. it will be incremented for each new entry

    entries: [
        { id: 1, date: "02/12/2017", title: "dummy entry title", text: "dummy entry body. lorem ipsum bla bla bla" },
    ],

    getAllEntries() {
        console.log('just about to run Model.getAllEntries()');
        return this.entries;
    },

    getEntry(id) {
        this.entries.forEach((entry, index) => {
            if (id === entry.id) { return entry; };
        });
        return null;
    },

    createEntry(data) {
        data.id = ++this.id;     //assign id to our new entry
        if (this.entries.push(data)) return data;
        return null;
    },

    modifyEntry(entryId, data) {
        let entry = this.getEntry(entryId);
        if (!entry) return null;

        //TODO confirm if the following overwrites the entry
        entry = Object.assign(entry, data);

        return entry;
    },

    deleteEntry(entryId) {
        let entry = this.getEntry(entryId);
        const idx = entries.indexOf(entry);
        const prevlen = entries.length;
        entries.splice(idx, 1); //delete the element using its index
        if (entries.length < prevlen) { return true } else { return false }
    }
}

export default entriesModel;