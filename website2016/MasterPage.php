<?php
session_start();

class MasterPage
{
	public  function __construct()
	{
	}

	public function SetCookies($name, $value)
	{
		$expire = time() + 60*60*24*30;
		setcookie($name, $value, $expire);
	}
	public function IsSetCookies($name)
	{
		return isset($_COOKIE[$name]);
	}
	public function GetCookies($name)
	{
		return $_COOKIE[$name];
	}
	public function GetColor($value)
	{
		$name = "COLOR";
		if ($this->IsSetCookies($name))
			return $this->GetCookies($name);
		if ($value == 1)
		{
			$this->SetCookies($name, "1");
			return 1;
		}
		else if ($value == 2)
		{
			$this->SetCookies($name, "2");
			return 2;
		}
		return 0;
	}

	public function WriteHeader($style)
	{
		if ($style == 1)
			$template = '<link rel="stylesheet" href="css/color-w.css">';
		else
			$template = '<link rel="stylesheet" href="css/color.css">';
		echo '
<!DOCTYPE html>
<!--[if IE 8]><html class="no-js lt-ie9" lang="en" > <![endif]-->
<!--[if gt IE 8]><!--><html class="no-js" lang="en" > <!--<![endif]-->

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width">
	<title>:: nut.in.th ::</title>
	<meta http-equiv="Content-Language" content="th"> 
	<meta http-equiv="Content-Type" content="text/html; charset=window-874"> 
	<meta http-equiv="Content-Type" content="text/html; charset=tis-620">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"> 

	<link rel="icon" href="favicon.ico" type="image/x-icon">

    <meta property="og:title" content=":: nut.in.th :: website"/>
    <meta property="og:image" content="http://nut.in.th/img/me4.jpg"/>
    <meta property="og:site_name" content=":: nut.in.th :: website"/>
    <meta property="og:description" content="nut.in.th website, profile, about nat, facebook.com/forgetz"/>
    <meta property="og:url" content="http://nut.in.th/"/>

	<link rel="stylesheet" href="css/foundation.css">
	<link rel="stylesheet" href="css/master.css">
	'.$template.'
	<script src="js/jquery-1.10.2.min.js"></script>
	<script src="js/jquery-ui-1.10.3.min.js"></script>
	<script src="js/vendor/custom.modernizr.js"></script>
	<script src="js/core.js"></script>
</head>
<body>
		';
	}

	public function WriteFooter()
	{
		echo '

</body>
</html>
		';
	}

	public function Trace()
	{
		$browserAgent = $_SERVER['HTTP_USER_AGENT'];
		$ipaddress = $_SERVER['REMOTE_ADDR'];
		//$referer = $_SERVER["HTTP_REFERER"];

		$this->WriteLog("ip : ".$ipaddress);
		//$this->WriteLog("browser : ".$browserAgent);
		//$this->WriteLog("ref : ".$referer);
		//$this->WriteLog("-----------------------------------------------");
	}

	public function WriteLog($traceMessage)
	{
		date_default_timezone_set("Asia/Bangkok");
		$date = date('Y-m-d');
		$logFile = "logs/trace_$date.log";
		$file = @fopen($logFile, 'a');
		if ($file == false)
			return false;
		$datenow = date('H:i:s');
		$traceMessage = "\n\r\n\r[ " . $datenow . " ] ". $traceMessage;
		fwrite($file, $traceMessage);
		fclose($file);
	}
}