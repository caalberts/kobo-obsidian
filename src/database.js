const {Sequelize} = require("sequelize");

const storage = process.env.KOBO_READER_SQLITE || './tmp/KoboReader.sqlite';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: storage
});

module.exports = sequelize;