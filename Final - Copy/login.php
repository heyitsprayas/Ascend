<?php
include 'db.php';

$username = $_POST['username'];
$password = $_POST['password'];

$sql = "SELECT password FROM users WHERE username = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $username);
$stmt->execute();

$result = $stmt->get_result();
if ($result->num_rows === 1) {
  $row = $result->fetch_assoc();
  if (password_verify($password, $row['password'])) {
    echo "Login successful!";

  } else {
    echo "Incorrect password.";
  }
} else {
  echo "Username not found.";
}
?>

