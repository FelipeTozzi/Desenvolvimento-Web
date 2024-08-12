const {Model, DataTypes} = require('sequelize');

class Endereco extends Model{}

Endereco.init(
    
    {
        id:{
            type: DataTypes.INTEGER,
            
        },
        cep:{
            type:DataTypes.STRING,

        },
        logradouro:{
            type:DataTypes.STRING,

        },
        numero:{
            type:DataTypes.INTEGER,

        },
        complemento:{
            type:DataTypes.STRING,
            allownull: true,

        },
        bairo:{
            type:DataTypes.STRING,

        },
        cidade:{
            type:DataTypes.STRING,

        },
        estado:{
            type:DataTypes.STRING,

        },
        IBGE:{
            type:DataTypes.STRING,

        },
    },    
        {
            // Other model options go here
            sequelize, // We need to pass the connection instance
            modelName: 'User', // We need to choose the model name
          },
        );
        
        // the defined model is the class itself
        console.log(User === sequelize.models.User); // true