const express = require('express');
const router = express.Router();

const restricted = require('../middleware/restricted-middleware.js');

router.get('/', restricted, (req, res) => {
    res.send('TESTING HEROKU');
})


router.get('/:id', restricted, (req, res) => {

})



module.exports = router;