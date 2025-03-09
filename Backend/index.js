const express = require("express");
const app = express();
const port = 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

const mongodb = require("./db");
const userRoute = require("./routes/user.route");
const displayDataRoute = require("./routes/displaydata.route");
const orderRoute = require("./routes/order.route");

mongodb();

app.use("/user", userRoute);
app.use("/data", displayDataRoute);
app.use("/api/auth", orderRoute);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});