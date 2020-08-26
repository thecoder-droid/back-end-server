require("dotenv").config();
let express = require("express");
let app = express();

let sequelize = require("./db");

let food = require("./controllers/foodiecontroller.js");
let user = require("./controllers/usercontroller.js");

sequelize.sync();
// sequelize.sync({force: true});
app.use(require("./middleware/headers"));

app.use(express.json());
app.use("/api", user);

app.use("/api/food", food);

app.listen(process.env.PORT, () => console.log(`server is listening on port ${process.env.PORT}`));