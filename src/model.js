const Sequlize = require("sequelize");
const seq = require("./seq");

//创建User模型,table为users
const User = seq.define("user", {
  //id会自动创建并设为自增
  userName: {
    type: Sequlize.STRING, //varchar(255)
    allowNull: false,
  },
  password: {
    type: Sequlize.STRING, //varchar(255)
    allowNull: false,
  },
  nickName: {
    type: Sequlize.STRING,
    commit: "昵称为不为空无所谓",
  },
});

//创建Blog模型
const Blog = seq.define("blog", {
  title: {
    type: Sequlize.STRING,
    allowNull: false,
  },
  content: {
    type: Sequlize.TEXT,
    allowNull: false,
  },
  userId: {
    type: Sequlize.INTEGER,
    allowNull: false,
  },
});

//外键关联
//belongsTo = 多对一  Blog.userID -> User.id
//默认情况下关联的就是ID
Blog.belongsTo(User, {
  foreignKey: "userId",
});
//或者这样写
User.hasMany(Blog, {
  foreignKey: "userId",
});

module.exports = {
  User,
  Blog,
};
