module.exports = function (sequelize, DataTypes) {
  var Item = sequelize.define("Item", {
    itemName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    itemDescription: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
     cost: {
      type: DataTypes.INTEGER,
      defaultValue: '0',
      allowNull: false,
    },
    posted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    slug: {
      type:DataTypes.STRING,
      allowNull: true
    },
    category: {
      type: DataTypes.STRING
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: true

    },
    images: DataTypes.STRING,
    
  });
  Item.associate = function (models) {
    Item.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Item;
};