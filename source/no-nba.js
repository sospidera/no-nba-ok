filterTweets = function()
{ 
	$(".tweet").each(function() {
		if(!$(this).hasClass("checked-for-terms") && $(this).text().match(/\Wnba\W/i))
		{
			$(this).closest(".tweet").closest("li").hide();
			$(this).addClass("checked-for-terms");
		}
	});
}

$(".content-main").on("DOMNodeInserted", filterTweets);

filterTweets();
