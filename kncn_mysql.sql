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
) ENGINE=InnoDB AUTO_INCREMENT=203 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `songs`
--

LOCK TABLES `songs` WRITE;
/*!40000 ALTER TABLE `songs` DISABLE KEYS */;
INSERT INTO `songs` VALUES (27,'TO THE MOON - hooligan. (Final Beat)','OiR4Wqi7pGY',8),(28,'Justin Caruso - Broken Hearts feat. Hilda (Official Video)','CeLmP8mT5SI',8),(29,'(Paddy Sun) Sunflower','uzOE3c12w0U',8),(30,'Point the star | Lofi','cBsUr4UMcD0',8),(31,'nawhij - cloud nine','FSuNBT1ifVY',1),(32,'Autumn Jazz','Q3saFny02KU',1),(33,'nawhij(나우히즈) - with you','sls44rlHpRg',1),(34,'Soulitune - Reverie | Lofi','fc-c5nxQBS4',1),(35,'Jazz Trio loop music _ Imagination','Vg0o_MbV310',1),(36,'nawhij - hydrangea','BJYEz2oPRms',1),(37,'Soulitune - Pal | Lofi','Wj-fDD2b47A',1),(38,'Kupla - Lavender','n61ULEU7CO0',1),(39,'마음 (Heart)','B2wp1mBuV74',3),(40,'BTS - 봄날 (Spring Day)','lKlSesz-V-8',3),(41,'WInter -Vivaldi','diXRvGwjFz8',4),(42,'concerto for 4 violins in b minor, rv 580, i. allegro (vivaldi) [il giardino armonico]','RnkxLb2KaXA',4),(43,'- Precious Gems by Salon Dijon','ahhuDt6WIUg',4),(44,'partita in c moll, i. prélude (bach) [evangelina mascardi]','inUhw6L8ebA',4),(46,'Kung Fu Way - Gabriel Saban - Tian Bo - Cézame Trailers','El4BiGHVQ3U',6),(47,'Batman','9bUMOSM-9Kg',7),(48,'BLACKPINK - \'Pretty Savage\' OFFICIAL REAL INSTRUMENTAL','YVJC6bSvd-o',8),(49,'LE SSERAFIM - ANTIFRAGILE | Instrumental','ttYwgwtFzus',8),(50,'Driftveil City: 8-Bit Remix','scQu6EPsuxw',8),(51,'Lindsey Stirling - Senbonzakura','6-wEAeNcA_A',8),(52,'Bad Apple - (Orchestral Arrangement) Instrumental','TxTprtLZurY',8),(53,'Zelda Music To Relax/Study/Work/Game','MXDF0wVcWfA',2),(54,'Relaxing Zelda Music with Campfire Ambience','sWtEYPva4A0',2),(55,'Zelda & Sleep','MTrZXHaXPrU',2),(56,'Zelda & Chill Trilogy','oCaOSz13h_o',2),(57,'Relaxing Legend of Zelda Music (COMPLETE)','-Siljd9PwKs',2),(58,'⛩️ Kakariko Village Sunset ⛩️ Zelda Ambience & Optional Music','bjqEXBmBTO8',2),(59,'Relaxing Zelda Music (Slowed + Reverb) with Campfire Ambience','2Rd0aSO59bE',2),(60,'A Long Night in Hyrule - Relaxing Zelda Music (Up to TotK)','3RtTtRNJby4',2),(61,'Relaxing Zelda Music in the Forest','KNMbDIKJ6T0',2),(62,'Top 100 Zelda Songs of All Time (Including TOTK)','No5WjGQEbQ0',2),(63,'Zelda but its lofi beats','25Bc1rHffu4',2),(64,'Beautiful Relaxing Music - The Legend of Zelda','SASzfJ-E05I',2),(65,'The Legend Of Zelda - Breath Of The Wild Theme | Chill Lofi Mix','TyuJoE-CIEo',2),(66,'Zelda Mix','GgXkhnsteQw',2),(67,'Beautiful Music for Relaxing-Studying  | The Legend of Zelda','TR1Jymo2O4w',2),(68,'Top 25 Most Popular Zelda: Breath of the Wild Music','cewNznnMpqU',2),(69,'Zelda - Song of Storms','dBCEiOavRy0',2),(70,'Top 30 The Legend of Zelda Songs of All Time - 2023','6UlxJBq44sM',2),(71,'1 Hour of Relaxing and Beautiful Zelda Music','wb_E3HnLwG4',2),(72,'Epic Zelda Music (Up to Tears of the Kingdom)','5zN3s23gfHw',2),(73,'Relaxing Breath of the Wild music with rain','EdHGrnuCEo4',2),(74,'A Storm over Hyrule ⛈️ Zelda BOTW Towns Ambience & Music','HGq5AfuYAIo',2),(75,'Relaxing Zelda Music to Study or Chill (including Tears of the Kingdom music!)','oq7sozUfrCQ',2),(76,'A Long Day in Hyrule - Relaxing Zelda Music (Up to TotK)','cPYw91PqYMg',2),(77,'Lofi Music ? Music to put you in a better mood ~ Study music - lofi / relax / stress relief','z8HGd0zIewY',1),(78,'Wednesday Vibes ? Calm Your Mind ~ Lofi hip hop mix - Lofi music for sleep/study/relax/aesthetic','in5u5xZorMQ',1),(79,'lofi hip hop radio ? - beats to relax/study to','jfKfPfyJRdk',1),(80,'Quiet ? Lofi Keep You Safe ? Deep focus Study//Work [ Lofi hip hop - Lofi chill ]','JdqL89ZZwFw',1),(81,'90u0027s lofi city ? rainy lofi hip hop [ chill beats to relax / study to ]','Ah7i5EFVDqA',1),(82,'LOFI LOVEE - Sourav Joshi Vlogs | Priya Dhapa | Bharti | Haarsh | Ved Sharma | Asees Kaur','wRqJVxxA08c',1),(83,'Lofi Work Vibes ? Chill Lofi Mix to Boost Your Energy for The Office Space ~ Upbeat Work Lofi','JUTo8Wfi0eQ',1),(84,'old songs but itu0027s lofi remix','BrnDlRmW5hs',1),(85,'Chill Vibes - Lofi hip hop mix ~ Stress Relief, Chill Music','Uv9URjIBtUQ',1),(86,'RAINING IN ＯＳＡＫＡ ?️ Rain Lofi Songs To Make You Escape From Reality ?️ Night Lofi Playlist','MZhivjxcF-M',1),(87,'1 A.M Study Session ? [lofi hip hop/chill beats]','lTRiuFIWV54',1),(88,'Chill Lofi Mix [chill lo-fi hip hop beats]','CLeZyIID9Bo',1),(89,'Best of lofi hip hop 2021 ✨ [beats to relax/study to]','n61ULEU7CO0',1),(90,'Rasraj Ji Maharaj - वीर हनुमाना अति बलवाना - Lofi Version Veer Hanumana Ati Balwana - LoFi bhajan','Dlu4KGrnmZg',1),(91,'Work Lofi ? Lofi Deep Focus Study Work Concentration [chill lo-fi hip hop beats]','FkfEMReEl5g',1),(92,'lofi songs for slow days','AzV77KFsLn4',1),(93,'Work & Study Lofi Jazz - Relaxing Smooth Background Jazz Music for Work, Study, Focus, Coding','CfPxlb8-ZQ0',1),(94,'Lofi Breeze • lofi ambient music | chill beats to relax/study to','th8sZnMm9Nw',1),(95,'Romantic Guitar Music ❤️ The Best Guitar Melodies For Your Most Romantic Moments ❤️','irz1XRFZA0Q',1),(96,'Ambient Study Music To Concentrate - 4 Hours of Music for Studying, Concentration and Memory','sjkrrmBnpGE',1),(97,'Study Lofi ? Lofi Deep Focus Study Work Concentration ? Study beats ~ lofi / relax / stress relief','8pDsDNq10hA',1),(98,'[Ghibli Music Collection 2023] ? Best Ghibli Piano Collection ? BGM for work/relax/study','Sx4xVyXHl60',5),(99,'Best Ghibli Piano? Beautiful Timeless Piano Pieces From Ghibli Movies ?Ghibli Music 2023','zaXULnWg2C4',5),(100,'Piano Ghibli Collection 1','HGl75kurxok',5),(101,'The best Ghibli music of all time?Music that stops thinking, relieves stress your soul','K1FWQIATSUg',5),(102,'Studio Ghibli   Music Collection Piano and Violin Duo 株式会社スタジオジブリ  Relaxing music song','XKd-qdNNko4',5),(103,'【Playlist】공부할때 듣기 좋은 지브리 ost 모음 ㅣ 센과 치히로 하울의 움직이는 성 마녀 배달부 키키 토토로 ㅣ 수면 공부 카페 음악 ㅣ 중간 광고 없음','ASCMw-UCafA',5),(104,'The Best Piano Ghibli Music ? Must Listen At Least Once ?Spirited Away, My Neighbor Totoro','lrmDoJkZjns',5),(105,'Studio Ghibli Summer Night Piano Collection Sleep Meditation, Calm Music, Relaxing(No Mid-roll Ads)','7voSN82FGF0',5),(106,'Relaxing music without ads Ghibli Studio Ghibli Concert [BGM for work / healing / study] #2','yYUQf6G4CJc',5),(107,'2時間のジブリ癒しリラックス ? 夏のジブリBGM ⛅ ジブリのスタジオミュージック','7kwAlLbx91s',5),(108,'美しい2時間のスタジオジブリ音楽  ? ジブリ史上最高のリラックス BGM','-Zk7Y-8mf6Q',5),(109,'2 Hours Of Ghibli Music ? Relaxing BGM For Healing, Studying, Working, And Sleeping Ghibli Studio','XqkMGok0wt0',5),(110,'[1 HOUR] Ghibli Concert Piano?A collection of good music to listen to while studying or working','4q6kxL3iSuw',5),(111,'Joe Hisaishi : Studio Ghibli Experience, Part 1','0jZNKV5ROBM',5),(112,'#GhibliJazz #CafeMusic - Relaxing Jazz & Bossa Nova Music - Studio Ghibli Cover','3jWRrafhO7M',5),(113,'studio ghibli playlist (relax, sleep, study)?','PHklnuOvxfg',5),(114,'[Ghibli Piano Collection] Relaxing Piano Music -  Studying, Coffee, Reading, Healing - Ghibli Music','jvM3rO4Ihd4',5),(115,'Ghibli Relaxing || 吉卜力钢琴 ? 轻松的音乐 ?? 千与千寻, 天空之城, 哈尔的移动城堡,...','xTY0SlyVfCQ',5),(116,'【Beautiful Ghibli Collection】美しいピアノのジブリのメロディー、ポジティブなエネルギーのジブリ音楽 ?  ジブリメドレーピアノライブストリーム','TjPwQlOjzb8',5),(117,'Studio Ghibli Music Collection (Relaxing Ghibli Music)','JzRfvrLNoOQ',5),(118,'Studio Ghibli Summer Night Deep Sleep Piano Medley(No Mid-roll Ads)','oQUA3tQS0To',5),(119,'TO KILL A GOD | Epic Battle Dark Heroic Music | Epic Music Mix by @audiomachine','cej2O-mem64',6),(120,'Two Steps From Hell - 25 Tracks Best of All Time | Most Powerful Epic Music Mix [Part 1]','9O4_awEHh1g',6),(121,'「Hiroyuki Sawano」- 1 Hour Epic Battle Music 『澤野 弘之＆戦の歌』 VOL.2','yJBLzWvCK-g',6),(122,'THE POWER OF EPIC GAMING MUSIC | Best Music Mix/Playlist','Pp8eBv0jSLc',6),(123,'1 HOUR AGGRESSIVE BATTLE MIX | ♫ Most Badass Epic Heavy Metal Music Ever ♫ - Vol. 2','Cu7xwv2IePE',6),(124,'EPIC LIVE MUSIC -  FIRE SPIRIT DANCE | Best Epic Heroic Battle Orchestral Music #livestream','rgMaJBt_JhI',6),(125,'EL RAPIDIN: 5 #NOTICIAS PARA EMPEZAR TU DÍA','Bnz7hHHc5IU',6),(126,'THE DAY WE CHOOSE TO DIE | Epic Dramatic Strings - Powerful Atmospheric Orchestral Music Mix','RwJscjiB0Sc',6),(127,'Two Steps From Hell & Thomas Bergersen - 36 Tracks Best of All time | Most Powerful Epic Music Mix','6FJXjJeOU6Q',6),(128,'Epic and Energetic Videogame Music [Part 1]','OPTEZVb0f54',6),(129,'LEGENDARY | MOST EPIC  BATTLE MUSIC | 1 Hour Orchestral Rock Mix | Antti Martikainen','NtqRjGP3uoY',6),(130,'Hammer Of The Gods II - THE POWER OF EPIC BATTLE MUSIC | Powerful Orchestral Music','-qvoRZKXO0k',6),(131,'The Rise Of The King | THE POWER OF EPIC MUSIC - Epic Powerful Battle Orchestral Music','plUbdkxhov8',6),(132,'Most Epic Battle Music Ever: Game Changer* (Action/Rock)','ncCRIlCQL1A',6),(133,'3 HOURS Most EPIC POWERFUL BATTLE MUSIC Powerful Instrumental Music Vol 1 PURE EPICfreevideoconverte','78JE0h8Y3g0',6),(134,'FOR FREEDOM | Epic Battle Heroic Powerful Music | Best Epic Gaming Music Mix','K4Ft1trpwFg',6),(135,'Worldu0027s Greatest Battle Music Ever: Supercharger','a727SZcZieE',6),(136,'Epic Video Game Music to Pump You Up','irb-NCyyyeQ',6),(137,'Epic Battle Music: \"Armageddon\" — Alibi Music','IsyfHcxjpn0',6),(138,'#1 ♫ Gaming Music Mix | Rock Mix【1 Hour】♫','lijFuLFI9RQ',6),(139,'CALL TO ARMS | Best Epic Heroic Orchestral Music | Classical Music Mix for your Last Fight','D8nHPpMAQP4',6),(164,'Relaxing Undertale Music','pwkaSIq5giQ',7),(165,'1 Hour of Relaxing Undertale/Deltarune Music (Remastered)','svFj4Ksg7FI',7),(166,'♪ UNDERTALE | 10 Hours of Relaxing Music with Soft Rain ♪ (Undertale black screen)','m_eJ3BUCub0',7),(167,'Lofi Undertale - Beats To Stay Determined To','A7vMrjsBMTI',7),(168,'Undertale: Home (1 Hour Warm Fireplace Ambience)','0d8R1u4vj1Q',7),(169,'Minecraft - A perfectly cozy evening down','L4ZTu1ODGjY',7),(170,'peaceful rainy day ? calm your anxiety, relaxing music - lofi hip hop mix - aesthetic lofi','vHc3e46ahfY',7),(171,'Fallen Down but make it *E X T R A* nostalgic (30 MINUTE LOOP)','JdeJ-ct6S4E',7),(172,'? Video Game Lofi & Chill Beats ? 24/7 Radio','re_K5hDjd1M',7),(173,'thundertale ☂ undertale ost + thunderstorm sounds','-KH6ZSavJ6Y',7),(174,'Undertale  Shop |  1 hour loop','sbi5TFRjhio',7),(175,'undertale song mix sleeping/lucid dreaming (6hz theta waves + fire crackling)','ij7oqExWj9Y',7),(176,'Undertale OST: Quiet Water 10 Hours HQ','h2zMIjxBtJk',7),(177,'1 Hour of Calm To','iziOnr-OpU8',7),(178,'Undertale Yellow OST: 025 - Relaxation','2QXq9LBRdWY',7),(179,'Relaxing Undertale Music','vV7A_bD8Kgo',7),(180,'Undertale | Ambient Music - Revised - With Rain','URY-EqtnYWo',7),(181,'UNDERTALE OST | Ambient Music with Soft Rain (Study and Sleep) 10 HOUR BLACK SCREEN','D0defgAFqKA',7),(182,'Snowdin Radio [LoFi / Chill Mix] *Beats To Study/Relax To*','c12bBLFfluQ',7),(183,'Undertale and Deltarune sleeping playlist with rain sounds','AL-3vB5Zitw',7),(184,'Its Raining Somewhere Else (10 hours with ambiance)','TIqbrZCZWng',7),(185,'a journey filled with determination | an Undertale playlist (Pacifist route)','7CH4TEbkTpM',7),(186,'[Video Game Music 24/7] ~ Rhythm and Pixels Radio ~ 8-bit & 16-bit Classics & Deep Cuts','rTS4a3XxKvU',7),(187,'Top 150 Best NES Music Tracks - 5 Hours - The Only NES Playlist you´ll ever need','9bUMOSM-9Kg',7),(188,'Ultimate 8-bit Electro Gaming Music Mix 2020 - Chiptune Music Mix','xb0cMDEyMzg',7),(189,'31 Best NES (Famicom) Soundtracks [Nintendo Music Tribute]','-C2WFIz7ifs',7),(190,'? Video Game Lofi & Chill Beats ? 24/7 Radio','re_K5hDjd1M',7),(191,'[8bit] PEACEKEEPER | That Time I Got Reincarnated as a Slime S3 OP1 | Chiptune | TenSura | 転スラ','W1C54RsvVlY',7),(192,'Sydnie Christmas wins GOLDEN BUZZER with beautiful cover of u0027Tomorrowu0027 | Auditions | BGT 2024','pjyy4tYZFDc',7),(193,'8-bit Electro Chiptune Music Mix 2021 - Neon Rain','uyP4HI7zZao',7),(194,'8-Bit Fantasy & Adventure Music','5bn3Jmvep1k',7),(195,'Ultimate 8-bit Electro Gaming Music Mix 2017 - Chiptune Music Mix - Nitro Fun, Vexento, FadeX & More','VKV9PKI4X2g',7),(196,'songs to fill an empty head - (ou0027 ▽ u0027 )o☆ [ various nintendo music ]','g9gHC2quF3A',7),(197,'Relaxing Video Game Music (NES Edition)','DYdAL08xhEs',7),(198,'8 Bit Halloween - Dark Spooky Game Music By HeatleyBros','Z5P8Fm9dcp4',7),(199,'Canu0027t sleep? Try this playlist • Video Game Music for Sleeping','JK1KWXoCbxg',7),(200,'Snake Eater - Big Band Version ft. Tiffany Mann (The 8-Bit Big Band)','sGuFZ_a7RU0',7),(201,'etxrnall - your love is my drug (8bit slowed)','nWKPYs54INA',7),(202,'► Best of 8-bit Electro Gaming Mix September 2015 ◄ ~(￣▽￣)~ | Xefox Music','k0bQuzp9Iss',7);
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
INSERT INTO `themes` VALUES (1,'Lofi'),(2,'Zelda'),(3,'Kpop'),(4,'Classical'),(5,'Ghibli'),(6,'Epic'),(7,'8-bit'),(8,'Misc');
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

-- Dump completed on 2024-04-25  2:57:46
