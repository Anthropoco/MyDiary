import entriesController from './controllers/entries';

const entriesRouter = (req, res, next) => {
    app.all('/entries', entriesController);
}

export { entriesRouter };