if(!window.jQuery){
	throw new Error('本插件需要jQuery函数库支持');
}
jQuery.fn.choise=function(){
	this.on('mouseover','a',function(){
		$(this).parent().children('a').removeClass('cur');
		$(this).addClass('cur');
		var div=$(this).attr('href');
		$(this).parent().next().children().hide();
		$(div).show();
	});
}