require('dotenv/config');

const express = require('express');
const app = express();

app.use(express.json());

app.listen(process.env.APP_PORT, () => {
    console.log(`App running on port ${process.env.APP_PORT}`);
});