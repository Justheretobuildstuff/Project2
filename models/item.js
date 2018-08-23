module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define("Item", {
    text: {
        type: DataTypes.TEXT,
        // This field cannot be null
        allowNull: false,
        // Validates length of input to make sure it's more than 0
        validate: {
          len: [1]
        }
    },
    score: { 
        type: DataTypes.FLOAT
    }
  })
  return Item;
};
