const express = require('express');
const connect = require('./helper/dbConnect');
const config = require('config');
const userRouter = require('./routes/userRouter');
const movieRouter = require('./routes/movieRouter');
const favRouter = require('./routes/favRouter');
const PORT = config.get('app.port');

const app = express();
app.use(express.json());

// connect to DB
connect();

// routes
app.use('/user', userRouter);
app.use('/movie', movieRouter);
app.use('/fav', favRouter);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));