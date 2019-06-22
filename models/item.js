module.exports = function (sequelize, DataTypes) {
  var Item = sequelize.define("Item", {
    item_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    item_description: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    day_cost: {
      type: DataTypes.INTEGER,
      defaultValue: '0',
      allowNull: false,
    },
    posted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    images: DataTypes.STRING,
    postedBy: DataTypes.TEXT
  });
  // Item.associate = function (models) {
  //   Item.belongsTo(models.User, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  return Item;
};