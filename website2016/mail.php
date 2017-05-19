<?php
	require_once(realpath(dirname(__FILE__))."/MasterPage.php");
	$mp = new MasterPage();

	if (!empty($_POST["from"]))
		$from = $_POST["from"];
	if (!empty($_POST["message"]))
		$message = $_POST["message"];

	if (empty($from))
	{
		echo "please input from";
		Exit();
	}
	if (empty($message))
	{
		echo "please input message";
		Exit();
	}
	
	$to = "creadz@gmail.com";
	$subject = "Message From Nut.in.th";
	$mailfrom = "no-reply@nut.in.th";

	$message .= "<hr> message from : " . $from;
	$message .= "<br> ip address : " . $_SERVER['REMOTE_ADDR'];
	$message .= "<br> referrer : " . $mp->GetCookies("REF");

	$headers = "MIME-Version: 1.0\r\n";
    $headers.= "From: =?utf-8?b?".base64_encode($mailfrom)."?=<".$mailfrom.">\r\n";
    $headers.= "Content-Type: text/html;charset=utf-8\r\n";
    $headers.= "Reply-To: $reply\r\n";  
    $headers.= "X-Mailer: PHP/" . phpversion();

	if (@mail($to, $subject, $message, $headers))
		echo "Send complete!";
	else
		echo "Can't send message please try again later :(";