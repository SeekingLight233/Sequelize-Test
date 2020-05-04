const { Blog, User } = require("./model");

!(async function () {
  //删除一条博客
  const deleteBlog = await Blog.destroy({
    where: {
      id: 3,
    },
  });

  //删除一个用户

  const deleteUser = await User.destroy({
    where: {
      id: 1,
    },
  });
  console.log(deleteUser);
})();
