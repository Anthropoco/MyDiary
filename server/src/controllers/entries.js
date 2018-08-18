import entriesModel from '../models/entries';
import app from '../app';

const entriesController = (req, res) => {
    console.log('into controller');
    // let users = usersModel.getAllUsers();

    // //if user isn't a member, redirect to home page
    // if (!(users.indexof(user))) { res.send(400, "User doesn't exist") };


    //get a particular entry
    let getEntry = (req, res) => {
        const entry = entriesModel.getEntry(req.params.id);
        if (entry) {
            res.json(entry);
        } else {
            res.status(400).send("Ooops! We couldn't find the entry  you're looking for");
        }

    };

    if (req.method == 'GET' 
        && Boolean(Number(req.params.id)) /*awkward code makes the if statement run
         if and only if req.params.id is non-empty*/ ) 
        getEntry(req, res);


    //get list of entries
    let getAllEntries = (req, res) => {
        console.log('into get entries handler');
        const entries = entriesModel.getAllEntries();
        res.json(entries);
        console.log('outer get entries handler');
    };

    if (req.method == 'GET' && !Boolean(Number(req.params.id))) getAllEntries(req, res);


    //create a new entry
    let createNewEntry = (req, res) => {
        const newEntry = entriesModel.createEntry(req.body);
        if (newEntry) {
            res.send(200, "entry was created successfully");
        } else {
            res.send(400, "sorry we couldn't create the entry. Try again");
        }
    };

    if(req.method == 'POST') createNewEntry(req, res);

    //modify an existing entry
    let modifyEntry = (req, res) => {
        const changedEntry = entriesModel.modifyEntry(req.params.id, req.body);
        if (changedEntry) {
            res.send(200, "entry was modified successfully");
        } else {
            res.send(400, "sorry we couldn't modify the entry. Try again");
        }
    };

    if (req.method == 'PUT') modifyEntry(req, res);

    //delete an entry
    app.delete('/entries/:id', (req, res) => {
        const deletedEntry = entriesModel.deleteEntry(req.params.id);
        if (deletedEntry) {
            res.send(200, "entry was deleted successfully");
            res.end();
        } else {
            res.send(400, "sorry we couldn't deleted the entry. Try again");
            res.end();
        }
    })
    console.log('outer controller');
}

export { entriesController };