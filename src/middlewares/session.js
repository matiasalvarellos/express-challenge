const {Session} = require("../database/models");
const {v4: uuidv4} = require("uuid");
const cookieSignature = require("cookie-signature");
const uid = require("uid-safe");


module.exports = ( config = {ttl:3600, cookieName:"sessionId", secret:"mysecret"} )=>{

    config.ttl = typeof config.ttl === "number" ? config.ttl  : 3600;
    config.cookieName = typeof config.cookieName === "string" ? config.cookieName : "sessionId";
    config.secret = typeof config.secret === "string" ? config.secret  : "mysecret";
    
    let middle = async (req, res, next) => {
        
        if( !req.cookies[config.cookieName] ){
            await Session.update({
                state: 0
            },{
                where: {
                    state: 1
                }
            })
            await Session.create({
                id: uid.sync(18) ,
                session: { config },
                state: 1
            })
        }

        let cookieValue = cookieSignature.sign(config.cookieName , config.secret);
        res.cookie(config.cookieName, cookieValue, {maxAge: config.ttl});


        req.session = {};
        req.session.cookie = config;
        req.session.

        next()
    }

    return middle;
}