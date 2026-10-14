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

INSERT INTO produto
(nome, descricao, categoria, preco, caminho_img, quantidade_img)
VALUES
('Moletom Gatinho Lunar', 'Moletom preto com estampa de gatinho e lua rosa.', 'Roupas', 189.90, 'img/moletom.png', 15),
('Cropped Moonie', 'Cropped rosa com logo Moonie.', 'Roupas', 69.90, 'img/cropped.png', 20),
('Camiseta Caos Fofo', 'Camiseta preta com estampa alternativa.', 'Roupas', 79.90, 'img/camiseta.png', 25),
('Saia Dark Pink', 'Saia preta com detalhes rosa.', 'Roupas', 99.90, 'img/saia.png', 10),
('Meias Gatinho', 'Meias pretas com desenhos de gatinhos.', 'Acessórios', 29.90, 'img/meias.png', 30),
('Casaco Lua Rosa', 'Casaco escuro com detalhes em rosa pastel.', 'Roupas', 159.90, 'img/casaco.png', 12),
('Boné Moonie', 'Boné preto com logo bordado.', 'Acessórios', 49.90, 'img/bone.png', 18),
('Mochila Noturna', 'Mochila preta com detalhes góticos.', 'Bolsas', 139.90, 'img/mochila.png', 8),
('Bolsa Lua', 'Bolsa pequena com detalhe de lua rosa.', 'Bolsas', 89.90, 'img/bolsa.png', 14),
('Colar Pentagrama', 'Colar alternativo com pingente de estrela.', 'Joias', 39.90, 'img/colar.png', 25),
('Pulseira Pink', 'Pulseira preta e rosa.', 'Joias', 24.90, 'img/pulseira.png', 30),
('Anel Estelar', 'Anel com desenho de estrela.', 'Joias', 34.90, 'img/anel.png', 20),
('Brincos Lua', 'Brincos pequenos em formato de lua.', 'Joias', 29.90, 'img/brincos.png', 16),
('Caneca Moonie', 'Caneca preta com ilustração da marca.', 'Decoração', 44.90, 'img/caneca.png', 20),
('Chaveiro Gatinho', 'Chaveiro de gatinho preto e rosa.', 'Acessórios', 19.90, 'img/chaveiro.png', 40),
('Adesivos Místicos', 'Cartela de adesivos de luas e estrelas.', 'Papelaria', 14.90, 'img/adesivos.png', 50),
('Caderno Lunar', 'Caderno com capa temática Moonie.', 'Papelaria', 32.90, 'img/caderno.png', 25),
('Estojo Dark', 'Estojo preto com zíper rosa.', 'Papelaria', 27.90, 'img/estojo.png', 18),
('Garrafa Estelar', 'Garrafa reutilizável com estampa lunar.', 'Acessórios', 54.90, 'img/garrafa.png', 12),
('Almofada Gatinho', 'Almofada decorativa de gatinho.', 'Decoração', 64.90, 'img/almofada.png', 10),
('Pelúcia Moonie', 'Pelúcia de gatinho preto com olhos rosa.', 'Decoração', 79.90, 'img/pelucia.png', 15),
('Luminária Lua', 'Luminária decorativa em formato de lua.', 'Decoração', 99.90, 'img/luminaria.png', 8),
('Presilha Estrela', 'Presilha de cabelo com estrela rosa.', 'Acessórios', 16.90, 'img/presilha.png', 35),
('Tiara Gatinho', 'Tiara preta com orelhas de gatinho.', 'Acessórios', 34.90, 'img/tiara.png', 12),
('Carteira Dark', 'Carteira preta com detalhes em rosa.', 'Bolsas', 59.90, 'img/carteira.png', 10),
('Tênis Lunar', 'Tênis casual preto com detalhes rosa.', 'Calçados', 219.90, 'img/tenis.png', 6),
('Pantufa Gatinho', 'Pantufa macia com tema de gatinho.', 'Calçados', 69.90, 'img/pantufa.png', 14),
('Shorts Moonie', 'Shorts preto com detalhes rosa.', 'Roupas', 74.90, 'img/shorts.png', 18),
('Jaqueta Estelar', 'Jaqueta preta com estampa de estrelas.', 'Roupas', 199.90, 'img/jaqueta.png', 7),
('Kit Místico', 'Kit com adesivos, chaveiro e pulseira.', 'Kits', 49.90, 'img/kit.png', 20);

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