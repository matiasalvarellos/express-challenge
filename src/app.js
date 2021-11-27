const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const cron = require("node-cron");

const session = require("./middlewares/session");
const job = require("./utils/job");
const mainRouter = require("./routes/main");

const publicPath = path.resolve(__dirname, "../public");
const app = express();

app.use(cookieParser());
app.use(express.static(publicPath));
app.use(express.urlencoded({ extended: false }));
app.use(session({
    ttl:30000,
    cookieName: "milanesa",
    secret:"secreto"
}));

cron.schedule('*/10 * * * * *', function(){
    job()
})

app.use("/", mainRouter);

app.listen(3000, ()=>{
    console.log("Server running in port 3000")
})