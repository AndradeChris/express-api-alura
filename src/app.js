import express from "express";
import db from "./config/dbConfig.js";
import routes from "./routes/index.js";

// Mongo Atlas start
db.on("error", console.log.bind(console, "Erro de conexão!"))
db.once("open", () => {
    console.log("conexão com o banco feita com sucesso.")
})

const app = express();
routes(app)

export default app;