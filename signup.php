<?php

//connect to the server

$con = mysqli_connect('127.0.0.1','root','root@2016');

//check if it is connected
if(!$con)
{
    
    echo "Error Connecting to the server";
}

elseif(!mysqli_select_db($con,'signup'))
{
    echo "Database not found";
}

//now sql commands

$name= $_POST['name'];
$lname= $_POST['lname'];
$uname= $_POST['uname'];
$pwd= $_POST['pwd'];
$email= $_POST['email'];
$phone= $_POST['phone'];
$gender= $_POST['gender'];
$location= $_POST['location'];

$sql = "insert into signin (name, lname, uname, pwd, email, phone, gender, location )"." values ('$name','$lname','$uname','$pwd','$email','$phone','$gender','$location')";


			
if(!mysqli_query($con,$sql))
{
    die("Query Failes!".mysqli_error($con));
}
else
{
    echo "Data inserted successfully";
    echo "PLease wait opening login page";			
}
			

header("refresh:5;url=sign.html");

?>
