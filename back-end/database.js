const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('test-db', 'user', 'password', {
	dialect: 'sqlite',
	host: './dev.sqlite', // host: ':memory'
});
module.exports = sequelize;