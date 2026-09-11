// npm init
// npm i express
// http://localhost:3000​/cliente

const express = require("express")
const app = express()
const port = 3000

app.use(express.json())

// npm i mysql2
const db = require("./db")

// npm i bcrypt
const bcrypt = require("bcrypt")

// npm i jsonwebtoken
const jwt = require("jsonwebtoken")

// npm i dotenv
const dotenv = require("dotenv")
dotenv.config()

// npm i cors
const cors = require("cors")
app.use(cors())

// CADASTRAR CLIENTE
app.post("/cliente", async (req, res) => {
    try {
        const cliente = req.body

        const senhaCript = bcrypt.hashSync(cliente.senha, 10)
        cliente.senha = senhaCript

        const resultado = await db.pool.query(
            `INSERT INTO cliente (
                nome, cpf, celular, email, senha
            ) VALUES (?, ?, ?, ?, ?)`,
            [
                cliente.nome,
                cliente.cpf,
                cliente.celular,
                cliente.email,
                cliente.senha
            ]
        )

        res.status(201).json({
            msg: "Cliente cadastrado, ID = " + resultado[0].insertId
        })

    } catch (error) {
        res.status(500).json({
            erro: error.message
        })
    }
})

app.post("/login", async (req,res) => {
    try { 
        const user = req.body
        const resultado = await db.pool.query(
            "SELECTE email, senha FROM cliente WHERE email = ?", [user.email]
        )
        const dados_bd = resultado[0][0]
        if(!dados_bd) {
            return res.status(401).json({msg: "Email não cadastrado!"})
        }
        
        const senha_valida = await bcrypt.compare(user.senha, dados_bd.senha)

        if(!senha_valida) {
            return res.status(401).json({msg: "Credenciais inválidas!"})

            const payload ={
                id: dados_bd.id,
                email: dados_bd.email
            }
        }
        const token = jwt.sign(payload, odicess.env.JWT_SECRET, { expiresIn: '1m'})
        return res.status(200).json({nome: dados_bd.nome, token: token})
        
    } catch (error) {
        res.status(500).json({
            erro: error.message
        })
    }
})


// CONSULTAR TODOS OS CLIENTES
app.get("/cliente", async (req, res) => {
    try {

        const resultado = await db.pool.query(
            "SELECT * FROM cliente"
        )

        res.status(200).json(resultado[0])

    } catch (error) {
        res.status(500).json({
            erro: error.message
        })
    }
})

// CONSULTAR UM CLIENTE ESPECÍFICO
app.get("/cliente/:id", async (req, res) => {
    try {

        const id = req.params.id

        const resultado = await db.pool.query(
            "SELECT * FROM cliente WHERE id = ?",
            [id]
        )

        if (resultado[0].length === 0) {
            return res.status(404).json({
                mensagem: "Cliente não encontrado"
            })
        }

        res.status(200).json(resultado[0][0])

    } catch (error) {
        res.status(500).json({
            erro: error.message
        })
    }
})

// ALTERAR CLIENTE
app.put("/cliente/:id", async (req, res) => {
    try {

        const id = req.params.id
        const cliente = req.body

        const senhaCript = bcrypt.hashSync(cliente.senha, 10)

        const resultado = await db.pool.query(
            `UPDATE cliente
             SET nome = ?,
                 cpf = ?,
                 celular = ?,
                 email = ?,
                 senha = ?
             WHERE id = ?`,
            [
                cliente.nome,
                cliente.cpf,
                cliente.celular,
                cliente.email,
                senhaCript,
                id
            ]
        )

        if (resultado[0].affectedRows === 0) {
            return res.status(404).json({
                mensagem: "Cliente não encontrado"
            })
        }

        res.status(200).json({
            mensagem: "Cliente alterado com sucesso"
        })

    } catch (error) {
        res.status(500).json({
            erro: error.message
        })
    }
})

// EXCLUIR CLIENTE
app.delete("/cliente/:id", async (req, res) => {
    try {

        const id = req.params.id

        const resultado = await db.pool.query(
            "DELETE FROM cliente WHERE id = ?",
            [id]
        )

        if (resultado[0].affectedRows === 0) {
            return res.status(404).json({
                mensagem: "Cliente não encontrado"
            })
        }

        res.status(200).json({
            mensagem: "Cliente excluído com sucesso"
        })

    } catch (error) {
        res.status(500).json({
            erro: error.message
        })
    }
})

// INICIAR API
app.listen(port, () => {
    console.log("API rodando na porta " + port)
})