-- MySQL dump 10.13  Distrib 8.0.15, for macos10.14 (x86_64)
--
-- Host: localhost    Database: Ktown_finder
-- ------------------------------------------------------
-- Server version	8.0.15

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `restaurants`
--

DROP TABLE IF EXISTS `restaurants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `restaurants` (
  `restaurant_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `rating` varchar(45) NOT NULL,
  `images` varchar(10000) NOT NULL,
  PRIMARY KEY (`restaurant_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurants`
--

LOCK TABLES `restaurants` WRITE;
/*!40000 ALTER TABLE `restaurants` DISABLE KEYS */;
INSERT INTO `restaurants` VALUES (1,'Hangari Kalguksu','4.4','https://live.staticflickr.com/65535/50608370032_5a8c114c93.jpg'),(2,'Kang Hodong Baekjeong','4.5','https://live.staticflickr.com/65535/50608251566_9839dfcefd_n.jpg'),(3,'Yup Dduk','4.4','https://live.staticflickr.com/65535/50608370387_08f7ebc508_m.jpg'),(4,'Myungrang Hot Dog','4.5','https://live.staticflickr.com/65535/50608370247_d4a8e05606_m.jpg'),(5,'Sul and Beans','4.4','https://live.staticflickr.com/65535/50607505408_1216996c7c_m.jpg'),(6,'Han Bat Sul Lung Tang','4.5','https://live.staticflickr.com/65535/50608370022_0fa640a779_n.jpg'),(7,'Kobawoo House','4.5','https://live.staticflickr.com/65535/50607505163_863bf40f4d_n.jpg'),(8,'Sun Nong Dan','4.3','https://live.staticflickr.com/65535/50608370332_339ef8ce57_m.jpg'),(9,'Oakobing','4.5','https://live.staticflickr.com/65535/50608370262_5702bb458f_m.jpg'),(10,'SomiSomi','4.6','https://live.staticflickr.com/65535/50608370317_c2f3200f21_m.jpg'),(11,'The Bun Shop','4.6','https://live.staticflickr.com/65535/50609066352_3a5f6a0136_m.jpg'),(12,'Cocohodo','4.0','https://live.staticflickr.com/65535/50607505003_8bb7f2b733_n.jpg'),(13,'The Kimbap','4.4','https://live.staticflickr.com/65535/50608251611_652dbf7cba_n.jpg'),(14,'BCD Tofu House','4.2','https://live.staticflickr.com/65535/50608369947_b8f63e8068_n.jpg'),(15,'Zzamong','4.2','https://live.staticflickr.com/65535/50608370392_5a4ef484cf_m.jpg'),(16,'Myung Dong Kyoja','4.2','https://live.staticflickr.com/65535/50607505258_ceded31c19_n.jpg'),(17,'Ma Dang Gook Soo','4.3','https://live.staticflickr.com/65535/50608251701_ed5166c496_n.jpg'),(18,'Yuchun','4.0','https://live.staticflickr.com/65535/50608251886_43551da70e_m.jpg'),(19,'Hae Jang Chon','4.5','https://live.staticflickr.com/65535/50608251526_f373ded43a_n.jpg'),(20,'Quarters Korean BBQ','4.5','https://live.staticflickr.com/65535/50607505388_6769255efa_m.jpg'),(21,'Soowon Galbi ','4.4','https://live.staticflickr.com/65535/50608370312_3cabdea3ee_m.jpg'),(22,'Jjukku Jjukku BBQ','4.4','https://live.staticflickr.com/65535/50607505123_f0ae55c004_n.jpg'),(23,'Gol Tong Chicken','4.7','https://live.staticflickr.com/65535/50608370007_eac7c1c063_n.jpg'),(24,'Michin Dak','4.4','https://live.staticflickr.com/65535/50608370172_cd35f6de5b_n.jpg'),(25,'Kyochon','4.3','https://live.staticflickr.com/65535/50608251691_26bfdf8df6_n.jpg'),(26,'77 Kentucky','4.3','https://live.staticflickr.com/65535/50608251391_daf00b724d.jpg'),(27,'School Food','3.8','https://live.staticflickr.com/65535/50608251831_853731814e_m.jpg'),(28,'Park\'s BBQ','4.5','https://live.staticflickr.com/65535/50608251796_ea53a07480_m.jpg'),(29,'Chosun Galbee','4.2','https://live.staticflickr.com/65535/50607504993_854a65f5c6_b.jpg'),(30,'Gwang Yang BBQ','4.3','https://live.staticflickr.com/65535/50608251521_4dc8cb8b53_n.jpg'),(31,'Get Bbul','4.2','https://live.staticflickr.com/65535/50607505048_1b7b1710ae_n.jpg'),(32,'Dae Bu Do','4.2','https://live.staticflickr.com/65535/50607505033_e9154244e8_n.jpg'),(33,'Hwal A Kwang Jang','4.2','https://live.staticflickr.com/65535/50608370042_4b741c6ef0_n.jpg'),(34,'Crab House ','3.9','https://live.staticflickr.com/65535/50608369972_aaa906e5a9_n.jpg'),(35,'Won Jo Kokerang Agurang','4.0','https://live.staticflickr.com/65535/50608251876_0f65e347de_m.jpg'),(36,'T Equals Fish','4.0','https://live.staticflickr.com/65535/50607505428_5506a82d53_m.jpg'),(37,'Wassada Restaurant','4.0','https://live.staticflickr.com/65535/50607505458_7b63ea53c5_m.jpg'),(38,'Jeju Fresh Fish','4,1','https://live.staticflickr.com/65535/50607505113_6bb2ba5576_n.jpg'),(39,'Anko','4.4','https://live.staticflickr.com/65535/50608251406_429f624ca7_n.jpg'),(40,'Bumsan Organic Milk','4.5','https://live.staticflickr.com/65535/50607504983_477dd7dfbb_n.jpg');
/*!40000 ALTER TABLE `restaurants` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-02 20:48:29
