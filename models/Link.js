const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
    fullLink: {type: String, required: true},
    shortLink: {type: String, required: true, unique: true},
    id: {type: String, required: true, unique: true},
    date: {type: Date, default: Date.now},
    redirects: { type: Number, default: 0},
    creator: { type: Types.ObjectId, ref: "User" }
})

module.exports = model('Link', schema)