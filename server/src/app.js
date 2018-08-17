import express from 'express';
import bodyParser from 'body-parser';
import { usersRouter } from './routers/users.js';
import { entriesRouter } from './routers/entries.js';

const app = express();

app.use(bodyParser());
app.use('/users', usersRouter);
//the order of the next two is important
app.use('/entries/:id', entriesRouter);
app.use('/entries', entriesRouter);
app.use('/entries/:id', entriesRouter);

app.listen(3000, () => console.log('Example app listening on port 3000!'));

export default app;