//点击之后切换图片并停止轮播
var t1,t2,t3,t4,t5;
function ontab(id){
	var WapperImg=[];
	var Em=[];
	for (i=1;i<6;i++) {
		WapperImg.push(document.getElementById("wapper_img"+i));
		Em.push(document.getElementById("em"+i))
	}
	for (i=0;i<5;i++) {
		if(i==id){
			WapperImg[i].style.display="block";
			Em[i].style.background="#FFFFFF";
		}else{
			WapperImg[i].style.display="none";
			Em[i].style.background="rgba(255,255,255,0.2)";
		}
	}
	clearInterval(interval);
	clearTimeout(t1);clearTimeout(t2);clearTimeout(t3);clearTimeout(t4);clearTimeout(t5);
}

//页面加载后开始轮播
function tab1(){
	document.getElementById("wapper_img1").style.display="block";
	document.getElementById("wapper_img2").style.display="none";
	document.getElementById("wapper_img3").style.display="none";
	document.getElementById("wapper_img4").style.display="none";
	document.getElementById("wapper_img5").style.display="none";
}
function tab2(){
	document.getElementById("wapper_img2").style.display="block";
	document.getElementById("wapper_img1").style.display="none";
	document.getElementById("wapper_img3").style.display="none";
	document.getElementById("wapper_img4").style.display="none";
	document.getElementById("wapper_img5").style.display="none";
}
function tab3(){
	document.getElementById("wapper_img3").style.display="block";
	document.getElementById("wapper_img1").style.display="none";
	document.getElementById("wapper_img2").style.display="none";
	document.getElementById("wapper_img4").style.display="none";
	document.getElementById("wapper_img5").style.display="none";

}
function tab4(){
	document.getElementById("wapper_img4").style.display="block";
	document.getElementById("wapper_img1").style.display="none";
	document.getElementById("wapper_img3").style.display="none";
	document.getElementById("wapper_img2").style.display="none";
	document.getElementById("wapper_img5").style.display="none";

}
function tab5(){
	document.getElementById("wapper_img5").style.display="block";
	document.getElementById("wapper_img1").style.display="none";
	document.getElementById("wapper_img3").style.display="none";
	document.getElementById("wapper_img4").style.display="none";
	document.getElementById("wapper_img2").style.display="none";
}
window.onload =function time1(){
	 t1=setTimeout("tab1()",1000);
	 t2=setTimeout("tab2()",5000);
	 t3=setTimeout("tab3()",10000);
	 t4=setTimeout("tab4()",15000);
	 t5=setTimeout("tab5()",20000);
}
var interval=setInterval(function(){
	setTimeout("tab1()",1000);
	setTimeout("tab2()",5000);
	setTimeout("tab3()",10000);
	setTimeout("tab4()",15000);
	setTimeout("tab5()",20000);
},24000)

//查看更多
function f1(){
	document.getElementById("layer_h").style.display="block";
	document.getElementById("btn2").style.display="block";
	document.getElementById("btn1").style.display="none";
}
function f2(){
	document.getElementById("layer_h").style.display="none";
	document.getElementById("btn1").style.display="block";
	document.getElementById("btn2").style.display="none";
}

//回到顶部
onload=function(){
	var top=document.getElementById("toTop");
	top.onclick=function(){
		window.scrollY=document.documentElement.scrollTop=document.body.scrollTop=0;
	}
	
	window.onscroll=function(){
		var scrolltop=window.scrollY||document.documentElement.scrollTop||document.body.scrollTop;
		
		if(scrolltop>=500){
			top.style.display="block";
		}else{
			top.style.display="none";
		}
	}
}
