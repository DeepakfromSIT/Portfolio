import express from "express";
import routes from "./routes/routes.js";
const app = express();
const port = 3000;

// ejs setup

app.set("view engine", "ejs");
app.set("views", "./views"); // Jo file rakhi he views folder ke ander rakhi he.

//Create routes

app.use("/", routes);

app.listen(port, () => {
  console.log(`Server is running on port${port}`);
});
