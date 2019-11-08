'use strict'
const AUTH_SERVICE  = require('../services/auth-service');
module.exports = class AuthController {
    static async authenticate(req, res) {
        try {
            let response = await AUTH_SERVICE.authenticate(req.user);
            res.send(response).status(200);
        } catch (error) {
            const message = {message:'Falha ao logar!'}
            res.status(500).send(message);
        }
    }
}