-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/* para sql server - remoto - produção */

create database maze;
use maze;

-- tabela para guardar as informações do usuário
create table usuario(
	idUsuario int primary key auto_increment,
    nome varchar(45) not null,
    cnpj varchar(45) not null,
    email varchar(45) not null,
    senha varchar(45) not null
) auto_increment = 10;

desc usuario;

-- Criação da tabela das linhas parceiras
create table linha(
idLinha int primary key,
numeroLinha int not null,
nomeLinha varchar(30) not null
);

desc linha;

-- Criação da tabela das estações que estão nas linhas
create table estacao(
idEstacao int primary key auto_increment,
nomeEstacao varchar(30) not null,
fkLinha int
) auto_increment = 100;

-- Criação de uma chave estrangeira ligando a tabela estacao com a tabela linha
alter table estacao add foreign key (fkLinha) references linha (idLinha);

desc estacao;


-- Criação da tabela de sensor, que estará em diversos lugares na estação
create table sensor(
	idSensor int primary key auto_increment,
	nome_sensor varchar(45),
	eixo_x varchar(45),
	eixo_y varchar(45),
	raio int
);

-- Criação da tabela medida, que será o dado registrado pelo sensor
create table medida(
	idMedida int primary key auto_increment,
    is_present int,
    date_moviment datetime,
	fkSensor int
);

create table medida_presenca(
	id int primary key auto_increment,
    is_present int,
    date_moviment datetime,
	id_sensor int
);

-- inserindo dados na tabela

insert into sensor (nome_sensor, eixo_x, eixo_y, raio) values
('Local 1', 115, 70, 45),
('Local 2', 115, 123, 40),
('Local 3', 118, 175, 50),
('Local 4', 120, 224, 50),
('Local 5', 119, 271, 50),
('Local 6', 350, 140, 105),
('Local 7', 520, 100, 105),
('Local 8', 690, 100, 105),
('Local 9', 765, 242, 95),
('Local 10', 765, 340, 95),
('Local 11', 550, 390, 160),
('Local 12', 105, 380, 120),
('Local 13', 320, 400, 105);

insert into linha values 
(1, 1, 'Azul'),
(2, 2, 'Verde'),
(3, 3, 'Vermelha'),
(4, 4, 'Amarela'),
(5, 5, 'Lilás'),
(15, 15, 'Prata');

select * from linha;

insert into estacao(nomeEstacao, fkLinha) values 
('Tucuruvi', 1),
('Parada Inglesa', 1),
('Jardim São Paulo', 1),
('Santana', 1),
('Carandiru', 1),
('Portuguesa-Tietê', 1),
('Armênia', 1),
('Tiradentes', 1),
('Luz', 1),
('São Bento', 1),
('Sé', 1),
('Liberdade', 1),
('São Joaquim', 1),
('Vergueiro', 1),
('Paraíso', 1),
('Ana Rosa', 1),
('Vila Mariana', 1),
('Santa Cruz', 1),
('Praça da Árvore', 1),
('Saúde', 1),
('São Judas', 1),
('Conceição', 1),
('Jabaquara', 1);

insert into estacao(nomeEstacao, fkLinha) values 
('Vila Madalena', 2), 
('Sumaré', 2), 
('Clínicas', 2), 
('Consolação', 2), 
('Trianon-MASP', 2), 
('Brigadeiro', 2), 
('Paraíso', 2), 
('Ana Rosa', 2), 
('Chácara Klabin', 2), 
('Santos-Imigrantes', 2), 
('Alto do Ipiranga', 2), 
('Sacomã', 2), 
('Tamanduateí', 2),
('Vila Prudente', 2); 

insert into estacao(nomeEstacao, fkLinha) values 
('Barra funda', 3),
('Marechal Deodoro', 3),
('Santa Cecília', 3),
('República', 3),
('Anhangabaú', 3),
('Sé', 3),
('Pedro II', 3),
('Brás', 3),
('Bresser - Mooca', 3),
('Belém', 3),
('Tatuapé', 3),
('Carrão', 3),
('Penha', 3),
('Vila Matilde', 3),
('Guilhermina - Esperança', 3),
('Patriarca', 3),
('Artur Alvim', 3),
('Corinthians - Itaquera', 3);


insert into estacao(nomeEstacao, fkLinha) values
('Luz', 4),
('República', 4),
('Higienoólis-Mackenzie', 4),
('Paulista', 4),
('Oscar Freire', 4),
('Fradique Coutinho', 4),
('Faria Lima', 4),
('Pinheiros', 4),
('Butantã', 4),
('São Paulo-Morumbi', 4),
('Vila Sônia', 4);


insert into estacao(nomeEstacao, fkLinha) values
('Capão Redondo', 5),
('Campo Limpo', 5),
('Vila das Belezas', 5),
('Giovanni Gronchi', 5),
('Santo Amaro', 5),
('Largo Treze', 5),
('Adolgo Pinheiro', 5),
('Alto da Boa Vista', 5),
('Borba Gato', 5),
('Brooklin', 5),
('Campo Belo', 5),
('Eucaliptos', 5),
('Moema', 5),
('AACD-Servidor', 5),
('Hospital São Paulo', 5),
('Santa Cruz', 5),
('Chácara Klabin', 5);


insert into estacao(nomeEstacao, fkLinha) values
('Vila Prudente', 15),
('Oratório', 15),
('São Lucas', 15),
('Camilo Haddad', 15),
('Vila Tólstói', 15),
('Vila União', 15),
('Jardim Planalto', 15),
('Sapopemba', 15),
('Fazenda da Juta', 15),
('São Mateus', 15),
('Iguatemi', 15),
('Jequiriçá', 15),
('Jacu-Pêssego', 15),
('Érico Semer', 15),
('Márcio Beck', 15),
('Cidade Tiradentes', 15),
('Hospital C. Tiradentes', 15);

select * from medida;

select count(*) as total, id_sensor as sensor from medida_presenca where is_present = 1 
	 and CAST(date_moviment as time) between '00:00' and '01:35' 
		group by id_sensor;

select * from estacao;

-- Exibindo as tabelas com suas correspondentes

select * from estacao join linha on fkLinha = idLinha;
