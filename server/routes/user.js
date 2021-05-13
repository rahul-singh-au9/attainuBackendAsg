const express = require('express');

const router = express.Router();
const userController = require('../controller/user');

router.get('/', userController.getUserList);
router.post('/addUser', userController.addUser);
router.put('/editUser', userController.editUser);
router.put('/deActivateUser/:_id', userController.deActivateUser);
router.put('/activateUser/:_id', userController.activateUser);
router.delete('/deleteUser/:_id', userController.deleteUser);

module.exports = router;
