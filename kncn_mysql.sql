CREATE DATABASE  IF NOT EXISTS `kncn_mysql` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `kncn_mysql`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: kncn_mysql
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `songs`
--

DROP TABLE IF EXISTS `songs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `songs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `song_code` varchar(255) NOT NULL,
  `theme_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `theme_id` (`theme_id`),
  CONSTRAINT `Songs_ibfk_1` FOREIGN KEY (`theme_id`) REFERENCES `themes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `songs`
--

LOCK TABLES `songs` WRITE;
/*!40000 ALTER TABLE `songs` DISABLE KEYS */;
INSERT INTO `songs` VALUES (27,'TO THE MOON - hooligan. (Final Beat)','OiR4Wqi7pGY',8),(28,'Justin Caruso - Broken Hearts feat. Hilda (Official Video)','CeLmP8mT5SI',8),(29,'(Paddy Sun) Sunflower','uzOE3c12w0U',8),(30,'Point the star | Lofi','cBsUr4UMcD0',8),(31,'nawhij - cloud nine','FSuNBT1ifVY',2),(32,'Autumn Jazz','Q3saFny02KU',2),(33,'nawhij(나우히즈) - with you','sls44rlHpRg',2),(34,'Soulitune - Reverie | Lofi','fc-c5nxQBS4',2),(35,'Jazz Trio loop music _ Imagination','Vg0o_MbV310',2),(36,'nawhij - hydrangea','BJYEz2oPRms',2),(37,'Soulitune - Pal | Lofi','Wj-fDD2b47A',2),(38,'Kupla - Lavender','n61ULEU7CO0',2),(39,'마음 (Heart)','B2wp1mBuV74',3),(40,'BTS - 봄날 (Spring Day)','lKlSesz-V-8',3),(41,'WInter -Vivaldi','diXRvGwjFz8',4),(42,'concerto for 4 violins in b minor, rv 580, i. allegro (vivaldi) [il giardino armonico]','RnkxLb2KaXA',4),(43,'- Precious Gems by Salon Dijon','ahhuDt6WIUg',4),(44,'partita in c moll, i. prélude (bach) [evangelina mascardi]','inUhw6L8ebA',4),(45,'Godanno-Shirabe','x3n8LlokDzo',5),(46,'Kung Fu Way - Gabriel Saban - Tian Bo - Cézame Trailers','El4BiGHVQ3U',6),(47,'Batman','9bUMOSM-9Kg',7),(48,'BLACKPINK - \'Pretty Savage\' OFFICIAL REAL INSTRUMENTAL','YVJC6bSvd-o',8),(49,'LE SSERAFIM - ANTIFRAGILE | Instrumental','ttYwgwtFzus',8),(50,'Driftveil City: 8-Bit Remix','scQu6EPsuxw',8),(51,'Lindsey Stirling - Senbonzakura','6-wEAeNcA_A',8),(52,'Bad Apple - (Orchestral Arrangement) Instrumental','TxTprtLZurY',8);
/*!40000 ALTER TABLE `songs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `themes`
--

DROP TABLE IF EXISTS `themes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `themes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `themes`
--

LOCK TABLES `themes` WRITE;
/*!40000 ALTER TABLE `themes` DISABLE KEYS */;
INSERT INTO `themes` VALUES (2,'Lofi'),(3,'Kpop'),(4,'Classical'),(5,'Asian Traditional'),(6,'Epic China'),(7,'8-bit'),(8,'Misc');
/*!40000 ALTER TABLE `themes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-24  0:33:22
