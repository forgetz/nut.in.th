<div id="tweets"></div>
<script>
	var twitterFetcher=function(){var d=null;return{fetch:function(a,b){d=b;var c=document.createElement("script");c.type="text/javascript";c.src="http://cdn.syndication.twimg.com/widgets/timelines/"+a+"?&lang=en&callback=twitterFetcher.callback&suppress_response_codes=true&rnd="+Math.random();document.getElementsByTagName("head")[0].appendChild(c)},callback:function(a){var b=document.createElement("div");b.innerHTML=a.body;a=b.getElementsByClassName("e-entry-title");d(a)}}}();

	twitterFetcher.fetch('390085467363741696'
	, function(tweets) 	{
		var x = 5; //tweets.length;
		var n = 0;
		var element = document.getElementById('tweets');
		var html = '<ul>';
		while(n < x) 
		{
			if (tweets[n].innerText)
				html += '<li>' + tweets[n].innerText + '</li>';
			else
				html += '<li>' + tweets[n].textContent + '</li>';
			n++;
		}
		html += '</ul>';
		element.innerHTML = html;
    });
</script>