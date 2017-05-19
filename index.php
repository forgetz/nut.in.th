<?php 
    ini_set("display_errors", "on");
    require_once('MasterPage.php'); 
    require_once('Section.php'); 

    MasterPage::Header();
    MasterPage::Navigation();
?> 
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-29751220-2', 'auto');
  ga('send', 'pageview');

</script>

    <!-- Intro Header -->
    <header class="intro">
        <div class="intro-body">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                        <h1 class="brand-heading">nut.in.th</h1>
                        <p class="intro-text">developer, cat owner</p>
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
                        <img alt="me" src="img/profile.png" class="img img-responsive">
                    </div>
                    <div class="col-lg-9 col-md-9 col-sm-9">
                        <p>My name is Saranpong (Nat). I'm a developer at Bangkok Airways. I live in Bangkok. This is my website. </p>
                        <p>My work is about coding, analyze a problem and find solution with the teams. learn a new technology and new things.</p>
                    </div>
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
                        <a target="_blank" href="https://www.linkedin.com/in/forgetz/" class="btn btn-default btn-lg"><i class="fa fa-linkedin fa-fw"></i> <span class="network-name">Linkedin</span></a>
                    </li>
                    <li>
                        <a target="_blank" href="https://github.com/forgetz" class="btn btn-default btn-lg"><i class="fa fa-github fa-fw"></i> <span class="network-name">Github</span></a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.facebook.com/forgetz" class="btn btn-default btn-lg"><i class="fa fa-facebook fa-fw"></i> <span class="network-name">Facebook</span></a>
                    </li>
                </ul>
            </div>
        </div>
    </section>


<?php
    MasterPage::Footer();
?>