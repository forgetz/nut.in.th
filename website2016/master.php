<?php
session_start();

class MasterPage
{
	function WriteHeader($is_show_menu, $menu_selected)
	{
		$html = '
		<!DOCTYPE html>
		<html lang="en">
		  <head>
			<meta charset="utf-8">
			<meta http-equiv="X-UA-Compatible" content="IE=edge">
			<meta name="viewport" content="width=device-width, initial-scale=1">
			<meta name="description" content="">
			<meta name="author" content="">
			<link rel="shortcut icon" href="favicon.ico">
			<title>:: บ้านร่มไม้ชายคลอง ::</title>
			<link href="../css/bootstrap.min.css" rel="stylesheet">
			<link href="../css/bootstrap-theme.min.css" rel="stylesheet">
			<link href="../css/theme.css" rel="stylesheet">
			<!--[if lt IE 9]><script src="js/ie8-responsive-file-warning.js"></script><![endif]-->
			<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
			<!--[if lt IE 9]>
			  <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
			  <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
			<![endif]-->
		  </head>

		  <body role="document">

			<div class="container">
		';

		if ($is_show_menu)
			$html .= $this->WriteMenu($menu_selected);

		$html .= '

			<div class="theme-showcase" role="main">
				<div class="navbar navbar-default">

		';
		echo $html;
	}

	function WriteFooter()
	{
		$year = date("Y");
		$html = '

				
			</div>
		</div>

		<footer>
			<hr>
			<p>
				<div id="container" class="text-center">
					Copyright &copy; '.$year.'
				</div>
			</p>
		</footer>

		</div>

		<script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
		<script src="../js/bootstrap.min.js"></script>
		<script src="../js/docs.min.js"></script>
		<script src="../js/script.js"></script>

		</body>
		</html>
		';

		echo $html;
	}

	function WriteMenu($menu_selected)
	{
		$html = '
			<div class="navbar navbar-default" role="navigation">
			  <div class="container-fluid">
				<div class="navbar-header">
				  <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				  </button>
				  <a class="navbar-brand" href="index.php">Administartor</a>
				</div>
				<div class="navbar-collapse collapse">
				  <ul class="nav navbar-nav">
					<li class="'.($menu_selected == "content" ? "active" : "").'"><a href="data_list.php?tbl=content">News</a></li>
				  </ul>
					<ul class="nav navbar-nav navbar-right">
						<li><a href="logout.php">Logout</a></li>
					</ul>
				</div><!--/.nav-collapse -->
			  </div>
			</div>
		';
		return $html;
	}

	function WriteTable($list, $header, $action)
	{
		//if (!is_array($list))
		//	return;
		//if (!is_array($header))
		//	return;
		//if (!is_array($action))
		//	return;
		
		//$bar = ucfirst(strtolower($bar));
		print_r($header);
	}

	function CheckLogin()
	{
		if (empty($_SESSION["baanrommai"]))
			echo "<script>window.location ='login.php'</script>";
	}

}