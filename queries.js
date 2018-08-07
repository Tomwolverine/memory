const database = require("./database-connection");

module.exports = {
    list(){
        return database('reso-server').select();
    },
    read(id){
        return database('reso-server').select().where('id', id);
    },
    create(resolution){
        return database('reso-server').insert(resolution).returning('*')
            .then(returnedArray => returnedArray[0]);
    },
    update(id, resolution){
        return database('reso-server').update(resolution).where('id', id)
            .returning('*').then(returnedArray => returnedArray[0]);
    },
    delete(id){
        return database('reso-server').delete().where('id', id);
    }
};
