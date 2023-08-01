const express = require("express");
const cors = require("cors");

const { dbConnect } = require("./database/config");

const productRouter = require("./routes/productRoutes");
const userRouter = require("./routes/userRoutes");
const appRouter = require("./routes/appRoutes");


// Configuración del servidor Express
const app = express();

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

//authentication route
app.use("/api/v1/users", userRouter);

// Rutas protegidas que requieren autenticación
app.use("/api/v1/products", productRouter);
// Rutas protegidas que requieren autenticación
app.use("/api/v1/app", appRouter);

// Middleware de error para manejar accesos no autorizados
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ message: "Acceso no autorizado" });
  } else {
    next(err);
  }
});

// Conexión a la base de datos
dbConnect();

// Puerto de escucha del servidor// Listen on `port` and 0.0.0.0
const port = process.env.PORT || 8787;
app.listen(port, "0.0.0.0", () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
