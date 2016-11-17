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


$uname= $_POST['uname'];
$pwd= $_POST['pwd'];

$sql = "select uname,pwd from signin where uname = '$uname' and pwd ='$pwd'";


			
if(!mysqli_query($con,$sql))
{
    echo("Couldn't register Please use correct username and password".mysqli_error($con));
	header("refresh:5;url=sign.html");
}
else
{
    echo "Congrats You have been successfully logged in please wait... ";
    			
}
			

header("refresh:5;url=index.html");

?>
