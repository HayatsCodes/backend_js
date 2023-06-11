const userList = require('../db/fake_data')

const resolvers = {
    Query: {
        users() {
            return userList;
        }
    }
}

module.exports = resolvers;