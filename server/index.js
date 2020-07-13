require('dotenv').config();
const express = require('express');
const massive = require('massive');
const controller = require('./controller');

const {SERVER_PORT, DB_URI} = process.env;

const app = express();

app.use(express.json());

massive({
    connectionString: DB_URI,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db);
    console.log('DB is connected');
}).catch(err => console.log(err));

app.listen(4040, () => console.log(`Listening on port 4040`));
