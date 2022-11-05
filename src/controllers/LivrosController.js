import livros from "../models/Livro.js"

class LivrosController {
    static listarLivros = (req, res) => {
        livros.find((err, livros) => {
            res.status(200).json(livros); 
        })
    }

    static listarLivroId = (req, res) => {
        const id = req.params.id
        livros.findById(id, (error, livro) => {
            if (error) {
                res.status(400).send({message: `${error} - não foi possível buscar o livro.`})
            } else {
                res.status(200).send(livro)
            }
    })
    }

    static cadastrarLivros = (req, res) => {
        const livro = new livros(req.body)
        livro.save((error) => {
            if (error) {
                res.status(500).send({message: `${error} - não foi possível criar seu livro.`})
            } else {
                res.status(201).send(livro.toJSON())
            }
        })
    }

    static atualizarLivro = (req, res) => {
        const id = req.params.id
        livros.findByIdAndUpdate(id, {$set: req.body}, (error) => {
            if (error) {
                res.status(500).send({message: `${error} - não foi atualizar o livro.`})
            } else {
                res.status(200).send({message: `o livros foi atualizado com sucesso.`})
            }
        })
    }

    static deletarLivro = (req, res) => {
        const id = req.params.id
        livros.findByIdAndDelete(id, (error) => {
            if (error) {
                res.status(500).send({message: `${error} - não foi possível deletar o livro.`})
            } else {
                res.status(200).send({message: `o livros foi deletado com sucesso.`})
            }
        })
    }
}

export default LivrosController