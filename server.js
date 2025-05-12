const express = require('express');
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

try {
  app.use(express.json());
  app.use(cors());

  // Sample route
  app.get("/", (req, res) => {
    try {
      res.send("Server is running!");
    } catch (err) {
      console.error("Error in route :", err);
      res.status(500).send("Something went wrong!");
    }
  });
  app.post("/data", (req,res)=>{
    try {
        res.send("Created");
        res.status(200).send("All are ok!");
    } catch (error) {
        console.error("Error in route :", err);
        res.status(500).send("Something went wrong!");
    }
  })

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });

} catch (err) {
  console.error("Failed to start server:", err);
}