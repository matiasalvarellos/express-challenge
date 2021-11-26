const path = require("path");

module.exports = {
    login: (req, res)=>{
       req.session.config = "algo";
        return res.sendFile(path.resolve(__dirname, "../views/login.html"))
    }
}