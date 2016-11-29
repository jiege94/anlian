//函数获取上一个兄弟节点
function prenode(obj){
	if(obj.previousElementSibling){
		return obj.previousElementSibling;
	}else{
		return obj.previousSibling;
	}
}

//获取下一个兄弟节点
function nextnode(obj){
	if(obj.nextElementSibling){
		return obj.nextElementSibling;
	}else{
		return obj.nextSibling;
	}
}

//函数第一个子节点
function firstnode(obj){
	if(obj.firstElementChild){
		return obj.firstElementChild;
	}else{
		return obj.firstChild;
	}
}

//最后一个子节点
function lastnode(obj){
	if(obj.lastElementChild){
		return obj.lastElementChild;
	}else{
		return obj.lastChild;
	}
}

//用函数传类名
function gainclassn(classn){
	var tags=document.all?document.all:document.getElementsByTagName('*');
	var arr=[];
	for (var i = 0; i < tags.length; i++) {
		if(tags[i].className==classn){
			arr.push(tags[i]);
		}
	}
	return arr;
}

//用函数获取ID内的类名
function gainclassn(parentn,classn){
	var parent=document.getElementById(parentn);
	var tags=parent.all?parent.all:parent.getElementsByTagName('*');;
	var arr=[];
	for (var i = 0; i < tags.length; i++) {
		if(tags[i].className==classn){
			arr.push(tags[i]);
		}
	}
	return arr;
}

//byclass
function byclass(classn){
	var tags=document.all?document.all:document.getElementsByTagName('*');
	var arr=[];
	for (var i = 0; i < tags.length; i++) {
		if(tags[i].className.indexOf(classn)!=-1){
			arr.push(tags[i]);
		}
	}
	return arr;
}

//任意元素到窗口的距离
function offetTL(obj){
	var start=obj;
	var lefts=0;
	var tops=0;
	while(obj){
		if(obj==start){
			lefts+=obj.offsetLeft;
			tops+=obj.offsetTop;
			obj=obj.offsetParent;
		}else{
			lefts+=obj.offsetLeft+obj.clientLeft;
			tops+=obj.offsetTop+obj.clientTop;
			obj=obj.offsetParent;
		}
	}
	return {top:tops,left:lefts};
}
//设置cookie期限函数
function setcookie(day,key,value){
	var date=new Date();
	date.setDate(date.getDate()+day);
	document.cookie=key+"="+escape(value)+";expires="+date;
}

//获取cookie键值对
function getcookie(key){
	var cookies=unescape(document.cookie);
	var arr1=cookies.split("; ");
	for (var i = 0; i < arr1.length; i++) {
		var arr2=arr1[i].split("=");
		if(arr2[0]==key){
			return arr2[1];
		}
	}
}

//删除cookie
function removecookie(key){
	setcookie(-1,key,"1");
}

//数组升序去重
Array.prototype.sxqc=function(){
	this.sort(function(a,b){
		return a-b;
		//return b-a;  //降序
	})
	var arr=[];
	for (var i = 0; i < this.length; i++) {
		if(this[i]==this[i+1]){
			continue;
		}else{
			arr.push(this[i]);
		}
	}
	return arr;
}

//字符串去空格
String.prototype.qkg=function(){
	var reg=/\s+/g;
	return this.replace(reg,"");
}

//自定义获取周几
Date.prototype.getweek=function(){
	var days=this.getDay();
	var arr=["日","一","二","三","四","五","六"];
	return arr[days];
}

// ========== jq大图滚动 ==========
// function gun(wrap,box,x){
// 	var timer=null;
// 	var step=0;
// 	var maxstep=20;
// 	var start=$(wrap).scrollLeft();
// 	var end=$(box).oueterWidth()*x;
// 	var everystep=(end-start)/maxstep;
// 	clearInterval(timer);
// 	timer=setInterval(function(){
// 		step++;
// 		if(step>=maxstep){
// 			clearInterval(timer);
// 			step=0;
// 		}
// 		start+=everystep;
// 		$(wrap).scrollLeft(start);
// 	},10)
// }

