$(function(){
	var hangOnASec = false;
	$("#deck-o-cards ul li").click(function(){
		var $li = $(this);
		if( !hangOnASec && !$li.hasClass("current") ){
			$li.siblings().removeClass("current");
			console.log("Click!");
			$li.addClass("clicked").parent().addClass("clicked");
			hangOnASec = setTimeout(function(){
				console.log("Unclick!");
				$li.removeClass("clicked").addClass("current").parent().removeClass("clicked");
				hangOnASec = false;
			},200);
		} else {
			console.log("Gimme a minute.");
		}
	}).first(function(){
		$(this).addClass("current");
	});
});