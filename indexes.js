let mongoose = require('mongoose')
const server = 'http://127.0.0.1:5500/';
const database ='shoppingCart'
class Database{
    constructor(){
        this._connect();
    }
    _connect(){
        mongoose.connect(`mongodb://${server}/${database}`)
        .then(()=>{
            console.log('Database connect success');
        })
        .catch((err)=> {
            console.log("Database connect fail: "+ err);
     })
    }
}
module.exports =  new Database;