const {Model, DataTypes} = require("sequelize");

class Bookmark extends Model {}

function BookmarkFactory(database) {
    return Bookmark.init({
        id: {
            type: DataTypes.TEXT,
            primaryKey: true,
            field: 'BookmarkID'
        },
        text: {
            type: DataTypes.TEXT,
            field: 'Text'
        },
        annotation: {
            type: DataTypes.TEXT,
            field: 'Annotation'
        },
        type: {
            type: DataTypes.TEXT,
            field: 'Type'
        },
        bookID: {
            type: DataTypes.TEXT,
            field: 'VolumeID'
        }
    }, {
        modelName: 'bookmark',
        tableName: 'Bookmark',
        timestamps: false,
        sequelize: database
    });
}

module.exports = BookmarkFactory;