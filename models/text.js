module.exports = function(sequelize, DataTypes) {
  var Text = sequelize.define("Text", {
    text: {
        type: DataTypes.TEXT,
        // This field cannot be null
        allowNull: false,
        // Validates length of input to make sure it's more than 0
        validate: {
          len: [1]
        }
    }
  })
  return Text;
};
