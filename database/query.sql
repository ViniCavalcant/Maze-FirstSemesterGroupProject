
-- tabela para guardar as informações do usuário
create table usuario(
	idUsuario int IDENTITY (10,1)  primary key,
    nome varchar(45) not null,
    cnpj varchar(45) not null,
    email varchar(45) not null,
    senha varchar(45) not null
)



-- Criação da tabela das linhas parceiras
create table linha(
idLinha int primary key,
numeroLinha int not null,
nomeLinha varchar(30) not null
);



-- Criação da tabela das estações que estão nas linhas
create table estacao(
idEstacao int IDENTITY(100,1)  primary key,
nomeEstacao varchar(30) not null,
fkLinha int
)

-- Criação de uma chave estrangeira ligando a tabela estacao com a tabela linha
alter table estacao add foreign key (fkLinha) references linha (idLinha);




-- Criação da tabela de sensor, que estará em diversos lugares na estação
create table sensor(
	idSensor int IDENTITY (1,1) primary key,
	nome_sensor varchar(45),
	eixo_x varchar(45),
	eixo_y varchar(45),
	raio int
);

-- Criação da tabela medida, que será o dado registrado pelo sensor
create table medida(
	idMedida int IDENTITY (1,1) primary key,
    is_present int,
    date_moviment datetime,
	fkSensor int
);

create table medida_presenca(
	id int IDENTITY (1,1) primary key,
    is_present int,
    date_moviment datetime,
	id_sensor int,
    id_estacao int
);

create table medida_presenca2(
	id int IDENTITY (1,1) primary key,
    is_present int,
    date_moviment datetime,
	id_sensor int,
    id_estacao int
);


alter table medida_presenca2 add foreign key (id_sensor) references sensor (idSensor);
alter table medida_presenca2 add foreign key (id_estacao) references estacao	(idEstacao);

CREATE TABLE Contato (
idContato INT IDENTITY (1,1) PRIMARY KEY,
  Nome VARCHAR(45),
  Email VARCHAR(45),
  Mensagem TEXT
  );

alter table medida_presenca2 add foreign key (id_sensor) references sensor (idSensor);
alter table medida_presenca add foreign key (id_estacao) references estacao	(idEstacao);

-- inserindo dados nas tabelas

insert into sensor (nome_sensor, eixo_x, eixo_y, raio) values
('catraca 1', 45, 40, 23),
('catraca 2', 45, 67, 23),
('catraca 3', 45, 93, 23),
('catraca 4', 45, 118, 23),
('catraca 5', 45, 114, 23),
('catraca 6', 45, 190, 23),
('catraca 7', 45, 217, 23),
('catraca 8', 45, 243, 23),
('catraca 9', 45, 267, 23),
('catraca 10', 45, 293, 23),
('escada 1', 635, 82, 30),
('escada 2', 635, 117, 30),
('escada 3', 635, 200, 30),
('escada 4', 635, 250, 30),
('máquina de vendas', 220, 50, 70),
('quiosque 1', 340, 105, 90),
('quiosque 2', 425, 75, 70),
('quiosque 3', 520, 76, 70),
('acesso 1', 350, 290, 100),
('acesso 2', 450, 290, 100),
('proximidade escadas', 530, 220, 80),
('proximidade saída', 200, 250, 92),
('proximidade máquinas', 250, 149, 70 );


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
select * from estacao;
select * from medida_presenca;

-- Exibindo as tabelas com suas correspondentes

select * from estacao join linha on fkLinha = idLinha;

select sum(is_present) as total, nomeEstacao as Estação from medida_presenca 
	join estacao on id_estacao = idEstacao 
		group by id_estacao 
			order by sum(is_present) desc;
            
select nomeEstacao, date_moviment, sum(is_present) from medida_presenca 
	join estacao on id_estacao = idEstacao 
			group by id_estacao 
				order by sum(is_present) desc;
     

select nomeEstacao, date_moviment, is_present from medida_presenca 
	join estacao on id_estacao = idEstacao
		where nomeEstacao = 'Sacomã' 
			group by date_moviment 
				order by is_present desc;

-- Horário mais movimentado
select nomeEstacao as Estação, date_moviment as horario, is_present as total from medida_presenca 
	join estacao on id_estacao = idEstacao 
			group by date_moviment  
				order by is_present desc;
                
                
select sum(is_present) as total, id_sensor as sensor from medida_presenca where CAST(date_moviment as time) between '00:00' and '01:29'
    group by id_sensor;
   
-- Estações e o número de pessoas nela
   select sum(is_present) as total, nomeEstacao as Estação from medida_presenca 
	join estacao on id_estacao = idEstacao 
		group by id_estacao 
			order by sum(is_present) desc;
            
 select sum(is_present) as total, nomeEstacao as Estação, nomeLinha as Linha from medida_presenca  
	join estacao on id_estacao = idEstacao 
		join linha on fkLinha = idLinha
			group by nomeLinha
				order by sum(is_present) desc;
                

  select sum(is_present) as total, nomeEstacao as Estação, nomeLinha as Linha from medida_presenca 
	join estacao on id_estacao = idEstacao 
		join linha on fkLinha = idLinha
			group by nomeEstacao;
