import Mysql from 'mysql'

let connection = Mysql.createConnection({
  host: "db-instance.c76o4i8kgqzm.us-east-2.rds.amazonaws.com",
  database: "db_users",
  user: "admin95",
  password: "admin9524$"
})

connection.connect(function(err){
    if(err){
        console.log(err)
    }
    else {
        console.log("conectado a la base de datos")
    }
})

export function insertar_usuarios(name, id, lastname){
    
    let instruction_sql = "INSERT INTO users (id,name,lastname) VALUES ("+id+",'"+name+"','"+lastname+"')"
    connection.query(instruction_sql, function(err, result){
        if(err){
            console.log("Error " + err)
        }
        else{
            console.log("Usuario Agregado")
        }
    })
}

export function consultar_usuarios(id){
    let instruction_sql = "SELECT * FROM users WHERE id="+id+""
    connection.query(instruction_sql, (err, result) => {
        if(err){
            console.log("Error " + err)
        }
        else{
            console.log("Usuario Agregado")
            return result
        }
    })
}
