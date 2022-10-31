import mongoose from "mongoose";

const project = "node-express"
const password = "express123";

mongoose.connect(`mongodb+srv://chrisandrade:${password}@node-express.arkyw5p.mongodb.net/${project}`)
let db = mongoose.connection;

export default db;