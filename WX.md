微信

	//定义全局变量 app.js
	const app = getApp();
	console.log(app.foo)
	foo:"bar",
	say(){
		cosnole.log("hello")
	}

----------------

	//想要跳转 tab 需要配置 open-type="switchTab"
	<navigator class="" target="" url="" hover-class="navigator-hover" open-type="switchTab">

-------
	data(){
		mesage:1
	}
	<text>{{foo.addPosfix(mesage)}}</text>
	//wxs 标签类似于 html中的script标签 可以定义一些行内脚本
	<wxs module="foo">
	//这里必须遵守common js 规范
		module.exports = {
			addPosfix:function(input){ 
				return input + '1'
			}
		}
	</wxs>

------------------
	//对于频繁需要切换显示的元素,不应该用wx:if
		<view wx:if={{isLoading}}>
		  <text>
		    loading
		  </text>
		</view>
		<viewe wx:elif="{{isLoading}}">
		  <text>
		    loading
		  </text>
		</viewe>
		<view wx:else={{isLoading}}>
		  <text>
		    loading
		  </text>
		</view>

		//推荐用hidden
		<view hidden={{!isLoading}}>
		  <text>
		    loading
		  </text>
		</view>
		<view hidden={{isLoading}}>
		  <text>
		    loading
		  </text>
		</view>

--------------
	<block wx:if={{isLoading}}>
		//只是一个包装元素,不会对页面结构造成任何影响
	</block>
	wx:for={{list}}
	{{item.name}}
	{{index}}//定义索引 直接写 跟vue有区别的
	wx:for-item="s"//指定item名字
	wx:for-index="i"//指定index名字
	//key 写的属性的名字
	wx:key="index"

	bindtap="addclick" //事件 handle触摸
	const list = this list;
	//驱动视图更新 更新到页面上
	this.setData({list:list})
	//Page.prototype.setData()
     //setData 函数用于将数据从逻辑层发送到视图层，同时改变对应的 this.data 的值。

------------------------

自定义属性

		<view>
		  <text>item 1</text>
		  <button bindtap="removeHandle" data-id="1">remove</button>
		</view>
				Page({
		  removeHandle (e) {
		    console.log(e)
		  }
		})

	小程序是单向数据流  可以通过e.detail.value  
	`<text>{{foo}}</text>
	
	<input value="{{foo}}" bindinput="inputChangeHandle"/>`
		Page({
		  data: {
		    foo: 'hello wechat app'
		  },
		
		  inputChangeHandle (e) {
		    // e.target -> 当前文本框
		    console.log(e.detail.value)
		
		    // 将界面上的数据再次同步回 数据源上
		    // this.data.foo = e.detail.value
		
		    // setData 
		    // 1. 改变数据源
		    // 2. 通知框架，数据源变了，需要重新渲染页面
		    this.setData({ foo: e.detail.value })
		  }
		})

---------------
		
		wxss 全屏750rpx
	 	
		 "window": {
	    "navigationBarBackgroundColor": "#037CFF",
	    "navigationBarTextStyle": "white",
	    "navigationBarTitleText": "锁",
	    "backgroundColor": "#bcc0c9",
	    "backgroundTextStyle": "light",
	    "enablePullDownRefresh": false //全局刷新
	  },
	 "tabBar": {
	    "color": "#999",
	    "selectedColor": "#037CFF",
	    "backgroundColor": "#fff",
	    "borderStyle": "black",
	    "list": [
	      {
	        "pagePath": "pages/apply/apply",
	        "text": "申请",
	        "iconPath": "pages/static/lcon/contact.png",
	        "selectedIconPath": "pages/static/lcon/contact-active.png"
	      },
	      {
	        "pagePath": "pages/list/list",
	        "text": "门锁",
	        "iconPath": "pages/static/lcon/home.png",
	        "selectedIconPath": "pages/static/lcon/home-active.png"
	      }
	    ]
	  },


小程序大小有限制  可以images优化为单标签 精简代码量等等!

		小程序发送请求如下: 
			// wx.request({
		    //     url:'https://api.douban.com/v2/movie/coming_soon',
		    //     header:{
		    //         'Content-Type':'json'
		    //     },
		    //     success:function(result){
		    //         console.log(result)
		    //     }
		    // })

		//小程序请求使用promise封装
		module.exports=(url,data)=>{
		  return new Promise ((resolve,reject) => {
		    wx.request({
		      url:`https://locally.uieee.com/${url}`,
		      data:data,
		      success:resolve,
		      fail:reject
		    })
		  })
		}
		const fetch =require('../../utils/fetch')
		  fetch('slides').then(res=>{
           this.setData({slides:res.data})
       })

-----------------
小程序跳转

1. 利用小程序提供的 API 跳转：

		// 关闭所有页面，打开到应用内的某个页面。
		wx.reLaunch({
		  url: 'page/home/home?user_id=111'
		})

-------

			// 保留当前页面，跳转到应用内的某个页面，使用wx.navigateBack可以返回到原页面。
		// 注意：调用 navigateTo 跳转时，调用该方法的页面会被加入堆栈，但是 redirectTo 
		wx.navigateTo({
		  url: 'page/home/home?user_id=111'
		})

----

		// 关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages() 获取当前的页面栈，决定需要返回几层。
		
		wx.navigateTo({
		  url: 'page/home/home?user_id=111'　　// 页面 A
		})
		wx.navigateTo({
		  url: 'page/detail/detail?product_id=222'　　// 页面 B
		})
		// 跳转到页面 A
		wx.navigateBack({
		  delta: 2
		})

-----------

		// 关闭当前页面，跳转到应用内的某个页面。
		wx.redirectTo({
		  url: 'page/home/home?user_id=111'
		})

-------
		
		// 跳转到tabBar页面（在app.json中注册过的tabBar页面），同时关闭其他非tabBar页面。
		wx.switchTab({
		  url: 'page/index/index'
		})

---

		// 关闭所有页面，打开到应用内的某个页面。
		wx.reLanch({
		  url: 'page/home/home?user_id=111'
		})

2. wxml 页面组件跳转（可以通过设置open-type属性指明页面跳转方式）：

		// navigator 组件默认的 open-type 为 navigate 
		<navigator url="/page/navigate/navigate?title=navigate" hover-class="navigator-hover">跳转到新页面</navigator>
		// redirect 对应 API 中的 wx.redirect 方法
		<navigator url="../../redirect/redirect/redirect?title=redirect" open-type="redirect" hover-class="other-navigator-hover">在当前页打开</navigator>
		// switchTab 对应 API 中的 wx.switchTab 方法
		<navigator url="/page/index/index" open-type="switchTab" hover-class="other-navigator-hover">切换 Tab</navigator>
		// reLanch 对应 API 中的 wx.reLanch 方法
		<navigator url="../../redirect/redirect/redirect?title=redirect" open-type="redirect" hover-class="other-navigator-hover">关闭所有页面，打开到应用内的某个页面</navigator>
		// navigateBack 对应 API 中的 wx.navigateBack 方法
		<navigator url="/page/index/index" open-type="navigateBack" hover-class="other-navigator-hover">关闭当前页面，返回上一级页面或多级页面</navigator>