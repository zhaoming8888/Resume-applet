const app = getApp();
Page({
  data: {
    ColorList: app.globalData.ColorList,
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    color: 'red',
  },
  onLoad () {
    let that = this;
    setTimeout(function () {
      that.setData({
        loading: true
      })
    }, 500)
  },
  showModal (e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal (e) {
    this.setData({
      modalName: null
    })
  },
  SetColor (e) {
    this.setData({
      color: e.currentTarget.dataset.color,
      modalName: null
    })
  },
  SetActive (e) {
    this.setData({
      active: e.detail.value
    })
  },
  clickAddress () {
    wx.setClipboardData({
      data: 'https://www.freecodecamp.org/certification/gegenisang/legacy-front-end',
      success (res) {
        console.log('res', res);
        wx.getClipboardData({
          success (res) {
            console.log('res', res);
            console.log(res.data) // data
          }
        })
      }
    })
  },
  onShareAppMessage: function (ops) {
    return {
      title: '个人简历',
      path: 'pages/index/index'
    }

  }
})
