<?php
	require_once(realpath(dirname(__FILE__))."/MasterPage.php");
	$mp = new MasterPage();

	if (!empty($_GET["s"]))
	{
		$mp->SetCookies("COLOR", $_GET["s"]);
		$s = $_GET["s"];
	}
	else if ($mp->IsSetCookies("COLOR"))
		$s = $mp->GetCookies("COLOR");
	else
		$s = 0;

	$n = "";
	if (!empty($_GET["n"]))
	{
		$n = $_GET["n"];
		$n = strtolower($n);
	}
	
	$mp->SetCookies("REF", @$_SERVER["HTTP_REFERER"]);
	$mp->WriteHeader($s);
?>
	<link href='http://fonts.googleapis.com/css?family=Pathway+Gothic+One' rel='stylesheet' type='text/css'>
	<div class="container">

		<div class="centent">

			<div class="menu">
				<span class="">> 
					<a id="linkHome" href="#" onclick="LoadSectionContent('#dvContent', 'home.php', '#linkHome');">home</a>&nbsp;&nbsp;
					<a id="linkAbout" href="#" onclick="LoadSectionContent('#dvContent', 'about.php', '#linkAbout');">about</a>&nbsp;&nbsp;
					<a id="linkSkill" href="#" onclick="LoadSectionContent('#dvContent', 'skill.php', '#linkSkill');">skill</a>&nbsp;&nbsp;
					<a id="linkWork" href="#" onclick="LoadSectionContent('#dvContent', 'work.php', '#linkWork');">work</a>&nbsp;&nbsp;
					<a id="linkBlog" href="#" onclick="LoadSectionContent('#dvContent', 'blog.php', '#linkBlog');">blog</a>&nbsp;&nbsp;
					<a id="linkContact" href="#" onclick="LoadSectionContent('#dvContent', 'contact.php', '#linkContact');">contact</a>
				</span>
				<span class="float-right" style="padding-top: 5px;">
					<?php 
						if ($s == 1)
							echo '<div class="b-black" onclick="ChangeStyle(0);" style="cursor: pointer;"></div> ';
						else
							echo '<div class="b-white" onclick="ChangeStyle(1);" style="cursor: pointer;"></div>';
					?>
				</span>
			</div>

			<div id="dvContent" class="card float-left">
			</div>

		</div>

	</div>

	<img style="display: none;" src="img/coding.png">
	<img style="display: none;" src="img/contact.png">
	
	<div style="display: none;">
		<PRE>s = <?php echo $s; ?><br>cookies : 
		<?php 
			//print_r($_COOKIE);
		?>
		</PRE>
	</div>

	<script type="text/javascript">
		$(function() {
			LoadSectionContent('#dvContent', 'home.php', '#linkHome');
			<?php 
				if ($n == "about") { 
					echo '$("#linkAbout").trigger("click");';
				}
				else if ($n == "work") { 
					echo '$("#linkWork").trigger("click");';
				}
				else if ($n == "skill") { 
					echo '$("#linkSkill").trigger("click");';
				}
				else if ($n == "blog") { 
					echo '$("#linkBlog").trigger("click");';
				}
				else if ($n == "contact") { 
					echo '$("#linkContact").trigger("click");';
				}
			?>
		});
	</script>

<?php
	$mp->Trace();
	$mp->WriteFooter();
?>