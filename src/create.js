//insert ...
const { Blog, User } = require("./model");

!(async function () {
  //创建用户
  const zhangsan = await User.create({
    userName: "zhangsan",
    password: "zhangsan123",
    nickName: "法外狂徒",
  });
  const zhangsanId = zhangsan.dataValues.id;
  const lisi = await User.create({
    userName: "lisi",
    password: "lisi123",
    nickName: "李四",
  });
  const lisiID = lisi.dataValues.id;
  const blog1 = await Blog.create({
    title: "标题1",
    content: "内容1",
    userId: zhangsanId,
  });
  const blog2 = await Blog.create({
    title: "标题2",
    content: "内容2",
    userId: lisiID,
  });
  const blog3 = await Blog.create({
    title: "标题3",
    content: "内容3",
    userId: zhangsanId,
  });
  const blog4 = await Blog.create({
    title: "标题4",
    content: "内容4",
    userId: lisiID,
  });
  console.log(blog1.dataValues);
})();
