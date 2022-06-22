const express = require("express");
const router = require("./routers/routers.js").router;
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;


app.use("/", router);

app.listen(PORT, () => {
    console.log(`Server running at port no : ${PORT}...`);
});
