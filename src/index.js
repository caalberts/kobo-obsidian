const database = require('./database');
const {Op} = require("sequelize");
const Bookmark = require('./bookmark')(database);
const Content = require('./content')(database);

Content.hasMany(Bookmark, {foreignKey: {name: 'bookID'}});
Bookmark.belongsTo(Content, {foreignKey: {name: 'bookID'}})

const main = async () => {
    try {
        const bookmarksWithBooks = await Bookmark.findAll({include: Content, where: {text: {[Op.not]: null}}})

        bookmarksWithBooks.forEach(bookmark => {
            console.log("-----------------------------")
            console.log(`Book title: ${bookmark.content.title}`)
            console.log(`Text:\n${bookmark.text}`)
            console.log(`Note:\n${bookmark.annotation == null ? '' : bookmark.annotation}`)
        })
    } catch (e) {
        console.error(e)
    }
};

main().catch(console.error);
