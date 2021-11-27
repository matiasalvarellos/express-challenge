const {Session} = require("../database/models");
const {v4: uuidv4} = require("uuid");
const cookieSignature = require("cookie-signature");
const uid = require("uid-safe");
const setSession = require("../utils/setSession");



module.exports = ( config = {ttl:3600, cookieName:"sessionId", secret:"mysecret"} )=>{

    config.ttl = typeof config.ttl === "number" ? config.ttl  : 3600;
    config.cookieName = typeof config.cookieName === "string" ? config.cookieName : "sessionId";
    config.secret = typeof config.secret === "string" ? config.secret  : "mysecret";
    
    let middle = async (req, res, next) => {
        let cookieValue = cookieSignature.sign(config.cookieName , config.secret);

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
                session: { config , id:cookieValue, views:0},
                state: 1
            })
        }

        res.cookie(config.cookieName, cookieValue, {maxAge: config.ttl});

        await setSession(req ,config);
        
        next()
    }

    return middle;
}