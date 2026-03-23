import express from "express"
import cors from "cors";
import dotenv from "dotenv"
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 5001

connectDB();


//middleware
app.use(express.json()) // ca parse les JSON body req.body

app.use(cors({
    origin : "http://localhost:5173"
}));
app.use("/api/notes", notesRoutes);


app.listen(PORT, ()=>{
    console.log("Server started on PORT :" + PORT);
});
