import express from "express";

const app = express();
app.use(express.json());

const livros = [
    {id: 1, titulo: "Senhor dos Aneis"},
    {id: 2, titulo: "O Hobbit"}
];

const buscaId = (id) => {
    const index = livros.findIndex(livro => livro.id == id)
    return index
}

app.get("/",(req, res) => {
    res.status(200);
    res.send('Pag de inicio');
});

app.get("/livros", (req, res) => {
    res.status(200);
    res.json(livros);
});

app.get("/livros/:id", (req, res) => {
    const index = buscaId(req.params.id);
    res.status(200);
    res.json(livros[index])
})

app.post("/livros", (req, res) => {
    livros.push((req.body));
    res.status(201);
    res.send("Livros cadastrado.");
})

app.put("/livros/:id", (req, res) => {
    const index = buscaId(req.params.id);
    livros[index].titulo = req.body;
    res.status(200);
    res.json(livros);
})

export default app;