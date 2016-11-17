<?php

//connect to the server

mysql_connect('localhost','root','root@2016');
mysql_select_db('music');

//Get values passe from form in login.php file

$uname = $_POST['uname'];
$password = $_POST['password'];


//Query to the database 

$result = mysql_query("select uname,password from auth where uname = '$uname' and password ='$password' ")
     or die("Couldn't connect to the database".mysql_error());

$row = mysql_fetch_array($result);

if($row['uname'] == $uname && $row['password']== $password ){
	echo "Login successs !!! Welcome " .$row['uname'];
	header("refresh:3;url=index.html");
	
	} else {
	echo "Sorry uname and password doesn't match";
}
?>
