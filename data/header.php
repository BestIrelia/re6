<?php
header('Content-Type: text/html;charset=UTF-8');
?>
<div id="top">
    <ul class="rt">
        <li class="sub">
            <a href="#">网站导航</a>
            <div>
                <ul>
                    <li><a href="#">返回首页</a></li>
                    <li><a href="#">游戏下载</a></li>
                    <li><a href="#">游戏攻略</a></li>
                    <li><a href="#">网友讨论</a></li>
                </ul>
            </div>
        </li>
        <li>
            <i></i>
            <a href="#" class="user" id="showLoginDiv">用户登录</a>
        </li>
        <li>
            <i></i>
            <a href="register.html" target="blank">账号注册</a>
        </li>
    </ul>
</div>
<!--模态登录对话框-->
<div class="modal">
    <div class="modal-dialog">
        <span class="close">&times;</span>
        <h3>您还没登录，请登录后参与互动</h3>
        <input type="text" id="user" placeholder="请输入用户名/手机/邮箱">
        <input type="password" id="pwd" placeholder="请输入密码">
        <p>
            <input type="checkbox">记住密码
            <a class="rt">找回密码？</a>
        </p>
        <button>登 录</button>
        <p>
            还没有账号？
            <a class="rt register" href="register.html" target="blank">立即注册</a>
        </p>
        <div class="overflow">
            <i class="lf"></i>
            <span class="lf">其他登录方式</span>
            <i class="lf"></i>
        </div>
        <div class="overflow">
            <s class="lf bg1"></s>
            <s class="lf bg2"></s>
            <s class="lf bg3"></s>
        </div>
    </div>
</div>
<script>
    //弹出莫泰登录框
    $('#showLoginDiv').click(function () {
        $('.modal').css('display','block');
    });
    $('.close').click(function () {
        $('.modal').css('display','none');
    });
</script>