<?php
    // Connect to Database
    include("config.php");

    // Write data
    // $c1 = $_POST["cl1"];
    // $c2 = $_POST["cl2"];
    $c3 = $_POST["cl3"];

    // $mode1 = $_POST["mode1"];
    // $mode2 = $_POST["mode2"];
    $mode3 = $_POST["mode3"];   
   
    

    // update lai database
    $sql3 = "update manual set Col3 =$c3 ,Mode3 = $mode3";
    $sql6 = "update readTime set mod3 =$mode3";


    mysqli_query($conn, $sql3);
    mysqli_query($conn, $sql6);

 

    mysqli_close($conn);

?>


