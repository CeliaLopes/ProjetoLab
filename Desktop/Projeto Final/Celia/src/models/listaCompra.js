const lista = ( sequelize, DataTypes) => {
    const Lista = sequelize.define('Lista', {
        // id_usuario: {
        //     model: 'usuario',
        //     key: 'id'
        // },
        // id_produto: {
        //     model: 'produtos',
        //     key: 'id'
        // },
        // id_lojas: {
        //     model: 'lojas',
        //     key: 'id'
        // },
        numero_pedido: {
            type: DataTypes.NUMERIC(10), //*
        },
        quantidade: {
            type: DataTypes.NUMERIC(10), //*
        },
        data_pedido: {
            type: DataTypes.DATE, //*
        },
        data_entrega: {
            type: DataTypes.DATE, //*
        },
        data_finalizacao: {
            type: DataTypes.DATE, //*
        },

    }, {
        tableName: 'lista'
    })
    return Lista
}

module.exports = lista;