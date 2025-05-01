-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 01, 2025 at 11:20 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `managment`
--

-- --------------------------------------------------------

--
-- Table structure for table `batches`
--

CREATE TABLE `batches` (
  `id` int(11) NOT NULL,
  `batch_name` varchar(100) NOT NULL,
  `course_id` int(100) NOT NULL,
  `start_time` time NOT NULL,
  `end_time` time NOT NULL,
  `created_date` datetime NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `is_deleted` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `batches`
--

INSERT INTO `batches` (`id`, `batch_name`, `course_id`, `start_time`, `end_time`, `created_date`, `status`, `is_deleted`) VALUES
(15, 'Tech_DC', 2, '09:00:00', '22:00:00', '0000-00-00 00:00:00', 1, 0),
(18, 'DCA 5 to 7', 1, '17:00:00', '06:00:00', '0000-00-00 00:00:00', 1, 0),
(20, 'ACCP 5 to 67', 8, '17:00:00', '18:00:00', '0000-00-00 00:00:00', 1, 0),
(21, 'ACCP 2:30 To 45', 6, '14:30:00', '15:30:00', '0000-00-00 00:00:00', 1, 0),
(22, 'CPCT1', 7, '15:35:00', '16:35:00', '0000-00-00 00:00:00', 1, 0),
(23, 'Tech_DCP 2024', 7, '09:30:00', '16:30:00', '0000-00-00 00:00:00', 1, 0),
(24, '', 0, '00:00:00', '00:00:00', '0000-00-00 00:00:00', 1, 0),
(25, 'DCA 5 to 7', 1, '17:00:00', '19:00:00', '0000-00-00 00:00:00', 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `cities`
--

CREATE TABLE `cities` (
  `city_id` int(11) NOT NULL,
  `city_name` varchar(255) NOT NULL,
  `city_status` tinyint(2) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cities`
--

INSERT INTO `cities` (`city_id`, `city_name`, `city_status`) VALUES
(1, 'Khargone', 1),
(2, 'Khargone', 1),
(3, 'Kamodwada', 1),
(4, 'Kasrawad', 1),
(5, 'Multhan', 1),
(6, 'Bistan', 1),
(7, 'Gogawan', 1),
(8, 'Maheshwar', 1),
(9, 'Indore', 1),
(10, 'Badwani', 1),
(11, 'Dewas', 1),
(12, 'Damoh', 1),
(13, 'Mahow', 1),
(14, 'Dhar', 1),
(15, 'Mandoo', 1),
(16, 'Bhopal', 1),
(18, 'Gujrat', 1),
(19, 'Bhikngoan', 1),
(20, 'Khandwa', 1),
(21, 'Sanawad', 1),
(22, 'burhanpur', 1);

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `id` int(11) NOT NULL,
  `couses_name` varchar(150) NOT NULL,
  `duration` varchar(100) NOT NULL,
  `fees` int(11) NOT NULL,
  `status` tinyint(2) NOT NULL DEFAULT 1,
  `created_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `couses_name`, `duration`, `fees`, `status`, `created_date`) VALUES
(1, 'DCA', '6 Month', 3500, 1, '0000-00-00 00:00:00'),
(5, 'Tally', '6 Month', 4000, 1, '0000-00-00 00:00:00'),
(6, 'ACCP Level 2', ' Month3', 3500, 1, '0000-00-00 00:00:00'),
(7, 'CPCT', '6 Month', 4500, 1, '0000-00-00 00:00:00'),
(8, 'SSC GD', '8 month', 3000, 1, '0000-00-00 00:00:00'),
(9, 'PGDCA', '1 year', 24000, 1, '0000-00-00 00:00:00'),
(13, 'Full Stack', '1 year', 24000, 1, '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(70) NOT NULL,
  `pass` varchar(50) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `qualification` varchar(100) NOT NULL,
  `gender` varchar(6) NOT NULL,
  `address` text NOT NULL,
  `role` tinyint(2) NOT NULL DEFAULT 2,
  `status` tinyint(2) NOT NULL DEFAULT 1,
  `created_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`id`, `name`, `email`, `pass`, `phone`, `qualification`, `gender`, `address`, `role`, `status`, `created_date`) VALUES
(1, 'Darshana', 'darshana@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', '8253052626', 'BSC', 'Female', 'Kamodwada', 1, 1, '2025-04-19 10:47:56'),
(6, 'Kirti', 'kirti@gmail.com', '', '9753740406', 'BA', '', 'Khargone', 2, 1, '0000-00-00 00:00:00'),
(9, 'param', 'param@gmail.com', '59ffa1e6a9606fe25ce62a0e59720661', '8527413698', 'MBA', '', 'Khargone', 2, 1, '0000-00-00 00:00:00'),
(10, 'Nikita', 'abc@gmail.com', '59ffa1e6a9606fe25ce62a0e59720661', '9632587415', 'BSC', '', 'Khargone', 2, 1, '0000-00-00 00:00:00'),
(11, 'Manikant', 'mkp@gmail.com', 'eca07335a33c5aeb5e1bc7c98b4b9d80', '7879670071', 'BE', '', 'Gawla', 2, 1, '0000-00-00 00:00:00'),
(19, 'Mahipal Tomar sir', 'mahi_t01@yahoo.com', 'eca07335a33c5aeb5e1bc7c98b4b9d80', '9754221665', 'MCA', '', 'Khargone', 2, 1, '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `student_registration`
--

CREATE TABLE `student_registration` (
  `stud_id` int(11) NOT NULL,
  `stude_name` varchar(100) NOT NULL,
  `stude_fname` varchar(100) NOT NULL,
  `stude_email` varchar(80) NOT NULL,
  `stude_dob` date NOT NULL,
  `stude_snum` varchar(10) NOT NULL,
  `stude_pnum` varchar(10) NOT NULL,
  `gender` varchar(6) NOT NULL,
  `category` varchar(20) NOT NULL,
  `betch_id` int(11) NOT NULL,
  `education` varchar(100) NOT NULL,
  `address` varchar(255) NOT NULL,
  `city_id` int(11) NOT NULL,
  `village_id` int(11) NOT NULL,
  `is_delete` int(11) NOT NULL DEFAULT 0,
  `status` tinyint(2) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `student_registration`
--

INSERT INTO `student_registration` (`stud_id`, `stude_name`, `stude_fname`, `stude_email`, `stude_dob`, `stude_snum`, `stude_pnum`, `gender`, `category`, `betch_id`, `education`, `address`, `city_id`, `village_id`, `is_delete`, `status`) VALUES
(43, 'Rudransh Meena', 'Ajay Meena', 'meena@gmail.com', '2009-07-14', '9111637821', '9753740406', 'male', 'OBC', 20, '7th', '', 0, 0, 0, 1),
(44, 'Pratham Meena', 'Manoj Meena', 'meena@gmail.com', '2005-02-04', '8253052626', '9753740406', 'male', 'OBC', 21, '12th', '', 0, 0, 0, 1),
(45, 'Lucky Meena', 'Sanjay Meena', 'meena@gmail.com', '2006-07-13', '9111637821', '9753740406', 'male', 'OBC', 21, '12th', '', 0, 0, 0, 1),
(46, 'Kirti Meena', 'Sanjay Meena', 'meena@gmail.com', '2005-05-10', '9977907342', '6260124224', 'female', 'OBC', 20, '11th', '', 0, 0, 0, 1),
(47, 'Pratham Meena', 'Manoj Meena', 'meena@gmail.com', '2008-12-06', '9977907342', '9753740406', 'male', 'OBC', 23, '12th', '', 4, 4, 0, 1),
(48, 'Sumit Verma', 'Varma Ji', 'varma@gmail.com', '2025-04-10', '8253052626', '9753740406', 'male', 'OBC', 23, 'UG', '', 2, 6, 0, 1),
(49, 'Darshana Meena', 'Manoj Meena', 'darshana@gmail.com', '2005-05-10', '8253052626', '6260124224', 'female', 'OBC', 23, 'UG', '', 1, 6, 0, 1),
(50, 'Kirti Meena', 'Manoj Meena', 'kirti@gmail.com', '0025-05-10', '8253052626', '9753740406', 'female', 'OBC', 18, 'UG', '143,Ram Mandir, kamodwada', 1, 1, 0, 1),
(51, 'Shourya', 'Mahipal Tomar', 'mahi_t01@yahoo.com', '2008-05-10', '8253052626', '9753740406', 'male', 'GEN', 23, '12th', 'Sudama Nagar', 1, 1, 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `villages`
--

CREATE TABLE `villages` (
  `village_id` int(11) NOT NULL,
  `village_name` varchar(200) NOT NULL,
  `city_id` int(11) NOT NULL,
  `status` tinyint(2) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `villages`
--

INSERT INTO `villages` (`village_id`, `village_name`, `city_id`, `status`) VALUES
(1, 'Kamodwada', 1, 1),
(2, 'Bamndi', 0, 1),
(3, 'Bamndi', 0, 1),
(4, 'Bhasnerr', 0, 1),
(5, '', 0, 1),
(6, 'Khamkheda', 0, 1),
(7, 'Bhopada', 0, 1),
(8, 'Bhopada', 0, 1),
(9, 'gawla', 0, 1),
(10, 'Barud', 0, 1),
(11, 'Badgav', 0, 1),
(12, 'kakdgav', 0, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `batches`
--
ALTER TABLE `batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`city_id`);

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `student_registration`
--
ALTER TABLE `student_registration`
  ADD PRIMARY KEY (`stud_id`);

--
-- Indexes for table `villages`
--
ALTER TABLE `villages`
  ADD PRIMARY KEY (`village_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `batches`
--
ALTER TABLE `batches`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `cities`
--
ALTER TABLE `cities`
  MODIFY `city_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `student_registration`
--
ALTER TABLE `student_registration`
  MODIFY `stud_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT for table `villages`
--
ALTER TABLE `villages`
  MODIFY `village_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
