const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const route = require("./route/route");

dotenv.config({ path: "config.env" });

const PORT = 8000 || process.env.PORT;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// Headers Allowance for All Cross Origin
app.use(cors({
  allowedHeaders:true,
}));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded());

app.use("/", route);

app.listen(PORT, () => {
  console.log(`listening to ${PORT}`);
});
