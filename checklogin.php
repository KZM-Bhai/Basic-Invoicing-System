<?php
// echo $email." ".$password;
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "invoicing";

$email = $_POST['email'];
$password = $_POST['password'];

// Create connection
$con = mysqli_connect($servername,$username,$password,$dbname);
// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  exit();
}

$sql = "SELECT * FROM users WHERE email = $email AND password = $password";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "<br> id: ". $row["id"]. " - Name: ". $row["name"]. " " . $row["email"] . "<br>";
    }
} else {
    echo "0 results";
}

$conn->close();