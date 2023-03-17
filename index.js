require("dotenv").config({ path: ".env" });
const express = require("express");
const app = express();
const cors = require("cors");
const server = require("http").createServer(app);
const PORT = process.env.PORT;
const connectDb = require("./mongodb");

app.use(express.json());
app.use(
  cors({
    origin: "https://oyie-todolist.netlify.app/",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
// * connect to the database
connectDb();

// * routes
app.get("/", (_req, res) => {
  res.status(200).json({ message: "Routes alive" });
});
require("./routes")(app);

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
