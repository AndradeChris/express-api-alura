import mongoose from "mongoose";

const LivroSchema = new mongoose.Schema({
    id: {type: String},
    titulo: {type: String, required: true},
    autor: {type: String, required: true},
    editora: {type: String, required: true},
    paginas: {type: Number}
})

const livros = mongoose.model('livros', LivroSchema);

export default livros;