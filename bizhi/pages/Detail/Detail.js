Page({

  /**
   * 页面的初始数据
   */
  data: {
    url:"",
    tag:[],
    lists:[],
    num:"",
    clas:null
    // length:1
  },
  getData2(){
    console.log(this.data.clas)
    if(!this.data.clas){
      this.getData(this.data.num)
      console.log(1111222)
    }else{
      // this.getData(this.data.num)
      console.log(this.data.num, this.data.clas)
      this.getData1(this.data.num, this.data.clas)
    }
  },
  getData(i) {
    var that = this
    wx.request({
      url: 'http://wallpaper.apc.360.cn/index.php?c=WallPaper&a=getAppsByOrder&order=create_time&start='+i+'&count=5&from=360chrome',
      success: function (res) {
        console.log(2222,res.data.data)
        that.setData({
          lists: res.data.data
        })
      }

    })
  },
  getData1(i, j) {
    var that = this
    wx.request({
      url: 'http://wallpaper.apc.360.cn/index.php?c=WallPaper&a=getAppsByCategory&cid=' + j + '&start='+i+'&count=5&from=360chrome',
      success: function (res) {
        console.log(1111, res.data)
        that.setData({
          lists: res.data.data
        })
      }
    })
  },
  jump1(e) {
    wx.redirectTo({
      url: './Detail?url=' + e.currentTarget.dataset.all.url_mid + '&tag=' + e.currentTarget.dataset.all.utag+'&class='+e.currentTarget.dataset.all.class_id,
      success: function () {
        console.log(e.currentTarget.dataset.all)
      }
    })
  },
/**
   * 生命周期函数--监听页面加载
   */
onLoad: function(options) {
  console.log(options.class)
  // this.setData({
  //   url: options.url,
  //   clas: options.class_id,
  //   tag: options.tag.split(","),
  //   num: Math.floor(Math.random() * 100),
  //   length: this.data.tag.length
  //   })
  if(!options.class_id){
    this.setData({
      url: options.url,
      clas: options.class,
      tag: options.tag.split(","),
      num: Math.floor(Math.random() * 100),
      length: this.data.tag.length
    })
    console.log(11111,options)
  }else{
    this.setData({
      url: options.url,
      // clas: options.class_id,
      tag: options.tag.split(","),
      num: Math.floor(Math.random() * 100),
      length: this.data.tag.length
  })
  console.log(22222,options)
  }
  console.log(options)
  this.getData2()
},

/**
 * 生命周期函数--监听页面初次渲染完成
 */
onReady: function() {

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
  // this.setData({
  //   num: 1
  // })
  // console.log(2222, this.data.num)
},

/**
 * 页面上拉触底事件的处理函数
 */
onReachBottom: function() {
  // this.setData({
  //   num: this.data.num + 1
  // })
  // console.log(11111, this.data.num)
},

/**
 * 用户点击右上角分享
 */
onShareAppMessage: function() {

}
})