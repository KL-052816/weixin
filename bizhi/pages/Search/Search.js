// pages/Search/Search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists:[],
    list:[],
    value:"阿狸",
    cont:10
  },
  getData3(){
    console.log(this.data.value1)
    this.getData(10,this.data.value1)
  },
  getData2(e){
    this.setData({
      value:e.currentTarget.dataset.value,
      cont:10
    })
    this.getData(10, this.data.value)
  },
  getData1() {
    var that=this
    wx.request({
      url: 'http://openbox.mobilem.360.cn/html/api/wallpaperhot.html',
      success: function(res){
        console.log(res.data)
        that.setData({
          lists:res.data.data
        })
      }
    })
  },
  getData(i,value){
    var that=this
    wx.request({
      url: 'http://wallpaper.apc.360.cn/index.php?c=WallPaper&a=search&start=0&count='+i+'&kw='+value,
      success:function(res){
        console.log(1111,res.data.data.length)
        if(res.data.data.length==0){
          wx.showToast({
            title: '未找到相关内容',
            duration: 2000
          })
        }else{
          that.setData({
            list: res.data.data,
            value: that.data.value1
          })
        }

        console.log(that.data.list)
        console.log(that.data.value)
      }
    })
  },
  jump(e) {
    wx.navigateTo({
      url: '../../pages/Detail/Detail?url=' + e.currentTarget.dataset.all.url + '&tag=' + e.currentTarget.dataset.all.utag,
      success: function () {
        console.log(e.currentTarget.dataset.all)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log(this.data.value)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getData1()
    this.getData(10,this.data.value)
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
    this.getData(10,this.data.value)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.setData({
      cont:this.data.cont+10
    })
    this.getData(this.data.cont,this.data.value)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})