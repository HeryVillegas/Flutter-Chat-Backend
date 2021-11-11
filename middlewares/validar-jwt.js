const jwt = require('jsonwebtoken');

const validarJWT = (req, res, next) => {

    // leer token
    const token = req.header('x-token');

    if (!token) {
        return res.status(401).json({
            ok:false,
            msg: 'NO Hay token en la Peticion'
        });
    }

    try {

        const { id } = jwt.verify(token, process.env.JWT_KEY);
        req.id = id;


        next();
    } catch (error) {
        return res.status(401).json({
            ok:false,
            msg: 'Token No Valido'
        });
    }


}

module.exports = { validarJWT }