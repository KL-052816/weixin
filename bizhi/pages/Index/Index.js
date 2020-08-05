// pages/Index/Index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    indicatorDots: true, //小点
    autoplay: true, //是否自动轮播
    interval: 3000, //间隔时间
    duration: 1000, //滑动时间
    // lists:["全部","最新","搜索","我的"],
    less:[],
    num:1,
    lists:[],
    i:0
  },
  getData(){
    // this.setData({
    //   imgUrls: [
    //     {
    //       url: this.data.lists[0].url
    //     }, {
    //       url: this.data.lists[1].url
    //     }, {
    //       url: this.data.lists[2].url
    //     }, {
    //       url: this.data.lists[3].url
    //     }, {
    //       url: this.data.lists[4].url
    //     }, {
    //       url: this.data.lists[5].url
    //     }
    //   ],
    // })
    var that=this
    wx.request({
      url: 'http://wallpaper.apc.360.cn/index.php?c=WallPaperAndroid&a=getAllCategories',
      success(res){
        console.log(res.data)
        console.log(res.data.data)
        that.setData({
          less:res.data.data
        })
        console.log(that.data.less)
      }
    })
  },
  getData3(i){
    var that=this
    wx.request({
      url: 'http://wallpaper.apc.360.cn/index.php?c=WallPaper&a=getAppsByCategory&cid=26&start='+i+'&count=6&from=360chrome',
      success: function (res) {
        that.setData({
          lists: res.data.data
        })
        console.log(res.data.data)
      }
    })
  },
  new(){
    wx.navigateTo({
      url:'../New/New'
    }),
    wx.setNavigationBarTitle({
      title: '最新壁纸',
    })
  },
  search(){
    wx.navigateTo({
      url: '../Search/Search',
    }),
      wx.setNavigationBarTitle({
        title: '搜索壁纸',
      })
  },
  type() {
    wx.navigateTo({
      url: '../Type/Type',
    }),
      wx.setNavigationBarTitle({
        title: '更多壁纸',
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      i:Math.floor(Math.random()*100)
    })
    console.log(this.data.i)
    this.getData3(this.data.i)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.getData()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
      this.setData({
        num:1
      })
      console.log(2222,this.data.num)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
      this.setData({
        num:this.data.num+1
      })
      console.log(11111,this.data.num)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})