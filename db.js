const Sequelize = require('sequelize');
const sequelize = new Sequelize('foodie-friendzy', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres'
})

sequelize.authenticate().then(
    function() {
        console.log('Connected to foodie-friendzy postgres database');
    },
    function(err) {
        console.log(err);
    }
);

module.exports = sequelize;