<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "hall_ticket_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve form data
$name = $_POST['name'];
$roll = $_POST['roll'];
$subject = $_POST['subject'];

// Insert into database
$sql = "INSERT INTO tickets (name, roll, subject) VALUES ('$name', '$roll', '$subject')";

if ($conn->query($sql) === TRUE) {
    echo "New ticket created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
