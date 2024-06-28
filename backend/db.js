const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://sauravuyadav003:Maa%40papa123@cluster0.twkxcxi.mongodb.net/todos");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}