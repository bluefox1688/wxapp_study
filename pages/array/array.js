//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
   	 list:[{
   	 		id:1,
   	 		name:'应季鲜果',
   	 		count:1
   	 },{
   	 		id:2,
   	 		name:'精致糕点',
   	 		count:6
   	 },{
   	 		id:3,
   	 		name:'全球美食烘培原料',
   	 		count:12
   	 },{
   	 		id:4,
   	 		name:'无辣不欢生猛海鲜',
   	 		count:5
   	 }]
  },
 
  onLoad: function () {
  
  	
  	
  	
  },
  //向前增加数据
  add_before:function (){

  
  	//要增加的数组
  	var newarray = [{
  			id:6,
  			name:'向前增加数据--'+new Date().getTime() ,
  			count:89
  	}];
  	
	
		this.data.list = newarray.concat(this.data.list);
	

  	this.setData({
  		'list':	this.data.list
  	});
  	
  	
  },
  
  //向后增加数据
  add_after:function (){

  		//要增加的数组
  	var newarray = [{
  			id:5,
  			name:'向后增加数据--'+new Date().getTime() ,
  			count:89
  	}];
  	

  	this.setData({
  		'list':this.data.list.concat(newarray)
  	});
  	
  	
  },
  //删除
  remove:function (e){
  	
  	var dataset = e.target.dataset;
  	var Index = dataset.index; //拿到是第几个数组
  	
  	this.data.list.splice(Index,1);
  	
  	this.setData({
  		list:this.data.list
  	});
  	
  	
  },
  //修改
  edit:function (e){
  	
  	var dataset = e.target.dataset;
  	var Index = dataset.index; //拿到是第几个数组
  	
  	
  	this.data.list[Index].name = '修改了内容'+new Date().getTime();
  	
  	this.setData({
  		list:this.data.list
  	});
  	
  	
  	
  },
  //清空
  clear:function (){
  	
  	this.setData({
  		list:[]
  	});
  	
  }
  
  
})



















