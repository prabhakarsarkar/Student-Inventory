const knex = require("../conncetion/dataConnection");
knex.schema.hasTable("students").then((exist)=>{
    if(!exist){
        return knex.schema.createTable('students',(column)=>{
            column.increments("id").primary();
            column.string("name",200);
            column.string("D/O/B")
            column.string("qualification",200)
            column.string("phon")
            column.string("gmail",200)
            column.string("state",200)
            column.string("city",200)
        })
        
    }
    knex.schema.hasTable("singup").then((exists)=>{
        if(!exists){
            return knex.schema.createTable("singup",(column)=>{
                column.increments("id").primary();
                column.string("name",100);
                column.string("password",100)
                column.string("gmail",100)
                
            })
        }
    })
})
module.exports = knex;