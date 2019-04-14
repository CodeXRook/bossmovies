const express = require('express');
const router = express();

router.get('/', (req, res, next) => {
    res.json('What is this');
});