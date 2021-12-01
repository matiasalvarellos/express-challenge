const {Session} = require("../database/models");

module.exports = async (req, config)=>{

    let row =  await Session.findOne({
        where:{
            state:1
        }
    })
    
    let data = JSON.parse(row.session)
    
    req.session = data;

    async function save(){
        
        await Session.update({
            session: req.session
        },{
            where: {
                state:1
            }
        })
    }
    req.session.save = save;

}