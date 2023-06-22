
require("dotenv").config()
const express =require("express") //libreria de express , servicio web
const cors = require("cors") //libreria de cors
const app = express()

app.use(cors())

const port = process.env.PORT || 3000 // se define el puerto pero se lo cambia con variables de entorno


app.get(
  '/' , 
  function(req, res){
    res.send("hola mundo")
  }
)


app.listen(port, () => {
  console.log(`tu app esta lista para http://localhost:${port}`)  
})




