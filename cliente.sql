-- TABELA CLIENTE

CREATE TABLE cliente
(
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50) NOT NULL,
cpf CHAR(14) NOT NULL UNIQUE,
celular CHAR(14) NOT NULL,
email VARCHAR(50) NOT NULL UNIQUE,
senha VARCHAR(512) NOT NULL
);

DROP TABLE cliente;

INSERT INTO cliente (
nome, cpf, celular, email, senha
) VALUES

("Hyllari", "666.777.444-69", "(42)66666-4444", "hyllari@email.com", "amogatoslisoslindos777"),
("Isadora", "111.222.333-44", "(41)98888-1111", "isadora.silva@email.com", "isadora123"),
("João", "222.333.444-55", "(42)97777-2222", "joao.santos@email.com", "joao456"),
("Mariana", "333.444.555-66", "(43)96666-3333", "mariana.oliveira@email.com", "mariana789"),
("Lucas", "444.555.666-77", "(44)95555-4444", "lucas.almeida@email.com", "lucas321"),
("Ana", "555.666.777-88", "(45)94444-5555", "ana.costa@email.com", "ana987"),
("Pedro", "777.888.999-00", "(46)93333-6666", "pedro.rocha@email.com", "pedro654"),
("Beatriz", "888.999.000-11", "(47)92222-7777", "beatriz.martins@email.com", "bia2026"),
("Gabriel", "999.000.111-22", "(48)91111-8888", "gabriel.lima@email.com", "gabriel111"),
("Larissa", "123.456.789-10", "(49)90000-9999", "larissa.souza@email.com", "larissa555"),
("Rafael", "987.654.321-00", "(40)98888-0000", "rafael.pereira@email.com", "rafael999");


SELECT email, senha FROM cliente;


SELECT email, senha FROM cliente WHERE email = "ana.silva@email.com";


SELECT * FROM cliente


SELECT * FROM cliente WHERE id <= 10 AND LENGTH(senha) > 20;


DELETE FROM cliente WHERE id = 11;


UPDATE cliente SET nome = "Hyllari", email = "hyllari@email.com" WHERE id = 1;

-- TABELA ENDERECO

CREATE TABLE endereco
(
    id INT PRIMARY KEY AUTO_INCREMENT,
    idCliente INT NOT NULL,
    numero INT NOT NULL,
    rua VARCHAR(100) NOT NULL,
    bairro VARCHAR(50) NOT NULL,
    cidade VARCHAR(50) NOT NULL,
    estado VARCHAR(50) NOT NULL,

    FOREIGN KEY (idcliente) REFERENCES cliente(id)
);

-- TABELA PRODUTO

CREATE TABLE produto
(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    descricao VARCHAR(255) NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    caminho_img VARCHAR(255),
    quantidade_img INT NOT NULL
);

-- TABELA COMPRA

CREATE TABLE compra
(
    id INT PRIMARY KEY AUTO_INCREMENT,
    idCliente INT NOT NULL,
    idEndereco INT NOT NULL,
    data DATE NOT NULL,
    forma_pagamento VARCHAR(50) NOT NULL,
    valor_total DECIMAL(10,2) NOT NULL,

    FOREIGN KEY (idcliente) REFERENCES cliente(id),
    FOREIGN KEY (idendereco) REFERENCES endereco(id)
);

-- TABELA PRODUTO COMPRA

CREATE TABLE produtocompra
(
    idproduto INT NOT NULL,
    idcompra INT NOT NULL,
    quantidade INT NOT NULL,
    valor_unitario DECIMAL(10,2) NOT NULL,

    PRIMARY KEY (idproduto, idcompra),

    FOREIGN KEY (idproduto) REFERENCES produto(id),
    FOREIGN KEY (idcompra) REFERENCES compra(id)
);