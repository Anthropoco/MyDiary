import pgpromise from 'pg-promise';
const pgp = pgpromise({});
const db = pgp('postgres://postgres@localhost:5432/diary');

let entriesModel = {


    getAllEntries(req, res) {
        db.any('SELECT * FROM entries')
            .then(data => {
                console.log(JSON.stringify(data));
                res.write(JSON.stringify(data));
                res.end();
            });
    },


    getEntry(req, res) {
        db.one('SELECT * FROM entries WHERE id = $1', req.params.id)
        .then((entry)=>{
            res.end(JSON.stringify(entry));
        })
        .catch((err)=>{
            res.status(400).send("Ooops! We couldn't find the entry  you're looking for");
        })
    },

    createEntry(data) {
        data.id = ++this.id;     //assign id to our new entry
        if (this.entries.push(data)) return data;
        return null;
    },

    modifyEntry(entryId, data) {
        let entry = this.getEntry(entryId);
        if (!entry) return null;

        //overwrites the entry
        entry = Object.assign(entry, data);

        return entry;
    },

    deleteEntry(entryId) {
        let entryToDelete = this.getEntry(entryId);
        if (entryToDelete) {
            const idx = this.entries.indexOf(entryToDelete);
            const prevlen = this.entries.length;
            this.entries.splice(idx, 1); //delete the element using its index
            if (this.entries.length < prevlen) { return true } else { return false }
        } else {
            return false;
        }
    }
}

export default entriesModel;