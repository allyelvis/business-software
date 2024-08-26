module.exports = (sequelize, DataTypes) => {
    const Invoice = sequelize.define('Invoice', {
        orderId: { type: DataTypes.INTEGER, allowNull: false },
        totalAmount: { type: DataTypes.FLOAT, allowNull: false },
        invoiceNumber: { type: DataTypes.STRING, unique: true, allowNull: false },
    });
    return Invoice;
};
