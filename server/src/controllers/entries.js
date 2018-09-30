import entriesModel from '../models/entries';
import app from '../app';


const entriesController = (req, res) => {
    // let users = usersModel.getAllUsers();

    // //if user isn't a member, redirect to home page
    // if (!(users.indexof(user))) { res.send(400, "User doesn't exist") };


    //get a particular entry
    let getEntry = (req, res) => {
        entriesModel.getEntry(req, res);
    };

    if (req.method == 'GET'
        && Boolean(Number(req.params.id)) /*awkward code makes the if statement run
         if and only if req.params.id is non-empty*/ )
        getEntry(req, res);


    //get list of entries
    let getAllEntries = (req, res) => {
        entriesModel.getAllEntries(req, res);
    };

    if (req.method == 'GET' && !Boolean(Number(req.params.id))) getAllEntries(req, res);


    //create a new entry
    let createNewEntry = (req, res) => {
        entriesModel.createEntry(req.body, res);
    };

    if (req.method == 'POST') createNewEntry(req, res);

    //modify an existing entry
    let modifyEntry = (req, res) => {
        entriesModel.modifyEntry(req.params.id, req.body, res);
    };

    if (req.method == 'PUT') modifyEntry(req, res);

    //delete an entry
    let deleteEntry = (req, res) => {
        entriesModel.deleteEntry(req.params.id, res);
    };

    if (req.method == 'DELETE') deleteEntry(req, res);
}

export { entriesController };