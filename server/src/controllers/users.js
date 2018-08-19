import usersModel from '../models/users';

const usersController = (req, res) => {
    const usersController = (req, res) => {
        let users = usersModel.getAllUsers();

        //if user isn't a member, redirect to home page
        if (!(users.indexof(user))) { res.send(400, "User doesn't exist") };



        //user login
        app.get('/users/:id', (req, res) => {
            const user = usersModel.getUser(req.params.id, req.body.password);  //parameters are username and password
            if (user) {
                res.status(200).send("successfully logged in")
            } else {
                res.status(400).send("login was not successful. Try again")
            }

        });


        //create a new entry
        app.post('/users', (req, res) => {
            const newUser = usersModel.createUser(req.body);
            if (newUser) {
                res.send(200, "entry was created successfully");
            } else {
                res.send(400, "sorry we couldn't create the entry. Try again");
            }
        })


        //modify an existing entry
        app.put('/entries/:id', (req, res) => {
            const changedUser = usersModel.modifyUser(req.params.id);
            if (changedUser) {
                res.send(200, "user info was modified successfully");
            } else {
                res.send(400, "sorry we couldn't modify the user info. Try again");
            }
        })
    }
}

export { usersController };