-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 23-03-2021 a las 00:10:02
-- Versión del servidor: 5.7.31
-- Versión de PHP: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `library`
--
CREATE DATABASE IF NOT EXISTS `library` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;
USE `library`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `books`
--

DROP TABLE IF EXISTS `books`;
CREATE TABLE IF NOT EXISTS `books` (
  `id_book` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(60) COLLATE utf8_bin NOT NULL,
  `code` varchar(3) COLLATE utf8_bin NOT NULL,
  `author` varchar(60) COLLATE utf8_bin NOT NULL,
  `loan` tinyint(1) NOT NULL DEFAULT '0',
  `available` tinyint(1) NOT NULL DEFAULT '1',
  `isbn` varchar(60) COLLATE utf8_bin NOT NULL,
  `cover` varchar(10) COLLATE utf8_bin NOT NULL,
  `id_category` int(11) NOT NULL,
  PRIMARY KEY (`id_book`),
  UNIQUE KEY `id_book` (`id_book`),
  KEY `id_category` (`id_category`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `books`
--

INSERT INTO `books` (`id_book`, `title`, `code`, `author`, `loan`, `available`, `isbn`, `cover`, `id_category`) VALUES
(1, 'Juan escutia', '101', 'Erik Ciau', 1, 0, '129192jsi9w', '#435560', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `id_category` int(11) NOT NULL AUTO_INCREMENT,
  `nameCategory` varchar(60) COLLATE utf8_bin NOT NULL,
  `cover` varchar(60) COLLATE utf8_bin NOT NULL,
  `code` varchar(3) COLLATE utf8_bin NOT NULL,
  `id_colection` int(11) NOT NULL,
  PRIMARY KEY (`id_category`),
  KEY `id_colection` (`id_colection`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id_category`, `nameCategory`, `cover`, `code`, `id_colection`) VALUES
(1, 'Bibliografias', '#435560', '010', 1),
(2, 'otra categoria de generalidades', '#413c69', '020', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `colections`
--

DROP TABLE IF EXISTS `colections`;
CREATE TABLE IF NOT EXISTS `colections` (
  `id_colection` int(11) NOT NULL AUTO_INCREMENT,
  `nameColection` varchar(60) COLLATE utf8_bin NOT NULL,
  `code` varchar(4) COLLATE utf8_bin NOT NULL,
  `cover` varchar(30) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id_colection`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `colections`
--

INSERT INTO `colections` (`id_colection`, `nameColection`, `code`, `cover`) VALUES
(1, 'Generalidades', '000', 'red'),
(2, 'Psicologia', '100', 'blue');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `librarians`
--

DROP TABLE IF EXISTS `librarians`;
CREATE TABLE IF NOT EXISTS `librarians` (
  `id_librarian` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(60) COLLATE utf8_bin NOT NULL,
  `email` varchar(60) COLLATE utf8_bin NOT NULL,
  `password` varchar(90) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id_librarian`),
  UNIQUE KEY `KEY` (`email`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `librarians`
--

INSERT INTO `librarians` (`id_librarian`, `username`, `email`, `password`) VALUES
(1, 'Erik Ciau', 'erikciau777@icloud.com', '123456'),
(2, 'Antonio Ciau', '123@gmail.com', '123456'),
(8, 'Erik Ciau', 'ewwrikwciau777@icloud.com', '$2a$10$iZfLQd/LlW2XO3HNXvnqCucxEdipbTlK.UBt9RZg9/h7mQdUBQu02'),
(9, 'Erik Ciau', 'erikciau777', '$2a$10$u258/KPfGoLbpnwvsBhqTubhsc8Cu1n4S/VnCQMort83aoI3sO9YC');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `peoples`
--

DROP TABLE IF EXISTS `peoples`;
CREATE TABLE IF NOT EXISTS `peoples` (
  `id_people` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(90) COLLATE utf8_bin NOT NULL,
  `enrollment` varchar(9) COLLATE utf8_bin NOT NULL,
  `password` varchar(90) COLLATE utf8_bin NOT NULL,
  `grade` int(1) NOT NULL,
  `group` varchar(1) COLLATE utf8_bin NOT NULL,
  `career` varchar(3) COLLATE utf8_bin NOT NULL,
  `phoneNumber` varchar(10) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id_people`),
  UNIQUE KEY `enrollment` (`enrollment`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `peoples`
--

INSERT INTO `peoples` (`id_people`, `username`, `enrollment`, `password`, `grade`, `group`, `career`, `phoneNumber`) VALUES
(1, 'Erik Antonio Ciau Gomez', '19211960', '$2a$10$RWX92hGsiVG8WNMl7yDWSeCmFnoy3c52P9tQmYN.JYbgDTeDHmk4W', 5, 'A', 'TTD', '9881055190');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `requests`
--

DROP TABLE IF EXISTS `requests`;
CREATE TABLE IF NOT EXISTS `requests` (
  `id_request` int(11) NOT NULL AUTO_INCREMENT,
  `id_people` int(11) NOT NULL,
  `id_book` int(11) NOT NULL,
  `accepted` tinyint(1) DEFAULT NULL,
  `returned` tinyint(1) NOT NULL DEFAULT '0',
  `orderIn` varchar(20) COLLATE utf8_bin NOT NULL,
  `returnIn` varchar(20) COLLATE utf8_bin DEFAULT NULL,
  UNIQUE KEY `id_request` (`id_request`),
  KEY `id_people` (`id_people`),
  KEY `id_book` (`id_book`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `requests`
--

INSERT INTO `requests` (`id_request`, `id_people`, `id_book`, `accepted`, `returned`, `orderIn`, `returnIn`) VALUES
(1, 1, 1, NULL, 0, '2021-03-22', '2021-03-29'),
(2, 1, 1, NULL, 0, '2021-03-22', '2021-03-29');

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `categories`
--
ALTER TABLE `categories`
  ADD CONSTRAINT `categories_ibfk_1` FOREIGN KEY (`id_colection`) REFERENCES `colections` (`id_colection`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
