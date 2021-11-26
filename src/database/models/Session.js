module.exports = ( sequelize, dataTypes ) =>{
    let cols = {
        id:{ 
            type: dataTypes.STRING,
            primaryKey: true,
            autoIncrement: true 
        },
        session:{
            type: dataTypes.JSON,
            allowNull: false
        },
        state:{
            type: dataTypes.BOOLEAN,
            allowNull: false
        }
        
    }
    
    return sequelize.define("Session", cols)
}