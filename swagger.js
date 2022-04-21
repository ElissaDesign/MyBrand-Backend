import swaggerJsDoc from "swagger-jsdoc";
import express from "express";
import swaggerUi from "swagger-ui-express";

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "Posts API",
      description: "Posts API Information",
      contact: {
        name: "Amazing Developer"
      },
      servers: ["http://localhost:1000"]
    }
  },
  // ['.routes/*.js']
  apis: ["./src/routes/messageRoute.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);


export default swaggerDocs;