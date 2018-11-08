-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Tempo de geração: 08/11/2018 às 16:23
-- Versão do servidor: 5.7.23
-- Versão do PHP: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Banco de dados: `copelmais`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `novidade`
--

CREATE TABLE `novidade` (
  `id` int(11) NOT NULL,
  `origem` varchar(100) NOT NULL,
  `destinatario` varchar(100) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `descricao` varchar(2000) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `id_projeto` int(11) NOT NULL,
  `situacao` float NOT NULL,
  `dataHora` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura para tabela `projeto`
--

CREATE TABLE `projeto` (
  `id` int(11) NOT NULL,
  `nome_projeto` varchar(50) NOT NULL,
  `descricao` varchar(10000) NOT NULL,
  `imagem` varchar(1000) NOT NULL,
  `situacao` varchar(50) NOT NULL,
  `usuario` varchar(100) NOT NULL,
  `mentor` varchar(15) NOT NULL,
  `campanha` int(11) NOT NULL,
  `organizacao` int(11) NOT NULL,
  `dataHora` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura para tabela `projeto_usuario`
--

CREATE TABLE `projeto_usuario` (
  `id` int(11) NOT NULL,
  `email_usuario` varchar(100) NOT NULL,
  `id_projeto` int(11) NOT NULL,
  `status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuario`
--

CREATE TABLE `usuario` (
  `cpf` varchar(15) NOT NULL,
  `nome_completo` varchar(100) NOT NULL,
  `nome_usuario` varchar(20) NOT NULL,
  `email` varchar(100) NOT NULL,
  `estado` varchar(2) NOT NULL,
  `cidade` varchar(30) NOT NULL,
  `senha` varchar(10) NOT NULL,
  `situacao` varchar(50) NOT NULL,
  `codigo_confirmacao` varchar(50) NOT NULL,
  `dataHora` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Fazendo dump de dados para tabela `usuario`
--

INSERT INTO `usuario` (`cpf`, `nome_completo`, `nome_usuario`, `email`, `estado`, `cidade`, `senha`, `situacao`, `codigo_confirmacao`, `dataHora`) VALUES
('073.048.679-65', 'José Eduardo Nunes Lino', 'Eduardo Lino', 'eduardo.lino@pucpr.br', 'PR', 'Curitiba', '12345', 'Liberado', '97b230aaf389c87a5514da28a2cf9c8c', '2018-11-07 15:38:33'),
('333.333.333-33', 'Alan Turing', 'Turing', 'jose_edu_179@hotmail.com', 'PR', 'Curitiba', '12345', 'Liberado', '3148912b2b22fdf27ce0b5fbb516ad6f', '2018-11-08 16:23:05');

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `novidade`
--
ALTER TABLE `novidade`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `projeto`
--
ALTER TABLE `projeto`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `projeto_usuario`
--
ALTER TABLE `projeto_usuario`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`cpf`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `novidade`
--
ALTER TABLE `novidade`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT de tabela `projeto`
--
ALTER TABLE `projeto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=93;

--
-- AUTO_INCREMENT de tabela `projeto_usuario`
--
ALTER TABLE `projeto_usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
