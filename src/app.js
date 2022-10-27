import express from "express";

const app = express();

const livros = [
    {id: 1, "titulo": "Senhor dos Aneis"},
    {id: 2, "titulo": "O Hobbit"}
];

app.get("/",(req, res) => {
    res.status(200);
    res.send('Pag de inicio');
});

app.get("/livros", (req, res) => {
    res.status(200);
    res.json(livros);
});

export default app;