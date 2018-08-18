module.exports = function (sequelize, DataTypes) {
    var Item = sequelize.define('Item', {
        text: { type: DataTypes.STRING, defaultValue: "text" },
        category: { type: DataTypes.STRING, defaultValue: "text" }
    });

    return Item;
};
