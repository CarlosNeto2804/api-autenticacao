const EXPRESS = require('express');
const PASSPORT_CONFIG = require('../configurations/passport-config');
const PASSPORT = require('passport')
const CORS = require('cors');
const Server = require('./server')
const LOADER = require('./loader')
class App {

    static async init() {
        const app = new Server();
        app.use(CORS())
        app.use(PASSPORT.initialize());
        app.use(PASSPORT.session());
        app.use(EXPRESS.json());//substitui o body-parser
        app.use(EXPRESS.static('public'));  
        LOADER.loadAll(app)
        app.listen(global.config.port, () => {
            console.log(`Rodando na porta ${global.config.port} `);;
        });

        app.get('/', (req, res) => {
            res.json({
                project: "API_AUTENTICAÇÃO",
                version: "beta",
                author: "CalosNeto2804",
                rotas:['/google','/github']
            });
        })
    }
}

App.init();




