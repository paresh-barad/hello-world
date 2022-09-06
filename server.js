const express = require("express");
const routes = require("./routes");
const port = 8000;
const app = express();
app.use(express.json());
app.use("/api", routes);

app.listen(port, () => {
    console.log(`Server has started! ${port}`);
});

module.exports = app;