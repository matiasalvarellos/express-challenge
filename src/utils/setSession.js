const {Session} = require("../database/models");

module.exports = async (req, config)=>{

    let row =  await Session.findOne({
        where:{
            state:1
        }
    })
    let views = JSON.parse(row.session).views;
    
    req.session = {};
    req.session.cookie = config;
    req.session.views = Number(views);

    async function save(reqData){
        
        await Session.update({
            session: reqData
        },{
            where: {
                state:1
            }
        })
    }
    req.session.save = save;

}