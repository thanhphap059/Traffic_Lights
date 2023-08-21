<?php
    // Connect to Database
    include("config.php");

    // Write data
    // $c1 = $_POST["cl1"];
    $c2 = $_POST["cl2"];
    // $c3 = $_POST["cl3"];

    // $mode1 = $_POST["mode1"];
    $mode2 = $_POST["mode2"];
    // $mode3 = $_POST["mode3"];   
   
    

    // update lai database
    $sql2 = "update manual set Col2 =$c2 ,Mode2 = $mode2";  //update mau sac va che do auto hay manual
    $sql5 = "update readTime set mod2 =$mode2";

    //goi cau lenh di
    mysqli_query($conn, $sql2);  //tham so conn server cua minh, tham so sql2 la cau lenh minh muon goi
    mysqli_query($conn, $sql5);

 
    //ngat ket noi
    mysqli_close($conn);

?>

