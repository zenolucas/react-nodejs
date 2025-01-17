module.exports = (sequelize, DataTypes) => {

    const Posts = sequelize.define("Users", {
        username: {
                type: DataTypes.STRING,
                allowNull: false,
        },
        password: {
                type: DataTypes.STRING,
                allowNull: false,
        },
        usertype: {
                type: DataTypes.ENUM('teacher', 'student'),
                allowNull: false,
        },
    });

    return Posts;
}