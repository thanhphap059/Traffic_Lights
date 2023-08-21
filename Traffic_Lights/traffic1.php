<?php
ini_set('display_errors', 1); error_reporting(-1);
// doc du lieu tu website gui ve
include("config.php");

$color = $_POST["r1"];
$time = $_POST["t1"];
$chance = $_POST["c1"];

$sql = "UPDATE traffic
SET color= $color,time = $time, isChanged = $chance
WHERE stt = 2"; 

if(!mysqli_query($conn,$sql)){
  echo "Error: " ,mysql_error($conn);
}

// ngat ket noi voi database
mysqli_close($conn);
?>