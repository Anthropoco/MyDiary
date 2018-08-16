import express from 'express';
import { usersRouter } from './routers/users.js';
import { entriesRouter } from './routers/entries.js';

const app = express();

app.use('/users', usersRouter);
app.use('/entries', entriesRouter);

app.listen(3000, () => console.log('Example app listening on port 3000!'));