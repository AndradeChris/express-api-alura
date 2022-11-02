import express from "express";
import LivrosController from "../controllers/LivrosController.js";

const router = express.Router()

router
    .get("/livros", LivrosController.listarLivros)

export default router