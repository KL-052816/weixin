// component/show/show.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    nums:{
      type:Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    lists:[],
    limit:10
  },
  attached: function () {
    // 在组件实例进入页面节点树时执行
    this.getData(this.data.limit)
    console.log(this.nums)
  },
  observers: {
    'nums': function (nums) {
      // 在 numberA 或者 numberB 被设置时，执行这个函数
      console.log(112233,this.data.limit)
      this.setData({
        limit:10*nums
      })
      this.getData(this.data.limit)
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    getData(i){
      var that=this
      wx:wx.request({
        url: 'http://service.picasso.adesk.com/v1/vertical/vertical?limit='+i+'&skip=180&adult=false&first=0&order=hot',
        success:function(res){
          console.log(res.data.res.vertical)
          that.setData({
            lists:res.data.res.vertical
          })
        }
        
      })
    },
    jump(e){
      wx.navigateTo({
        url: '../../pages/Detail/Detail?url=' + e.currentTarget.dataset.all.preview + '&tag=' + e.currentTarget.dataset.all.tag,
        success:function(){
          console.log(e.currentTarget.dataset.all)
        }
      })
    }
  }
})
