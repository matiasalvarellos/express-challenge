const path = require("path");

module.exports = {
    login: (req, res)=>{
        return res.sendFile(path.resolve(__dirname, "../views/login.html"))
    }
}