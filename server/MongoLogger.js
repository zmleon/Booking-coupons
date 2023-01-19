const Error = require("./mongo/repositories/error");
const Event = require('./mongo/repositories/event');
const Database = require('./mongo/repositories/dbrepository');

class MongoLogger {
    async LogError(err) {
        try {
            let error = new Error({
                date: new Date(),
                text: err.message,
                code: err.status,
                route: err.route,
            });
            await error.save();
        } catch(err) {
            console.log(err);
        }
    }

    async LogHttpEvent(req, res, next) {
        try {
            let event = new Event({
                date: new Date(),
                route: req.originalUrl,
                userId: req.user ? req.user.id : 0,
                method: req.method,
                body: req.body || null,
                params: req.params || null,
                query: req.query || null
            });
            await event.save();
            next();
        } catch(err) {
            console.log(err);
        }
    }

    async LogDatabase(command) {
        try {
            let database = new Database({
                date: new Date(),
                command: command
            });
            await database.save();
        } catch(err) {
            console.log(err);
        }
    }
}

module.exports = new MongoLogger();