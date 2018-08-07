const express = require('express');

const  userRouter = require('./Routers/users.js');
const entryRouter = require('./Routers/entries.js');
const app = express();

app.use('/user', userRouter );
app.use('/entries', entriesRouter);

app.listen(3000, () => console.log('Example app listening on port 3000!'));
