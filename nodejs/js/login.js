const express = require('express');
const tools = require('./tools');

router = express.Router();


router.get('/login', async (req, res, next) => {

    const user = (await tools.getstrapi('utilisateurs', 'user1@gmail.com', 'email'))[0];

    console.log(user);

    res.render('index', {
        title: 'Moodly',
        user: user,
    });
});


module.exports = router;