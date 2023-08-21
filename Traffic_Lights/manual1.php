<?php
    // Connect to Database
    include("config.php");

    // Write data
    $c1 = $_POST["cl1"];
    // $c2 = $_POST["cl2"];
    // $c3 = $_POST["cl3"];

    $mode1 = $_POST["mode1"];
    // $mode2 = $_POST["mode2"];
    // $mode3 = $_POST["mode3"];   
   
    

    // update lai database
    $sql1 = "update manual set Col1 =$c1 ,Mode1 =$mode1";
    $sql4 = "update readTime set mod1 =$mode1";


    mysqli_query($conn, $sql1);
    mysqli_query($conn, $sql4);

 

    mysqli_close($conn);

?>

