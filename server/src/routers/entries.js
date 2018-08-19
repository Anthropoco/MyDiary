import { entriesController } from '../controllers/entries';

const entriesRouter = (req, res) => {
    entriesController(req, res);
}

export { entriesRouter };