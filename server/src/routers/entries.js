import { entriesController } from '../controllers/entries';

const entriesRouter = (req, res) => {
    entriesController(req, res);
    console.log('outer router');
}

export { entriesRouter };