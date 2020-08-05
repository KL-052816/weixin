// component/news/news.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cont:{
      type:Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    lists:[],
    conts:10
  },
  attached: function () {
    // 在组件实例进入页面节点树时执行
    this.getData(this.data.conts)
  },
  observers: {
    'cont': function (cont) {
      // 在 numberA 或者 numberB 被设置时，执行这个函数
      console.log(112233, this.data.conts)
      this.setData({
        conts: 10 * cont
      })
      this.getData(this.data.conts)
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    getData(i){
      var that=this
      wx.request({
        url: 'http://wallpaper.apc.360.cn/index.php?c=WallPaper&a=getAppsByOrder&order=create_time&start=4&count='+i+'&from=360chrome',
        success: function(res){
          console.log(res.data.data)
          that.setData({
            lists:res.data.data
          })
        }
        
      })
    },
    jump(e) {
      wx.navigateTo({
        url: '../../pages/Detail/Detail?url=' + e.currentTarget.dataset.all.url_mid + '&tag=' + e.currentTarget.dataset.all.utag,
        success: function () {
          console.log(e.currentTarget.dataset.all)
        }
      })
    }
  }
})
