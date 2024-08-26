const {Model, DataTypes} = require('sequelize');

class Endereco extends Model{}

        Endereco.init({
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        Cep:{
            type:DataTypes.STRING,
            allownull: false,
        },
        Logradouro:{
            type:DataTypes.STRING,
            allownull: false,
        },
        Numero:{
            type:DataTypes.INTEGER,
            allownull: false,
        },
        Complemento:{
            type:DataTypes.STRING,

        },
        Bairo:{
            type:DataTypes.STRING,
            allownull: false,
        },
        Cidade:{
            type:DataTypes.STRING,
            allownull: false,
        },
        Estado:{
            type:DataTypes.STRING,
            allownull: false,
        },
        MunicipioIBGE:{
            type:DataTypes.STRING,
            allownull: false,
        }, 
        },{
            sequelize,
            modelName: 'Endereco',
            tableName: 'enderecos',
            timestamps: true,
        });   
       
        module.exports - Endereco;

