import Express from 'express'
import Path from 'path'
import {insertar_usuarios, consultar_usuarios} from './db.js'

const app = Express ()
app.use(Express.static("frontend/build"))
app.use(Express.json())
app.use(Express.urlencoded({}))

const dir_root = Path.resolve()

app.listen('8080', function(){
    console.log("El servidor se ha iniciado")
})

app.get('/', function (req, res){
    res.sendFile(dir_root + "/frontend/build/index.html")
})

app.get("/registrar", (req, res)=>{
    res.sendFile(dir_root + "/frontend/build/index.html")
})

app.get("/consultar", (req, res)=>{
    res.sendFile(dir_root + "/frontend/build/index.html")
})

app.get("/contacto", (req, res)=>{
    res.sendFile(dir_root  + "/frontend/build/index.html")
})

app.post("/registrar_usuarios", (req, res) => {
    let {name, id, lastname} = req.body
    insertar_usuarios(name, id, lastname)
    //console.log(name + " " + lastname + " " + id)
    res.redirect("/")
   })

app.post('/consultar_usuarios', function(req, res) {
    let {id} = req.body
   // console.log(id)
    consultar_usuarios(id)
})