'use strict'

const fs = require('fs');
const path = require('path');
const basename = path.basename(module.filename);

class Loader {

    static loadAll(app) {
        Loader.loadRoutes(app);
    }

    static loadRoutes(app) {
        let baseDir = (__dirname + '/routes');
        fs
            .readdirSync(path.join(baseDir))
            .filter(function (file) {
                return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
            })
            .forEach(function (file) {
                console.log(`Carregando rota: ${file}`)
                let route = require((path.join(baseDir, file)));
                new route(app);
            });
    }



}

module.exports = Loader;