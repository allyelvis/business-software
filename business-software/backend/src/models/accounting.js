module.exports = (sequelize, DataTypes) => {
    const Accounting = sequelize.define('Accounting', {
        entryType: { type: DataTypes.STRING, allowNull: false },
        amount: { type: DataTypes.FLOAT, allowNull: false },
        description: { type: DataTypes.STRING },
    });
    return Accounting;
};
