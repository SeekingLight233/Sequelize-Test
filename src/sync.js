const seq = require("./seq");

require("./model");
seq
  .authenticate()
  .then(() => {
    console.log("ok");
  })
  .catch(() => {
    console.log("error");
  });

seq.sync({ force: true }).then(() => {
  console.log("sync ok");
  process.exit();
});
