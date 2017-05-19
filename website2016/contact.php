
<div class="page-about">
	<div class="ab-img" style="float: left;">
		<img src="img/contact.png" style="width: 210px;">
	</div>

	<div class="ab-text" style="float: left; margin-left: 10px;">
		<div>You can contact me by::</div>
		<div>
			<? /*<a  target="_blank" href="http://www.facebook.com/forgetz"><img src="img/facebook.png"></a>
			<a  target="_blank" href="http://www.twitter.com/inat"><img src="img/twitter.png"></a>
			<a  target="_blank" href="https://plus.google.com/u/0/111812925654883962878"><img src="img/gplus2.png"></a>*/ ?>
			<a  target="_self" href="skype:nutinbox?userinfo"><img src="img/skype.png"></a>
			<a  target="_self" href="mailto:creadz@gmail.com"><img src="img/email.png"></a>
		</div>
		<div>Or message to me :)</div>
		<div>
			From:: <input type="text" id="txtFrom" name="txtFrom" style="">
		</div>
		<div>
			Message:: <input type="text" id="txtMessage" name="txtMessage">
		</div>
		
		<div>
			<input type="button" id="btnSubmit" name="btnSubmit" value="Send" onclick="SendMail($('#txtFrom').val(), $('#txtMessage').val());" style="width: 100px; height: 30px;">
		</div>
		<div id="message">
			
		</div>
	</div>
</div>


