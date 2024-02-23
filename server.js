const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const db = require("./db");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const championController = require("./controllers/championController");
const itemController = require("./controllers/itemController");
const regionController = require("./controllers/regionController");

const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(cors());

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

app.get("/", (req, res) => {
  res.send("Welcome to the Rift!");
});

app.get("/champions", championController.getAllChampions);
app.get("/champions/:id", championController.getChampionById);
app.post("/champions", championController.createChampion);
app.patch("/champions/:id", championController.updateChampion);
app.delete("/champions/:id", championController.deleteChampion);

app.get("/items", itemController.getAllItems);
app.get("/items/:id", itemController.getItemById);
app.post("/items", itemController.createItem);
app.put("/items/:id", itemController.updateItem);
app.delete("/items/:id", itemController.deleteItem);

app.get("/regions", regionController.getAllRegions);
app.get("/regions/:id", regionController.getRegionById);
app.post("/regions", regionController.createRegion);
app.put("/regions/:id", regionController.updateRegion);
app.delete("/regions/:id", regionController.deleteRegion);
