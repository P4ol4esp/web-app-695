import Express from 'express'
import Path from 'path'

const app = Express ()
app.use(Express.static("frontend/build"));
const dir_root = Path.resolve();

app.listen('8000', function(){
    console.log("El servidor se ha iniciado")
})

app.get('/', function (req, res){
    res.sendFile(dir_root + "/" + "/frontend/build/index.html");
})

app.get('/registrar', (req, res)=>{
    res.sendFile(dir_root + "/" + "/frontend/build/index.html");
})

app.get('/consultar', (req, res)=>{
    res.sendFile(dir_root + "/" + "/frontend/build/index.html");
})

app.get('/contacto', (req, res)=>{
    res.sendFile(dir_root + "/" + "/frontend/build/index.html");
})