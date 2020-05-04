//select ...
const { Blog, User } = require("./model");

!(async function () {
  //查询一条记录
  const zhangsan = await User.findOne({
    where: {
      userName: "zhangsan",
    },
  });
  //   console.log(zhangsan.dataValues);
  //查询特定的列
  const zhangsanName = await User.findOne({
    attributes: ["userName", "nickName"],
    where: {
      userName: "zhangsan",
    },
  });
  //   console.log(zhangsanName.dataValues);

  //查询一个列表
  const zhangsanList = await Blog.findAll({
    where: {
      userId: 2,
    },
    order: [["id", "desc"]],
  });
  //   console.log(zhangsanList.map((blog) => blog.dataValues));

  //分页
  const blogpageList = await Blog.findAll({
    limit: 2,
    offset: 2,
    order: [["id", "desc"]],
  });
//   console.log(blogpageList.map((blog) => blog.dataValues));

  //查询总数和列表
  const BlogListAndCount = await Blog.findAndCountAll({
      limit:2,
      offset:0,
      order: [["id", "desc"]],
  })

//   console.log("BlogListAndCount",
//   BlogListAndCount.count,
//   BlogListAndCount.rows.map(blog=>blog.dataValues)
//   );

//连表查询1
const blogListWithUser = await Blog.findAndCountAll({
    order: [["id", "desc"]],
    include:[
        {
            model:User,
            attributes:['userName','nickName'], 
            where:{
                userName:'zhangsan'
            }
        }
    ]
})
console.log(blogListWithUser.rows.map(blog=>{
    const blogVal = blog.dataValues; 
    blogVal.user = blogVal.user.dataValues;
    return blogVal;
}));


})();
