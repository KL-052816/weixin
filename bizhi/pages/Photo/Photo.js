// pages/Photo/Photo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists:[],
    num:1,
    id:0
  },
  getData(i,j){
    var that=this
    wx.request({
      url: 'http://wallpaper.apc.360.cn/index.php?c=WallPaper&a=getAppsByCategory&cid='+i+'&start=1&count='+j*10+'&from=360chrome',
      success:function(res){
        that.setData({
          lists:res.data.data
        })
        console.log(res.data.data)
      }
    })
  },
  jump(e) {
    console.log(e.currentTarget.dataset.all)
    wx.navigateTo({
      url: '../../pages/Detail/Detail?url=' + e.currentTarget.dataset.all.url + '&tag=' + e.currentTarget.dataset.all.utag+'&class='+ e.currentTarget.dataset.all.class_id,
      success: function () {
        console.log(e.currentTarget.dataset.all)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    this.setData({
      id:options.id
    })
    this.getData(options.id,this.data.num)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.setData({
      num: 1
    })
    this.getData(this.data.id, this.data.num)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.setData({
      num: this.data.num + 1
    })
    this.getData(this.data.id,this.data.num)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})