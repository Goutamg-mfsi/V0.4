const express = require('express');
const router = express.Router();

const userController = require('../controllers/users');

router.get('/',(req,res)=> {
    userController.index(req, res);
});

module.exports = router;