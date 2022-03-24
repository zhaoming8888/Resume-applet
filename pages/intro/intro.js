// pages/intro/intro.js
const app = getApp();
Page({

  /**
   * Page initial data
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
  },

  /**
   * Lifecycle function--Called when page load
   */
  showQrcode: function () {
    wx.previewImage({
      current: 'cloud://resume-5gvararhee45fc66.7265-resume-5gvararhee45fc66-1302238580/mmqrcode1602301490788.png',
      urls: ['cloud://resume-5gvararhee45fc66.7265-resume-5gvararhee45fc66-1302238580/mmqrcode1602301490788.png']
    })
  },
  //电话拨打
  phoneCall: function () {
    wx.makePhoneCall({
      phoneNumber: '15643190894',
      fail() {
        console.log('拨打失败');
      }
    })
  },
  //保存通讯录
  saveContact: function () {
    wx.addPhoneContact({
      firstName: '赵铭',
      lastName: '林',
      remark: '程序猿丫',
      mobilePhoneNumber: '15643190894',
      weChatNumber: 'zhaoming-8888',
      success() {},
      fail() {
        console.log('保存失败');
      }
    })
  },
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function (ops) {
    return {
      title: '个人简历',
      path: 'pages/index/index'
    }

  }
})