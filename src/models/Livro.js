import mongoose from "mongoose";

const LivroSchema = new mongoose.Schema({
    id: {type: String},
    titulo: {type: String, require: true},
    autor: {type: String, require: true},
    editora: {type: String, require: true},
    paginas: {type: Number}
})

const livros = mongoose.model('livros', LivroSchema);

export default livros;