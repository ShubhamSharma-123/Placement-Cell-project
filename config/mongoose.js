const mongoose = require('mongoose');
async function main(){
    await mongoose.connect('mongodb+srv://ss8680919:ShWw7Mej1PfCsZVd@cluster0.sco9ldr.mongodb.net/?retryWrites=true&w=majority');
    console.log("connection Successfull !! ");
}
main().catch(error =>console.log("connection not successfull !!"));