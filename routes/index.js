const express = require('express');
const router = express();

router.get('/', (req, res, next) => {
    res.json('What is this');
});

router.use('/movies', require('./movies'));
router.use('/ratings', require('./ratings'));
router.use('/genres', require('./genres'));
router.use('/comments', require('./comments'));

module.exports = router;