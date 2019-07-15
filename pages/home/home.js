// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../static/images/banner.jpg',
      '../../static/images/banner1.jpg',
      '../../static/images/banner2.jpg',
      '../../static/images/banner3.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular: true,
    list: [
      {color:'#39c894', icon:'iconfont icon-case', title:'装修方案'},
      {color:'#feb505', icon:'iconfont icon-pics', title:'效果图'},
      {color:'#eed215', icon:'iconfont icon-designer', title:'设计师'},
      {color:'#00b2b2', icon:'iconfont icon-construction-site', title:'装修工地'},
      {color:'#1b9af7', icon:'iconfont icon-decorate', title:'装修攻略'},
      {color:'#7b72e9', icon:'iconfont icon-loans', title:'装修贷款'},
      {color:'#ff4351', icon:'iconfont icon-pencle', title:'免费预约'},
      {color:'#fe8864', icon:'iconfont icon-ten', title:'十秒报价'}
    ],
    plan: [],
    designer: [],
    rendering: [],
    live: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url:'http://m.sirfang.com/api/home',
      success: (res) => {
        let plan = res.data.data.plan.jubuzhuangxiu
        this.setData({
          plan
        })
      }
    }),
    wx.request({
      url:'http://m.sirfang.com/api/home/shejishi',
      success: (res) => {
        // console.log(res.data.data.list)
        let designer = res.data.data.list
        this.setData({
          designer
        })
      }
    }),
    wx.request({
      url:'http://m.sirfang.com/api/home/xiaoguotu',
      success: (res) => {
        let rendering = res.data.data.list
        if (rendering.length >= 5){
          
        }
        this.setData({
          rendering
        })
      }
    }),
    wx.request({
      url:'http://m.sirfang.com/api/home/zhibo',
      success: (res) => {
        console.log(res.data.data.list)
        
        let live = res.data.data.list
        this.setData({
          live
        })
        // console.log(this.data.designer)
      }
    })

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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})