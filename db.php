<?php
$host = "localhost";
$dbname = "userDB";
$username = "root";  // default for XAMPP/WAMP
$password = "";      // default is empty

$conn = new mysqli($host, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
?>