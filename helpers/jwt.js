
const jwt = require('jsonwebtoken');

const generarJWT = ( id ) =>  {

    return new Promise((resolve, reject) => {

        const payload = { id };
        jwt.sign(payload, process.env.JWT_KEY, {
            expiresIn: '24h'
        }, ( err, token ) => { 
            if (err) {
                // marco Error
                reject('No se pudo generar el JWT');
            } else {
                // Regresar el Token
                resolve(token);
            }
        });
    });
}

module.exports = { generarJWT };