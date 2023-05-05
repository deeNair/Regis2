const mongoose =require ("mongoose");
const Schema = mongoose.Schema;
const autoIncrement= require('mongoose-auto-increment');

const userSchema= new Schema({
    name:{ type:String, required: true },
    username: { type:String, required: true },
    email: { type:String, required: true },
    phone:{ type:String, required: true }
}, {
    timestamps: true
    })

    autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'Jobs');

const user= mongoose.model('user', userSchema);

module.exports =user;
