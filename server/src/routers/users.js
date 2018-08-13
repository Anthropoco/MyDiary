import usersController from './controllers/users';

const usersRouter = (req, res, next) => {
    //handle login
    app.all('/users', usersController);
}


export { usersRouter };