import autores from "../models/Autor.js"

class AutoresController {
    static listarAutores = (req, res) => {
        autores.find((err, autores) => {
            res.status(200).json(autores); 
        })
    }

    static listarAutorId = (req, res) => {
        const id = req.params.id
        autores.findById(id, (error, autor) => {
            if (error) {
                res.status(400).send({message: `${error} - não foi possível buscar o Autor.`})
            } else {
                res.status(200).send(autor)
            }
    })
    }

    static cadastrarAutores = (req, res) => {
        const autor = new autores(req.body)
        autor.save((error) => {
            if (error) {
                res.status(500).send({message: `${error} - não foi possível criar seu Autor.`})
            } else {
                res.status(201).send(autor.toJSON())
            }
        })
    }

    static atualizarAutor = (req, res) => {
        const id = req.params.id
        autores.findByIdAndUpdate(id, {$set: req.body}, (error) => {
            if (error) {
                res.status(500).send({message: `${error} - não foi atualizar o autor.`})
            } else {
                res.status(200).send({message: `o autor foi atualizado com sucesso.`})
            }
        })
    }

    static deletarAutor = (req, res) => {
        const id = req.params.id
        autores.findByIdAndDelete(id, (error) => {
            if (error) {
                res.status(500).send({message: `${error} - não foi possível deletar o Autor.`})
            } else {
                res.status(200).send({message: `o Autor foi deletado com sucesso.`})
            }
        })
    }
}

export default AutoresController