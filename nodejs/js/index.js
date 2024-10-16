const express = require('express');
const tools = require('./tools');

router = express.Router();


router.get('/', async (req, res, next) => {

    const mcdo = (await tools.getstrapi('restaurants', 'MCDO'))[0]

    res.render('index', {
        title: 'Moodly',
        resto: mcdo,
    });
});


module.exports = router;