const express = require('express')
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express()

const bodyParser = require("body-parser");

const usersRoutes = require("./routes/users.route");
const postsRoutes = require('./routes/posts.route');


app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).send({status: "success", message: "Welcome to post apis. Kubernates is fun!!"});
})

app.get("/error", (req, res) => {
  process.exit(1);
});

/** Swagger Initialization - START */
const swaggerOption = {
    swaggerDefinition: (swaggerJsdoc.Options = {
      info: {
        title: "my-posts",
        description: "API documentation",
        contact: {
          name: "Developer",
        },
        servers: ["http://localhost:3000/"],
      },
    }),
    apis: ["index.js", "./routes/*.js"],
  };
  
  const swaggerDocs = swaggerJsdoc(swaggerOption);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  /** Swagger Initialization - END */

app.use("/users", usersRoutes);
app.use("/posts", postsRoutes);

const port = 3000
app.listen(port, () => {
  console.log(`Server start on port ${port}`)
})
