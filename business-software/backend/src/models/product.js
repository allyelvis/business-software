module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        name: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.STRING },
        price: { type: DataTypes.FLOAT, allowNull: false },
        stock: { type: DataTypes.INTEGER, defaultValue: 0 },
    });
    return Product;
};
