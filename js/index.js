/* 主页页面js*/
//异步加载页头页尾
$(function(){
    $('header').load('data/header.php');
    $('footer').load('data/footer.php');
});

//导航栏搜索框
$('#nav input').focus(function(){
    $(this).addClass('search');
    $(this).val('');
    //console.log($(this).html());
});
$('#nav input').blur(function(){
    $(this).removeClass('search');
    $(this).val('输入搜索信息');
});
//左侧资讯
//资讯选择
$('.choise').choise();
//单击dl时触发里面的a
$('dl').click(function(){
    var url=$(this).find('a').attr('href');
    open(url);
});
//右侧评分
$('.score').on('mouseover','div',function(){
    //全部圆圈背景变为白色
    $('.score div').css('background','#fff');
    var i = $('.score div').index(this);
    console.log(i);
    //第i个及之前的背景变橙色
    $('.score div:lt('+(i+1)+')').css('background','#ff5400');
    //分数相应增加
    $('.score span').html(i+1);
});
//游戏截图
$('.small_pic').on('click','img',function(){
    var alt=$(this).attr('alt');
    $('.big_pic img').attr('src',alt);
});
// 页面滚动时触发右下角导航栏的显示和隐藏
window.onscroll=function () {
    if(document.body.scrollTop>400){
        $('#navList').css('display','block')
    }else{
        $('#navList').css('display','none')
    }
};
