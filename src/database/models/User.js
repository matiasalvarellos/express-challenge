module.exports = ( sequelize, dataTypes )=>{
    let cols = {
        id:{ 
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        email:{
            type: dataTypes.STRING,
            allowNull: false
        },
        password:{
            type: dataTypes.STRING
        }
    }
    
    return sequelize.define( "User", cols );
}