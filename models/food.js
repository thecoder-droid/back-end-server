module.exports = (sequelize, DataTypes) => {
    const Food = sequelize.define('food', {
        name: {
            type: DataTypes.STRING(2000),
            // allowNull: false
        },
        image: {
            type: DataTypes.STRING(2000),
            // allowNull: false
        },
        ingredients: {
            type: DataTypes.STRING(2000),
            // allowNull: false
        },
        description: {
            type: DataTypes.STRING(2000),
            // allowNull: false
        },
        recipe: {
            type: DataTypes.STRING(2000),
            // allowNull: false
        },
        owner: {
            type: DataTypes.INTEGER
        }
    })
    return Food;
}