// ============= tab 切换 =======

// $.fn.extend({
// 	Tab:function (){
// 		var $_this=$(this);
// 		$_this.find('.tit span').click(function (){
// 			var i=$_this.find('.tit span').index(this);
// 			$_this.find('.tit span').eq(i).addClass('select').siblings().removeClass('select');
// 			$_this.find('.con li').eq(i).addClass('show').siblings().removeClass('show');
// 		})
// 	}
// })

// ============ js 大图滚动 =========
// function Creatdatu(out,wrap,box,imgs,ul,li,left,right,s1,s2,listred){
// 	this.out=document.getElementById(out);
// 	this.wrap=this.out.byclass(wrap);
// 	this.box=this.out.byclass(box);
// 	this.imgs=this.box.getElementsByTagName(imgs);
// 	this.ul=this.out.byclass(ul);
// 	this.lis=this.ul.getElementsByTagName(li);
// 	this.lefts=this.out.byclass(left);
// 	this.rights=this.out.byclass(right);
// 	this.x=0;
// 	this.timer1=null;
// 	this.timer2=null;
// 	var _this=this;
// 	this.lefts.onclick=function(){
// 		_this.leftmove();
// 	}
// 	this.rights.onclick=function(){
// 		_this.rightmove();
// 	}
// 	for (var i = 0; i < this.lis.length; i++) {
// 		this.lis[i].onmouseover=function(){
// 			_this.overmove(this);
// 		}
// 	}
// }
// creatdatu.prototype.automove=function(){
// 	var _this=this;
// 	clearInterval(this.timer1);
// 	this.timer1=setInterval(function(){
// 		_this.x++;
// 		if(_this.x>=_this.imgs.length){
// 			_this.x=0;
// 		}
// 		_this.move();
// 		_this.liststyle();
// 	},s1)
// }
// creatdatu.prototype.move=function(){
// 	this.step=0;
// 	this.maxstep=20;
// 	this.start=this.wrap.scrollLeft;
// 	this.end=this.imgs.offsetWidth*this.x;
// 	this.everystep=(this.end-this.start)/this.maxstep;
// 	var _this=this;
// 	clearInterval(this.timer2);
// 	timer2=setInterval(function(){
// 		_this.step++;
// 		if(_this.step>=_this.maxstep){
// 			clearInterval(_this.timer2);
// 			_this.step=0;
// 		}
// 		_this.start+=_this.everystep;
// 		_this.wrap.scrollLeft=_this.start;
// 	},s2)
// }
// creatdatu.prototype.liststyle=function(){
// 	for (var i = 0; i < this.lis.length; i++) {
// 		this.lis[i].className="";
// 	}
// 	this.lis[x].className=listred;
// }
// creatdatu.prototype.leftmove=function(){
// 	clearInterval(this.timer1);
// 	clearInterval(this.timer2);
// 	this.x--;
// 	if(this.x<0){
// 		this.x=this.imgs.length-1;
// 	}
// 	this.move();
// 	this.liststyle();
// 	this.automove();
// }
// creatdatu.prototype.rightmove=function(){
// 	clearInterval(this.timer1);
// 	clearInterval(this.timer2);
// 	this.x++;
// 	if(this.x>=this.imgs.length){
// 		this.x=0;
// 	}
// 	this.move();
// 	this.liststyle();
// 	this.automove();
// }
// creatdatu.prototype.overmove=function(target){
// 	for (var i = 0; i < this.lis.length; i++) {
// 		if(this.lis[i]==target){
// 			this.x=i;
// 			this.move();
// 			this.liststyle();
// 		}
// 	}
// 	this.automove();
// }
// var gun2=new Creatdatu("gun2","clo2_box","clo2_in","li","clo2_abc","li","abs_left","abs_right",2000,10,"listred");
// gun2.automove();
// ================= 大图切换 ===========
