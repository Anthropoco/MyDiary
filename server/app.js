import express from 'express';

import userRouter from './Routers/users.js';
import entryRouter from './Routers/entries.js';
const app = express();

app.use('/users', userRouter );
app.use('/entries', entryRouter);

app.listen(3000, () => console.log('Example app listening on port 3000!'));
