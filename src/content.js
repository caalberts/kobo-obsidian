const {Model, DataTypes} = require("sequelize");

class Content extends Model {}

function ContentFactory(database) {
    return Content.init({
        id: {
            type: DataTypes.TEXT,
            primaryKey: true,
            field: 'ContentID'
        },
        type: {
            type: DataTypes.TEXT,
            field: 'ContentType'
        },
        title: {
            type: DataTypes.TEXT,
            field: 'Title'
        },
    }, {
        modelName: 'content',
        tableName: 'content',
        timestamps: false,
        sequelize: database
    });
}

module.exports = ContentFactory;