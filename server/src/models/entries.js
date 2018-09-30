import pgpromise from 'pg-promise';
import fs from 'fs';
const pgp = pgpromise({});
const db = pgp('postgres://postgres@localhost:5432/diary');

function generateID(func){
   return new Promise((resolve, reject)=>{
    fs.readFile('./server/src/models/lastAssignedID', (err, idBuffer)=>{
        if(err) reject(err);
        const id = Number(idBuffer.toString('utf8')) + 1;
        resolve(id);
    });
   })
}

function updateIDStore(id){
    return new Promise((resolve, reject)=>{
        fs.writeFile('./server/src/models/lastAssignedID', id, (err)=>{
            if(err){reject(err);}
            resolve;
        });
    });
}

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
            .then((entry) => {
                res.end(JSON.stringify(entry));
            })
            .catch((err) => {
                res.status(400).send("Ooops! We couldn't find the entry  you're looking for");
            })
    },

    createEntry(data, res) {
        console.log(data);
        generateID()
        .then((id)=>{
            console.log('generatedID', id);
            db.manyOrNone('INSERT INTO entries (id, title, text, date) VALUES ($1, $2, $3, NOW())', [id, data.title, data.text]);
           return id;
                       
        })
        .then((id) => {
            updateIDStore(id);
            res.status(200).send("entry was created successfully");
        })
        .catch((err) => {
            console.log(err);
            res.status(400).send("sorry we couldn't create the entry. Try again");
        });
        
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