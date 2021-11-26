var express = require('express');
var router = express.Router();
const User = require('../model/User');
const bcrypt = require('bcryptjs');
const userController = require('../controllers/userController');

//회원가입
router.post('/', userController.signUp);
	
//로그인
router.post('/login', userController.login);

//유저들조회
router.get('/', userController.users);

//유저조회
router.get('/:id', userController.user);

//유저 progress 플러스 수정
router.put('/plus', userController.plus);

//유저 progress 마이너스 수정
router.put('/minus', userController.minus);

//로그아웃
router.delete('/logout', userController.logout);
	
module.exports = router;
