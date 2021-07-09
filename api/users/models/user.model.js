import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
    name: String,
    age: Number,
    pets: [{
        name: String,
        color: {
            type: String,
            enum: ['black', 'white'],
            default: 'white'
        }
    }]
});

export default mongoose.model('User', User);
