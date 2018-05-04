require("./config/config");
const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.get("/", (req, res) => {
    res.json("h");
})

app.get("/usuario", (req, res) => {
    res.send("Probando")
})
app.post("/usuario", (req, res) => {
    let body = req.body;
    if (body.nombre === undefined) {
        res.status(400).send({
            ok: false,
            mensaje: "El nombre es necesario"
        });
    } else {
        res.send({ body });
    }

})

app.put("/usuario/:id", (req, res) => {
    let id = req.params.id;
    res.send({
        id
    });
});

app.delete("/usuario", (req, res) => {
    res.send("Borrar")
})

app.listen(port, () => {
    console.log(`${port}`);
});