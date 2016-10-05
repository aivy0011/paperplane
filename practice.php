<?php
$conn = new mysqli('localhost', 'root', '1234','Ajax');
$data = mysqli_fetch_array(mysqli_query($conn, "SELECT * FROM Practice"));
echo json_encode($data);
?>