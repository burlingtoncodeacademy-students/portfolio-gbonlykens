// establishing express framework
const express = require('express')
const path = require("path");
const app = express();

// basic server port setup
const port = process.env.PORT || 8000;
const staticDir = process.env.DEV ? "./client/public" : "./client/build"

// middleware
app.use(express.static(staticDir));
app.use(express.urlencoded({extended: true}));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(staticDir))
});

// establishes database listening on port 8000
app.listen(port, () => [
    console.log(`Hearing you on port: ${port}`)
]);