const bcrypt = require("bcrypt-nodejs");
module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },

    });

    // User.associate = function (models) {
    //     User.hasMany(models.Item, {
    //         onDelete: "cascade"
    //     });
    // };

    User.beforeCreate((user, options) => {
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);
    });
    User.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };
    // create all the defined tables in the specified database.
    sequelize.sync()
        .then(() => console.log('users table has been successfully created, if one doesn\'t exist'))
        .catch(error => console.log('This error occured', error));
    // In this case, before a User is created, we will automatically hash their password

    return User;
};