require("./db/conn");
const express = require("express");
const cors = require("cors");
const feedbackRoutes = require("./routes/feedbacks");
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/feedbacks", feedbackRoutes);

app.listen(3000, () => {
  console.log("server running on port 3000dfdfdf");
});
