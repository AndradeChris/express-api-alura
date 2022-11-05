import express from "express";
import LivrosController from "../controllers/LivrosController.js";

const router = express.Router()

router
    .get("/livros", LivrosController.listarLivros)
    .get("/livros/:id", LivrosController.listarLivroId)
    .post("/livros", LivrosController.cadastrarLivros)
    .put("/livros/:id", LivrosController.atualizarLivro)
    .delete("/livros/:id", LivrosController.deletarLivro)
    

export default router