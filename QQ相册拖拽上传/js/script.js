// JavaScript Document
$(function(){
	var local = $(".local_upload");
	var drag = $(".drag_upload");
	var dragArea = $(".drag_area");
	var uploadInput = $(".upload_input");
	var uploadType = $(".upload_type");
	var tipText = dragArea.find(".tip_text");
	
	drag.on('click',function(){
			dragArea.slideToggle();
	});
	
	uploadInput.on('click',function(){
			uploadType.slideToggle();	
	});
	
	//图片拖入时
	dragArea.get(0).ondragenter = function(e){
			tipText.html("释放图片");
	};
	
	//鼠标拖出时
	dragArea.get(0).ondragleave = function(){
		tipText.html("请将图片拖拽至此");
	};
	
	dragArea.get(0).ondragover = function(e){
			e.preventDefault();
	};
	
	dragArea.get(0).ondrop = function(e){
		e.preventDefault();
		tipText.hide();
		//获取拖入的本地资源
		var fs = e.dataTransfer.files;
		for(var i=0;i<fs.length;i++){
			//判断拖入的资源是否是图片类型
			if(fs[i].type.indexOf("image") !== -1){
				var fd = new FileReader();
				//读取文件
				fd.readAsDataURL(fs[i]);
				fd.onload = function(){
					$("<img>").attr("src",this.result).appendTo(dragArea);
				};
			}
		}
	};
});