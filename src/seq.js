const Sequelize = require("sequelize");

const conf = {
  host: "39.107.97.170",
  dialect: "mysql",
};
//线上环境使用连接池
// conf.pool = {
//   max:5,
//   min:0,
//   idle:10000 //如果一个连接池10s没被用，就将其释放
// }
const seq = new Sequelize("koa2_weibo", "root", "PUK411381199", conf);

module.exports = seq;

//Test connection
// seq
//   .authenticate()
//   .then(() => {
//     console.log("ok");
//   })
//   .catch(() => {
//     console.log("error");
//   });
