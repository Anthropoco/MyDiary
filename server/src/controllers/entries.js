import entriesModel from '../models/entries';

const entriesController = (req, res) => {
    let users = usersModel.getAllUsers();

    //if user isn't a member, redirect to home page
    if (!(users.indexof(user))) { res.send(400, "User doesn't exist") };



    //get list of entries
    app.get('/entries', (req, res) => {
        const entries = entriesModel.getAllEntries();
        res.json(entries);
    });


    //get a particular entry
    app.get('/entries/:id', (req, res) => {
        const entry = entriesModel.getEntry(req.params.id);
        if (entry) {
            res.json(entry);
        } else {
            res.send(400, "Ooops! We couldn't find the entry  you're looking for");
        }

    });


    //create a new entry
    app.post('/entries', (req, res) => {
        const newEntry = entriesModel.createEntry(req.body);
        if (newEntry) {
            res.send(200, "entry was created successfully");
        } else {
            res.send(400, "sorry we couldn't create the entry. Try again");
        }
    })


    //modify an existing entry
    app.put('/entries/:id', (req, res) => {
        const changedEntry = entriesModel.modifyEntry(req.params.id, req.body);
        if (changedEntry) {
            res.send(200, "entry was modified successfully");
        } else {
            res.send(400, "sorry we couldn't modify the entry. Try again");
        }
    })


    //delete an entry
    app.delete('/entries/:id', (req, res) => {
        const deletedEntry = entriesModel.deleteEntry(req.params.id);
        if (deletedEntry) {
            res.send(200, "entry was deleted successfully");
        } else {
            res.send(400, "sorry we couldn't deleted the entry. Try again");
        }
    })
}

export { entriesController };