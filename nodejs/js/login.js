const express = require('express');
const tools = require('./tools');
const bcrypt = require('bcrypt');


router = express.Router();


router.get('/login', async (req, res, next) => {

    const user = (await tools.getstrapi('utilisateurs', 'user1@gmail.com', 'email'))[0];

    console.log(user.password);

    // Define the number of salt rounds (the higher, the more secure but slower)
    const saltRounds = 10;

    // Hash the text using bcrypt
    bcrypt.hash(user.password, saltRounds, (err, hash) => {
    if (err) {
        console.error('Error hashing the text:', err);
        return;
    }

    // The hashed text
    console.log('Hashed Text:', hash);
    });

    bcrypt.compare(user.password, '$2b$10$m6hUxnRoRfGv3PWe0oXdC.tHSWFea4.q.iqnvNba00HdiWiXIf4r.', (err, isMatch) => {
        if (err) {
          console.error('Error comparing passwords:', err);
          return;
        }
      
        if (isMatch) {
          console.log('Passwords match!');
        } else {
          console.log('Passwords do not match.');
        }
    });

    res.render('index', {
        title: 'Moodly',
        user: user,
    });
});


module.exports = router;