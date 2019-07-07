const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user.controller');

router.get('/getall', user_controller.users);

router.get('/:id', user_controller.user_details);

router.put('/:id/update', user_controller.user_update);

router.delete('/:id/delete', user_controller.user_delete);




module.exports = router;