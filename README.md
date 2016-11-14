## 前言
>相信在小程序推出公测之后，很多小伙伴都已经抓紧申请注册小程序了。在开发阶段中也碰到了很多的问题，例如`wx.request`数据请求不成功，在数组操作时，不知道如何往数组里push数据，input如何监听用户输入的状态，css的background-image无法获取本地资源等等，本博客会出一个专题，给碰到这些问题的小伙伴解决思路。

## 数组操作
今天我们主要讲的是，数组操作。
相信对于用过vuejs、reactjs等mvvm框架的童鞋，微信小程序的数组操作就显得很简单啦，原理是一样的。

![''](http://lanchenglv.com//uploads/images/20161113222748.jpg)

![''](http://lanchenglv.com//uploads/images/20161113233447.jpg)


这是简单做的一个demo，已经上传到github，到时大伙可以直接下载。我们主要讲在数组中常用的一些操作方法，对数组向前向后插入新的数据、修改数组、删除数组、清空数组，其他的一些操作方式，我会给大伙学习思路。

demo地址：
https://github.com/bluefox1688/wxapp_study

demo数组操作的例子路径：
`/pages/array/array.wxml`

 
### 向前向后插入新的数据

``` stylus

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
  }
})

```
我们初始化一些数据，我们需要对list的添加新的数据里，需要用到`JavaScript concat()`的方法，`concat()` 方法用于连接两个或多个数组，该方法不会改变现有的数组。
其实我们的所说的向前向后插入数据，其实也就是把两个数组合拼起来，组成一个新的数组，然后再使用`this.setData()`即可渲染到页面上。
我们看一下在微信小程序里的代码。

**向前插入数据demo**
``` stylus

 //向前增加数据
  add_before:function (){

  
//要增加的数组
var newarray = [{
	id:6,
	name:'向前增加数据--'+new Date().getTime() ,
	count:89
}];
  	
//使用concat()来把两个数组合拼起来
this.data.list = newarray.concat(this.data.list);
	
//将合拼之后的数据，发送到视图层，即渲染页面
//大伙请记录，修改了数据后，一定要再次执行`this.setData()`，页面才会渲染数据的。
this.setData({
  	'list':	this.data.list
 });
  	
  	
  }
```

**向后插入数据demo**
``` stylus

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
```
细心的小伙伴应该会发现，这两段在用`concat()`合拼数据时，concat括号里的数据是不一样的。向前向后插入数据的区别就在这里了。

``` stylus

//假设这一段是我们要新增的数组
var newarray = [{
		id:5,
		name:'向后增加数据--'+new Date().getTime() ,
		count:89
}];

//向前--用newarray与this.data.list合拼
this.data.list = newarray.concat(this.data.list);

//向后--用this.data.list与newarray合拼
this.data.list = this.data.list.concat(newarray);

```

### 修改数组

对展示的数据进行修改，在开发过程是常见得不在常见的事情啦。

``` stylus
  //修改数组
  edit:function (e){
  	
//这个参数“e”的具体作用，请参考微信小程序官方提供的说明，地址为https://mp.weixin.qq.com/debug/wxadoc/dev/framework/view/wxml/event.html?t=20161107
    
var dataset = e.target.dataset;
var Index = dataset.index; //在通过在wxml页面里使用 data-index="{{index}}"传递过来的，是为识别正在编辑修改哪个数组。
  	
//我们要修改的数组
this.data.list[Index].name = '修改了内容'+new Date().getTime();
  	
//将合拼之后的数据，发送到视图层，即渲染页面
//大伙请记录，修改了数据后，一定要再次执行`this.setData()`，页面才会渲染数据的。
this.setData({
	list:this.data.list
});
  	
  	
  	
  }
```

### 删除某条数据

有增有改也必有删。
删除需要用到`JavaScript splice() `方式，`splice() ` 方法向/从数组中添加/删除项目，然后返回被删除的项目。

``` stylus

//删除
  remove:function (e){
  	
	var dataset = e.target.dataset;
	var Index = dataset.index;
	
	//通过`index`识别要删除第几条数据，第二个数据为要删除的项目数量，通常为1
	this.data.list.splice(Index,1);
	
	//渲染数据
	this.setData({
		list:this.data.list
	});
  	
  	
  }

```

### 清空数据

增修删之后，还得再来一个清空数据呀。

``` stylus
//清空
  clear:function (){
  	
    //其实就是让数组变成一个空数组即可
  	this.setData({
  		list:{}
  	});
  	
  } 
```

### 总结
今天我们主要讲了增修删清空，其实对数组的操作还有很多方式的，可以看以下截图。

![''](http://lanchenglv.com//uploads/images/20161113232801.jpg)

具体的每一个的操作方法，可以去国内的w3s多学习下。
http://www.w3school.com.cn/jsref/jsref_splice.asp

demo地址：
https://github.com/bluefox1688/wxapp_study

## 交流

![''](http://lanchenglv.com/uploads/images/20161113233806.jpg)

最近大家对微信小程序开发热情大涨，结识了不少对微信小程序技术开发的牛人，也有一些刚入行的新手，特此我建立了一个微信小程序技术交流圈子，希望给大伙有一个纯洁的技术交流圈子，技术交流，提升自我。我们也会不定期发布一些微信小程序的学习教程。
此群的目标为纯（干）纯（货）的技术交流群，不死于广告之中，已开启了群主邀请确认机制，需要入群的小伙伴，请加我的个人微信`amwhuang`。（备注：小程序入群）

>文章首发地址：
>数组操作--微信小程序学习教程
>http://lanchenglv.com/article/2016/1113/wxapp_array_concat_splice.html
>如需转载，请标明转载出处，谢谢。


