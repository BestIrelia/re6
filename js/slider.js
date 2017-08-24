/*海报轮播js*/
// 轮播的海报图片json对象
var imgs=[
    {"img":"img/poster/top1.jpg"},
    {"img":"img/poster/top2.jpg"},
    {"img":"img/poster/top3.jpg"},
    {"img":"img/poster/top4.jpg"}
];
var adv={
    LIWIDTH:0,//保存每个li的宽度
    DISTANCE:0,//保存总距离
    DURATION:1000,//保存总时间
    STEPS:200,//保存总步数
    interval:0,//保存步频
    step:0,//保存步长
    moved:0,//保存已经移动的位移
    timer:null,//保存定时器序号
    WAIT:3000,//自动轮播之间的等待时间
    canAuto:true,//标示是否可以启动自动轮播
    init:function(){
        //获得id为slider的div的宽,保存在LIWIDTH中
        this.LIWIDTH=parseFloat(getComputedStyle($("#slider")[0]).width);
        //计算interval: DURATION/STEPS
        this.interval=this.DURATION/this.STEPS;
        this.updateView();//更新页面
        //调用autoMove，启动自动轮播
        this.autoMove();
        //为id为slide绑定鼠标进入事件为:
        $("#slider").on("mouseover",function(){
            this.canAuto=false;//修改canAuto为false
        }.bind(this));
        //为id为slide绑定鼠标移出事件为:
        $("#slider").on("mouseout",function(){
            this.canAuto=true;//修改canAuto为true
        }.bind(this));
    },
    updateView:function(){//将数组内容更新到页面
        //遍历imgs中每个元素,同时声明空字符串htmlImgs
        for(var i=0,htmlImgs=""; i<imgs.length; i++){
            //向htmlImgs中拼接一个<li><img src="当前元素的img属性"></li>
            htmlImgs+= '<li><img src="'+imgs[i].img+'"></li>';
        }
        //设置id为imgs的元素的内容为htmlImgs
        $("#imgs").html(htmlImgs);
        //设置id为imgs的元素的宽为LIWIDTH*imgs的元素个数
        $("#imgs").css("width",this.LIWIDTH*imgs.length+"px");
    },
    autoMove:function(){//启动自动轮播
        //启动一次性定时器,任务:move,参数为1,等待时间为WAIT
        this.timer=setTimeout(function(){
            //如果可以启动自动轮播
            if(this.canAuto){
                this.move();//调用move方法，移动
            }else{//否则
                //调用autoMove，再次等待
                this.autoMove();
            }
        }.bind(this),this.WAIT);
    },
    move:function(){//启动一次移动
        //停止动画，清除timer-防止动画叠加
        clearInterval(this.timer);
        this.timer=null;
        //左移
        //获得id为imgs的ul的left，保存在变量start中
        var start=parseFloat(getComputedStyle($("#imgs")[0]).left);
        //用-LIWIDTH*n，保存在变量end中
        var end=-this.LIWIDTH;
        //求DISTANCE: -(end-start)
        this.DISTANCE=-(end-start);
        //求step:DISTANCE/STEPS
        this.step=this.DISTANCE/this.STEPS;
        //启动周期性定时器: moveStep，间隔interval，序号保存在timer中
        this.timer=setInterval(
            this.moveStep.bind(this),this.interval
        );
    },
    moveStep:function(){//移动一步
        //获得id为imgs的ul的left
        var left=parseFloat(getComputedStyle($("#imgs")[0]).left);
        //设置id为imgs的ul的left为left-step
        $("#imgs").css('left',left-this.step+"px");
        this.moved++;//moved+1
        //如果moved==STEPS
        if(this.moved==this.STEPS){//移动结束
            //停止定时器，清除timer, moved归0
            clearInterval(this.timer);
            this.timer=null;
            this.moved=0;
            //删除数组开头的元素，拼接到结尾
            imgs=imgs.concat(imgs.splice(0,1));
            this.updateView();//更新界面:
            //清除id为imgs的left
            $("#imgs").css('left','');
            //调用autoMove，启动自动轮播
            this.autoMove();
        }
    }
};
adv.init();