
require("dotenv").config()
const db = require('./db')
const express = require("express") //libreria de express , servicio web
const cors = require("cors") //libreria de cors
const app = express()


app.use(cors())

const port = process.env.PORT || 3000 // se define el puerto pero se lo cambia con variables de entorno


app.get(
  '/',
  function (req, res) {
    res.send("hola mundo")
  }
)


app.listen(port, () => {
  console.log(`tu app esta lista para http://localhost:${port}`)
})


////////////////////////////////////////////////////////////////////////////
//mostrar productos

app.get("/api/producto", (req, res) => {
  db.query("SELECT * FROM productsdb.product", (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result)
  });
});

// delete un producto

app.delete('/api/delete/:id', (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM product WHERE id=?", id, (err, result) => {
    if (err) {
      console.log(err)

    }
    res.send(result)
  })

})

// mostrar un producto
app.get("/api/getFromId/:id", (req, res) => {

  const id = req.params.id;
  db.query("SELECT * FROM product WHERE id=2", id,
    (err, result) => {
      if (err) {
        console.log(err)
      }
      res.send(result)
    });
});

//////////////////////////////////////////////////////////////////////////////
