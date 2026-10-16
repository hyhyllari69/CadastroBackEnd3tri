const db = require("./db")

const ESTRUTURA_CLIENTE = `
DROP TABLE IF EXISTS cliente;
CREATE TABLE cliente (
id int NOT NULL AUTO_INCREMENT,
nome varchar(50) NOT NULL,
cpf char(14) NOT NULL,
celular char(14) NOT NULL,
email varchar(50) NOT NULL,
senha varchar(512) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
PRIMARY KEY (id),
UNIQUE KEY cpf (cpf),
UNIQUE KEY email (email)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;`

const DADOS_CLIENTE = `
INSERT INTO cliente VALUES 
(2,'Isadora','111.222.333-44','(41)98888-1111','isadora.silva@email.com','isadora123'),(3,'João','222.333.444-55','(42)97777-2222','joao.santos@email.com','joao456'),(4,'Mariana','333.444.555-66','(43)96666-3333','mariana.oliveira@email.com','$2b$10$dl68TJDYI9QGfygH.zSP7uuDo.YkQAabrBlmbW4LY3ZrdfpKqRXZ.'),
(5,'Lucas','444.555.666-77','(44)95555-4444','lucas.almeida@email.com','lucas321'),(6,'Ana','555.666.777-88','(45)94444-5555','ana.costa@email.com','ana987'),(7,'Pedro','777.888.999-00','(46)93333-6666','pedro.rocha@email.com','pedro654'),(8,'Beatriz','888.999.000-11','(47)92222-7777','beatriz.martins@email.com','bia2026'),(9,'Gabriel','999.000.111-22','(48)91111-8888','gabriel.lima@email.com','gabriel111'),(10,'Larissa','123.456.789-10','(49)90000-9999','larissa.souza@email.com','larissa555'),(12,'Ianzeen','11.322.322-44','(43)98888-1111','ianzeen.isadora@email.com','$2b$10$Mo.W9JRtsCskWxse/pNWuuM0q8IGwyNyFw/usAQ3rT/OEK7KZnDda');`
 
 const ESTRUTURA_PRODUTO = `
 DROP TABLE IF EXISTS produto;
 CREATE TABLE produto (
    id int NOT NULL AUTO_INCREMENT,
    nome varchar(100) NOT NULL,
    descricao varchar(255) NOT NULL,
    categoria varchar(50) NOT NULL,
    preco decimal(10,2) NOT NULL,
    caminho_img varchar(255) DEFAULT NULL,
    quantidade_img int NOT NULL,
    PRIMARY KEY (id)
  ) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;`

  const DADOS_PRODUTO = `
    INSERT INTO produto VALUES
    (1,'Moletom Gatinho Lunar','Moletom preto com estampa de gatinho e lua rosa.','Roupas',189.90,'img/moletom.png',15),(2,'Cropped Moonie','Cropped rosa com logo Moonie.','Roupas',69.90,'img/cropped.png',20),(3,'Camiseta Caos Fofo','Camiseta preta com estampa alternativa.','Roupas',79.90,'img/camiseta.png',25),(4,'Saia Dark Pink','Saia preta com detalhes rosa.','Roupas',99.90,'img/saia.png',10),(5,'Meias Gatinho','Meias pretas com desenhos de gatinhos.','Acessórios',29.90,'img/meias.png',30),(6,'Casaco Lua Rosa','Casaco escuro com detalhes em rosa pastel.','Roupas',159.90,'img/casaco.png',12),(7,'Boné Moonie','Boné preto com logo bordado.','Acessórios',49.90,'img/bone.png',18),(8,'Mochila Noturna','Mochila preta com detalhes góticos.','Bolsas',139.90,'img/mochila.png',8),(9,'Bolsa Lua','Bolsa pequena com detalhe de lua rosa.','Bolsas',89.90,'img/bolsa.png',14),(10,'Colar Pentagrama','Colar alternativo com pingente de estrela.','Joias',39.90,'img/colar.png',25),(11,'Pulseira Pink','Pulseira preta e rosa.','Joias',24.90,'img/pulseira.png',30),(12,'Anel Estelar','Anel com desenho de estrela.','Joias',34.90,'img/anel.png',20),(13,'Brincos Lua','Brincos pequenos em formato de lua.','Joias',29.90,'img/brincos.png',16),(14,'Caneca Moonie','Caneca preta com ilustração da marca.','Decoração',44.90,'img/caneca.png',20),(15,'Chaveiro Gatinho','Chaveiro de gatinho preto e rosa.','Acessórios',19.90,'img/chaveiro.png',40),
    (16,'Adesivos Místicos','Cartela de adesivos de luas e estrelas.','Papelaria',14.90,'img/adesivos.png',50),(17,'Caderno Lunar','Caderno com capa temática Moonie.','Papelaria',32.90,'img/caderno.png',25),(18,'Estojo Dark','Estojo preto com zíper rosa.','Papelaria',27.90,'img/estojo.png',18),(19,'Garrafa Estelar','Garrafa reutilizável com estampa lunar.','Acessórios',54.90,'img/garrafa.png',12),(20,'Almofada Gatinho','Almofada decorativa de gatinho.','Decoração',64.90,'img/almofada.png',10),(21,'Pelúcia Moonie','Pelúcia de gatinho preto com olhos rosa.','Decoração',79.90,'img/pelucia.png',15)
    ,(22,'Luminária Lua','Luminária decorativa em formato de lua.','Decoração',99.90,'img/luminaria.png',8),(23,'Presilha Estrela','Presilha de cabelo com estrela rosa.','Acessórios',16.90,'img/presilha.png',35),(24,'Tiara Gatinho','Tiara preta com orelhas de gatinho.','Acessórios',34.90,'img/tiara.png',12),(25,'Carteira Dark','Carteira preta com detalhes em rosa.','Bolsas',59.90,'img/carteira.png',10),(26,'Tênis Lunar','Tênis casual preto com detalhes rosa.','Calçados',219.90,'img/tenis.png',6),(27,'Pantufa Gatinho','Pantufa macia com tema de gatinho.','Calçados',69.90,'img/pantufa.png',14),(28,'Shorts Moonie','Shorts preto com detalhes rosa.','Roupas',74.90,'img/shorts.png',18),(29,'Jaqueta Estelar','Jaqueta preta com estampa de estrelas.','Roupas',199.90,'img/jaqueta.png',7),(30,'Kit Místico','Kit com adesivos, chaveiro e pulseira.','Kits',49.90,'img/kit.png',20);`
 
  async function criar_tabelas() {
    const connection = await db.pool.getConnection();
    try {
        await connection.beginTransaction();

        console.log("Criando tabela 'cliente'...");
        await connection.query(ESTRUTURA_CLIENTE);
        await connection.query(DADOS_CLIENTE);

        console.log("Criando tabela 'produto'...");
        await connection.query(ESTRUTURA_PRODUTO);
        await connection.query(DADOS_PRODUTO);         

        await connection.commit();
        console.log("Migration executada com sucesso!");
        process.exit(0);
    } catch (error) {
        await connection.rollback();
        console.log(error)
        process.exit(1);
    } finally {
        connection.release();
    }
}
criar_tabelas()