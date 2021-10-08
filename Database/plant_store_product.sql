-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: plant_store
-- ------------------------------------------------------
-- Server version	8.0.26

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
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `imageURL` varchar(500) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `rating` int NOT NULL,
  `price` int NOT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (2,'Mammillaria','/assets/images/cactus2.jpeg','ขนาด: 6.5 cm (จัดส่งเฉพาะต้นไม้แบบถอดราก)',4,300,20),(3,'Astrophytum','/assets/images/cactus3.jpeg','ขนาด: 6.6 cm (จัดส่งเฉพาะต้นไม้แบบถอดราก)',5,1200,30),(4,'Mammillaria','/assets/images/cactus4.jpeg','ขนาด: 4.0 cm (จัดส่งเฉพาะต้นไม้แบบถอดราก)',4,250,10),(5,'Echinopsis','/assets/images/cactus9.jpeg','ขนาด: 5.0 cm (จัดส่งเฉพาะต้นไม้แบบถอดราก)',3,100,10),(7,'Mammillaria','/assets/images/cactus8.jpeg','ขนาด: 5.6 cm (จัดส่งเฉพาะต้นไม้แบบถอดราก)',5,1000,10),(10,'Astrophytum','/assets/images/cactus1.jpeg','Cactus',3,250,10),(11,'Astrophytum','/assets/images/cactus2.jpeg','Cactus',3,250,10),(12,'Astrophytum','/assets/images/cactus3.jpeg','Cactus',3,250,10),(13,'Astrophytum','/assets/images/cactus4.jpeg','Cactus',3,250,10),(14,'Astrophytum','/assets/images/cactus5.jpeg','Cactus',3,250,10),(15,'Astrophytum','/assets/images/cactus6.jpeg','Cactus',3,250,10),(16,'Astrophytum','/assets/images/cactus7.jpeg','Cactus',3,250,10),(17,'Astrophytum','/assets/images/cactus8.jpeg','Cactus',3,250,10),(18,'Astrophytum','/assets/images/cactus9.jpeg','Cactus',3,250,10);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-08 16:14:22
