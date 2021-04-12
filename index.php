<?php 
    ini_set("display_errors", "on");
    require_once('MasterPage.php'); 
    require_once('Section.php'); 

    MasterPage::Header();
    MasterPage::Navigation();
?> 
<style>
	.img-responsive {
		margin: 0 auto;
	}
</style>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-29751220-2', 'auto');
  ga('send', 'pageview');

</script>

    <!-- Intro Header -->
	
    <header id="intro" class="intro">
        <div class="intro-body">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                        <h1 class="brand-heading">nut.in.th</h1>
                        <p class="intro-text">Software Developer</p>
                        <a href="#about" class="btn btn-circle page-scroll">
                            <i class="fa fa-angle-double-down animated"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <!-- About Section -->
    <section id="about" class="container content-section text-center">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2">
                <h2>About Me</h2>
                <div class="row">
                    <div class="col-lg-3 col-md-3 col-sm-3">
                        <img alt="me" src="img/profile.jpg" class="img img-responsive img-circle">
                    </div>
                    <div class="col-lg-9 col-md-9 col-sm-9">
                        <p>My name is Saranpong (Nat). I'm a Software Developer.</p>
                        <p>I'm currently used C# .NET MVC, VB.NET, .NetCore, Nuxt.js, Flutter, Python, PHP</p>
						<p>Now interesting in Solidity, Blockchain</p>
                    </div>
					<a href="#portfolio" class="btn btn-circle page-scroll">
						<i class="fa fa-angle-double-down animated"></i>
					</a>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="portfolio" class="container content-section text-center">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2">
                <h2>Portfolio</h2>
                <?php
                    for ($i=0; $i<=24; $i++)
                    {
                        //if ($i%3==0)
                        //    echo '<div class="row">';
                        echo '<div class="col-lg-4 col-md-6 col-sm-6">
                                <img class="img img-responsive" alt="my work" src="work/work',($i+1),'.png">
                            </div>';
                        //if ($i%3==0)
                        //    echo '</div>';
                    }
                ?>
				
            </div>
			
			
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="container content-section text-center">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2">
                <h2>Contact Me</h2>
                <p>You can contact me via the following channel</p>
                <ul class="list-inline banner-social-buttons">
                    <li>
                        <a target="_blank" href="https://linkedin.com/in/forgetz/" class="btn btn-default btn-lg btn-circle"><i class="fab fa-linkedin-in"></i><span class="network-name"></span></a>
                    </li>
                    <li>
                        <a target="_blank" href="https://github.com/forgetz" class="btn btn-default btn-lg btn-circle"><i class="fab fa-github"></i><span class="network-name"></span></a>
                    </li>
                    <li>
                        <a target="_blank" href="https://m.me/forgetz" class="btn btn-default btn-lg btn-circle"><i class="fab fa-facebook-messenger"></i><span class="network-name"></span></a>
                    </li>
					<li>
                        <a target="_blank" href="https://instagram.com/iamnnat" class="btn btn-default btn-lg btn-circle"><i class="fab fa-instagram"></i><span class="network-name"></span></a>
                    </li>
					
                </ul>
            </div>
			<div class="col-lg-8 col-lg-offset-2">
				<a href="#intro" class="btn btn-circle page-scroll">
					<i class="fa fa-angle-double-up animated"></i>
				</a>
			</div>
        </div>
    </section>


<?php
    MasterPage::Footer();
?>