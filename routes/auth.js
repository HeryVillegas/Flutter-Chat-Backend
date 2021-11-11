const { Router } = require('express');
const { check } = require('express-validator');

const { crearUsuario, login, renewToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const router = Router();


router.post('/new', [
    check('nombre', 'El Nombre es Obligatorio').not().isEmpty(),
    check('password', 'El Password es Obligatorio').not().isEmpty(),
    check('email', 'El Email es Obligatorio').isEmail(),
    validarCampos
],  crearUsuario) ;


router.post('/', [
    check('nombre', 'El Nombre es Obligatorio').not().isEmpty(),
    check('password', 'El Password es Obligatorio').not().isEmpty(),
], login );

router.get('/renew', validarJWT, renewToken );



module.exports = router ;