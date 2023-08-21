<?php
// Connect to database
$server = "localhost";
$user = "nguyen123"; 
$pass = "phapphaputut";
$dbname = "Traffic";

$conn = mysqli_connect($server,$user,$pass,$dbname);

// Check connection
if($conn === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
else {echo " Connected !";}
?> 