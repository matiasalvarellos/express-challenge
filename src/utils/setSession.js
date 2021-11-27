const {Session} = require("../database/models");

module.exports = async (idCookie)=>{

    let session = await Session.findOne({
        where:{
            session: { id: idCookie }
        }
    })

    req.session = {};

    function save(key, value){
        req.session[key] = value;
    }

    req.session.cookie = session.session;
    req.session.save = save



}