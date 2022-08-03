import express from 'express';
const connectDB=require("./db/database");
connectDB();
const app = express()
const PORT = 5000
app.listen(PORT, () => console.log(`Server Connected to port ${PORT}`))