<?php


    // Write data, goi du lieu tu server len website cung nhan du lieu tu website goi ve server
    $red1 = $_POST["r1"];
    $green1 = $_POST["g1"];
    $yellow1 = $_POST["y1"];

    $red2 = $_POST["r2"];
    $green2 = $_POST["g2"];
    $yellow2 = $_POST["y2"];

    $red3 = $_POST["r3"];
    $green3 = $_POST["g3"];
    $yellow3 = $_POST["y3"];
   
    // Connect to Database
    include("config.php");
    //$conn = mysqli_connect($red1,$green1,$yellow1,$red2,$green2,$yellow2,$red3,$green3,$yellow3);
    // $mode = $_POST["mode"];

    // $choose = $_POST["choose"];
    

    // update lai database
    $sql1 = "update auto set Red = $red1, Yellow = $yellow1, Green = $green1 where stt=1";
    $sql2 = "update auto set Red = $red2, Yellow = $yellow2, Green = $green2 where stt=2";
    $sql3 = "update auto set Red = $red3, Yellow = $yellow3, Green = $green3 where stt=3";

    mysqli_query($conn, $sql1);

    mysqli_query($conn, $sql2);

    mysqli_query($conn, $sql3);

    mysqli_close($conn);

?>

