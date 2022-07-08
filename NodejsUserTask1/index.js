const express = require("express");
const router = require("./routers/routers.js").router;
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;


app.use("/", router);

app.listen(PORT, () => {
    console.log(`Server running at port no : ${PORT}...`);
});

app.use((err, req, res, next) => {
    console.log("Error details", err);
    res.status(err.status || 500)
    res.json({
        message: err.message || 'Internal Error',
        error: err.error
    })
});