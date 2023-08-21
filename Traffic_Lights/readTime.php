<?php
header('Content-Type: application/json');

// dang nhap vao database
include("config.php");

// Doc gia tri den giao thong tu database
$sql = "select * from readTime";
$result = mysqli_query($conn,$sql);

$data = array();
foreach ($result as $row){
    $data[] = $row;
}

mysqli_close($conn);
echo json_encode($data);

?>

<!-- Code PHP de doc du lieu tu web site goi xuong cung nhu lay trang thai hien tai goi len web site--> 