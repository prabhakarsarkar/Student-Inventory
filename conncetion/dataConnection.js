const knex = require("knex")({
    client:process.env.client,
    connection:{
        host:process.env.host,
        user:process.env.user,
        password:process.env.password,
        database:process.env.database
    }
})
module.exports = knex;