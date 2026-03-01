import dotenv from "dotenv"
dotenv.config();
import express from "express";
import cors from "cors";
import "./db.js";


import userRoutes from "./routes/user.routes.js";
import investmentRoutes from "./routes/investment.routes.js";
import authRoutes from "./routes/auth.routes.js";
import alertRoutes from "./routes/alert.routes.js";
import postRoutes from "./routes/post.routes.js";
import financeRoutes from "./routes/finance.routes.js";



const app = express();

// Middlewares globaux
app.use(cors());
app.use(express.json());

// Routes

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/alerts", alertRoutes);
app.use("/api/investments", investmentRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/finance", financeRoutes);


// Middleware de gestion d'erreur
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send("Something broke!");
// });

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

