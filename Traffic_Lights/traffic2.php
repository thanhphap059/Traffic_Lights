<?php
ini_set('display_errors', 1); error_reporting(-1);
// doc du lieu tu website gui ve
include("config.php");

$color = $_POST["r2"];
$time = $_POST["t2"];
$chance = $_POST["c2"];

$sql = "UPDATE traffic
SET color= $color, time = $time, isChanged = $chance
WHERE stt = 3"; 

if(!mysqli_query($conn,$sql)){
  echo "Error: " ,mysql_error($conn);
}

// ngat ket noi voi database
mysqli_close($conn);
?>