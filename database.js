var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Todolist = new Schema({
    user_id: String,
    list_name: { type: String, unique: true },
    item_count: { type: Number, default: 0 },
    finished_item_count: { type: Number, default: 0 },
    nearest_deadline: Date,
    created: { type: Date, default: Date.now },
    items: [String]
});

var Todo = new Schema({
    user_id: String,
    item_name: { type: String, unique: true },
    deadline: { type: Date, min: Date.now },
    created: { type: Date, default: Date.now },
    finished: { type: Boolean, default: false }
});

mongoose.model('Todolist', Todolist);
mongoose.model('Todo', Todo);
mongoose.connect('mongodb://localhost/todolist', { useMongoClient: true });