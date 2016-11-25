var app = getApp();
Page({
  data: {
		
		oneList:[{
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
   	 }],
   	 
   	 twoList:[{
   	 		id:1,
   	 		name:'应季鲜果',
   	 		count:1,
   	 		twodata:[{
   	 			'id':11,
   	 			'name':'鸡脆骨'
   	 		},{
   	 			'id':12,
   	 			'name':'鸡爪'
   	 		}]
   	 },{
   	 		id:2,
   	 		name:'精致糕点',
   	 		count:6,
   	 		twodata:[{
   	 			'id':13,
   	 			'name':'羔羊排骨一条'
   	 		},{
   	 			'id':14,
   	 			'name':'微辣'
   	 		}]
   	 },{
   	 		id:3,
   	 		name:'全球美食烘培原料',
   	 		count:12,
   	 		twodata:[{
   	 			'id':15,
   	 			'name':'秋刀鱼'
   	 		},{
   	 			'id':16,
   	 			'name':'锡箔纸金针菇'
   	 		}]
   	 }],
   	 
   	 notkeylist:[{
   	 			'id':13,
   	 			'name':'羔羊排骨一条'
   	 	},{
   	 			'id':14,
   	 			'name':'微辣'
   	 }],
   	 
   	 usekeylist:[{
   	 			'id':15,
   	 			'name':'秋刀鱼'
   	 	},{
   	 			'id':16,
   	 			'name':'锡箔纸金针菇'
   	 	}]
		
  },
  onLoad: function () {
   
   
   
  },
  notkey_addnewdata:function (){
  	
  	//要增加的数组
  	var newarray = [{
  			id:6,
  			name:'向前增加数据--'+new Date().getTime() ,
  			count:89
  	}];
  	
	
		this.data.notkeylist = newarray.concat(this.data.notkeylist);
	

  	this.setData({
  		'notkeylist':	this.data.notkeylist
  	});
  	
  },
  userkey_id:100,
  usekey_addnewdata:function (){
		
		var self = this;
		
  	self.userkey_id++;
  	//要增加的数组
  	var newarray = [{
  			id:self.userkey_id,
  			name:'向前增加数据--'+new Date().getTime() ,
  			count:89
  	}];
  	
	
		this.data.usekeylist = newarray.concat(this.data.usekeylist);
	

  	this.setData({
  		'usekeylist':	this.data.usekeylist
  	});
  	
  }
})
