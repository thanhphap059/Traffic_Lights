<?php
header('Content-Type: application/json');

// dang nhap vao database
include("config.php");

// Doc gia tri den giao thong tu database
$sql1 = "select * from manual";
$result1 = mysqli_query($conn,$sql1);

$data1 = array();
foreach ($result1 as $row1){
    $data1[] = $row1;
}

mysqli_close($conn);
echo json_encode($data1);
//echo json_encode($data);

?>

