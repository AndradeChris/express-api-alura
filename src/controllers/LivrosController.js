import livros from "../models/Livro.js"

class LivrosController {
    static listarLivros = (req, res) => {
        livros.find((err, livros) => {
            res.status(200).json(livros); 
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
}

export default LivrosController