// JavaScript Document
window.onload = function(){
	var body = document.body;
	var btn = document.getElementById('skin_button');
	var content = document.getElementById('skin_content');
	var Imgs = document.getElementsByTagName('img');
	var timer = null;
	var initBgImage = body.style.backgroundImage;
	
	//鼠标移入按钮皮肤菜单显示，移出隐藏
	btn.onmouseover = function(){
		show(content);
	};
	btn.onmouseout = function (){
		timer = setTimeout(function(){
			hide(content);
		},1000);
	};
	
	//鼠标移入皮肤菜单显示，移出隐藏
	content.onmouseover = function(){
		clearTimeout(timer);
		show(this);
	};
	content.onmouseout = function(){
		hide(this);
	};
	
	//当移入某个皮肤时更换该皮肤背景
	for(var i = 0; i< Imgs.length; i++){
		(function(i){
			Imgs[i].onmouseover = function(){
				body.style.backgroundImage = 'url(img/'+ (i+1) + '.jpg)';
			};
		})(i);
	}
};

/*
 * 显示元素
 */
function show(ele){
	ele.style.display = 'block';
}

/* 
 * 隐藏元素
 */
function hide(ele){
	ele.style.display = 'none';
}