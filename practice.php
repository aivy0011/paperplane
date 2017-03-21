<?php
$conn = new mysqli('localhost', 'root', '1234','Ajax');
$data = mysqli_fetch_all(mysqli_query($conn, "SELECT * FROM Practice"));
echo json_encode($data);
?>