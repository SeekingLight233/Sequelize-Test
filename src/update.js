const { Blog, User } = require("./model");

!(async function () {
  const update = await User.update(
    {
      nickName: "zhangsan",
    },
    {
      where: {
        userName: "zhangsan",
      },
    }
  );

  console.log(update[0] > 0);
})();
