const { Session } = require("../database/models"); 

module.exports = async function job(){
    let sessions = await Session.findAll({
        where:{
            state: 0
        }
    })
    if(sessions.length > 0){
        await Session.destroy({
            where:{
                state: 0
            }
        })
    }
}