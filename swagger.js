const swagerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
require("dotenv").config();

const options = {
  apis: [
    "./src/routers/first-practice.routes.js",
    "./src/models/operations.js",
  ],
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Olimpiadas",
      version: "0.0.9",
      description: "API para olimpiadas",
    },
  },
};

const swaggerSpec = swagerJSDoc(options);

const swaggerDocs = (app, port) => {
  // ggenerar ruta donde se mostrara la documentacion
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get("/api/v1/docs.json", (req, res) => {
    res.setHeader({ "Content-Type": "aplication/json" });
    res.send(swaggerSpec);
  });
  console.log(
    `La documentacion esta disponible en ${process.env.URL}:${port}/api/v1/docs`
  );
};

module.exports = swaggerDocs;
