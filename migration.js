const db = require("./db")

async function criar_estrutura(){
    try {
        await db.pool.query(`
        DROP TABLE IF EXISTS cliente;
        CREATE TABLE cliente (
            id int NOT NULL AUTO_INCREMENT,
            nome varchar(50) NOT NULL,
            cpf char(14) NOT NULL,
            celular char(14) NOT NULL,
            email varchar(50) NOT NULL,
            senha varchar(512) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
            PRIMARY KEY (id),
            UNIQUE KEY cpf cpf),
            UNIQUE KEY email (email)
          ) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
        `)

    } catch (error) {
        console.log(error)
    }
}