const database = require("./database-connection");

module.exports = {
    list(){
        return database('resolution').select();
    },
    read(id){
        return database('resolution').select().where('id', id);
    },
    create(resolution){
        return database('resolution').insert(resolution).returning('*')
            .then(returnedArray => returnedArray[0]);
    },
    update(id, resolution){
        return database('resolution').update(resolution).where('id', id)
            .returning('*').then(returnedArray => returnedArray[0]);
    },
    delete(id){
        return database('resolution').delete().where('id', id);
    }
};
