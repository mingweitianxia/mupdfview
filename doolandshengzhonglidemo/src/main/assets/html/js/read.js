(function(){
	//gototop
	$('.wrap').append('<div class="scroll-top" id="srcollTop"></div>');	
	var b = null,
	c = $(window),
	a = $("#srcollTop");
	c.on("scroll",function() {
	b && clearTimeout(b);
	b = setTimeout(function() {
		200 < window.scrollY ? a.show() : a.hide()
	},
	400)
	});
	a.on("click",function() {
	window.scroll(0, 0)
	})
})();

 
$(function(){
	
//	changeHeadColor();//随机改变头部颜色
  changeHead();//随机头部
//	$( '.content').delegate( 'img', 'touchstart', function(e){//监听触摸图片
//		e.preventDefault();
//		var id=$(this).attr('id');
//		var w=$(this).width();
//		var h=$(this).height();
//		var left=$(this).position().left;
//		var top=$(this).position().top;
//		
//		window.location.href='http://dooland-js-call://clickimg?id='+id+'&width='+w+'&height='+h+'&left='+left+'&top='+top;	
//	
//	});
	
})


function changeHeadColor(){//变换头部颜色
	var color_arr=Array("#da6a68","#009acc","#5fb753","#0aafa9","#ff8e32");
	
	if ( $('.wrap').hasClass("temp01") || $('.wrap').hasClass("temp02") ){
		$(".head").css('border-color',color_arr[Math.floor(Math.random()*color_arr.length)]);
		
	}else if($('.wrap').hasClass("temp03")){
		$(".head").css('background',color_arr[Math.floor(Math.random()*color_arr.length)]);	
	}
}

function getData(tdata,data){//填充数据函数
	$(".content").append(data);//添加正文数据
	if(tdata!=''){
		$(".tutor").css("display","block");
		$(".tutor span").text(tdata);//添加导读数据
	}
}

function changeTemp(val){//变换模板
	$(".wrap").addClass(val);
}

function startNight(){//启动夜间模式
	$('.wrap').attr('id','night');
	if ( $('.wrap').hasClass("temp01") || $('.wrap').hasClass("temp02") ){
		$(".head").css('border-color','#1e1e1e');
		
	}else if($('.wrap').hasClass("temp03")){
		$(".head").css('background','#1e1e1e');	
	}
}

function cancelNight(){//取消夜间模式
	$('.wrap').attr('id','');
	changeHeadColor();
}


function changesize(val){//变换字体大小

	$(".tutor").css("font-size","16px");
	$(".tutor").css("line-height","23px");
	$(".content").css("font-size",val+"px");
	$(".content").css("line-height",val*2-6+"px");

}

function changeImg(id,url){//拿到图片后执行切换图片效果
	$('#'+id).css('opacity',0);
	$('#'+id).attr('src',url);
	$('#'+id).animate({opacity: 1}, 800);
}

function displayImg(id){//显示图片
	$('#'+id).css('opacity',1);
}

function hideImg(id){//隐藏图片
	$('#'+id).css('opacity',0);
}

function changeHead(){//变换头部
	$('.wrap').attr("class","wrap");
	var color_arr=Array("#da6a68","#009acc","#5fb753","#0aafa9","#ff8e32");
	var temp_arr=Array("","temp01","temp02","temp03");
	$(".wrap").addClass(temp_arr[Math.floor(Math.random()*temp_arr.length)]);
	if ( $('.wrap').hasClass("temp01") || $('.wrap').hasClass("temp02") ){
		$(".head").css('border-color',color_arr[Math.floor(Math.random()*color_arr.length)]);
		
	}else if($('.wrap').hasClass("temp03")){
		$(".head").css('background',color_arr[Math.floor(Math.random()*color_arr.length)]);
	}
	
}
	




