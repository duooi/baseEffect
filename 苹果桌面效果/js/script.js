// JavaScript Document
window.onload = function () {
	//获取元素
	var items = document.getElementsByTagName("img");
	
	//给元素绑定事件
	document.onmousemove = function(event){
		var event = event || window.event;
		
		//获取鼠标的位置
		var eventX = event.clientX;
		var eventY = event.clientY;
		
		for(var i = 0;i<items.length;i++){
			
			//获取icon的中心位置
			var itemX = items[i].offsetLeft + items[i].offsetWidth/2;
			var itemY = items[i].offsetTop + items[i].offsetParent.offsetTop + items[i].offsetHeight/2;
			
			//计算鼠标与各icon的距离
			var dis = Math.sqrt(Math.pow((itemX - eventX),2) + Math.pow((itemY - eventY),2));
			
			//设置缩放比例
			var scale =1 - dis/300;
			
			//设置最小缩放比例
			if(scale < 0.5){
				scale = 0.5;
			}
			
			items[i].style.width = scale * 128 + 'px';
		}
		
	};
}