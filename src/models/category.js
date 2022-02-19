const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    parentId: {//for the parent category like mobile for differnet mobile phones
        type: String
    }
},
    { timestamps: true }

);

module.exports=mongoose.model('category',categorySchema);