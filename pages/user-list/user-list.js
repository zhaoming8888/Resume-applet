//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    tab :-1,
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    TabCur: 1,
    scrollLeft: 0,
    skin: app.globalData.skin,
    loading: true,
    animationTime: 1,
    userList: [],
    colourList: [{
      colour: 'bg-red'
    }, {
      colour: 'bg-orange'
    }, {
      colour: 'bg-yellow'
    }, {
      colour: 'bg-olive'
    }, {
      colour: 'bg-green'
    }, {
      colour: 'bg-cyan'
    }, {
      colour: 'bg-blue'
    }, {
      colour: 'bg-purple'
    }, {
      colour: 'bg-mauve'
    }, {
      colour: 'bg-pink'
    }, {
      colour: 'bg-lightBlue'
    }],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.randomNum();
    this.getUserList();
  },
  // 获取用户访问列表
  getUserList() {
    const db = wx.cloud.database();
    db.collection('user').where({
    }).get({
      success: res => {
        this.setData({
          userList:res.data
        })
      },
      fail: err => {
        console.log('[数据库] [查询记录] 失败：')
      }
    })
  },
  //获取随机数
  randomNum: function () {
    var num = Math.floor(Math.random() * 10);
    this.setData({
      randomNum: num
    });
  },

  prevent(event) {
    // console.log(event.currentTarget.dataset.url);
    var self = this;
    wx.setClipboardData({
      data: event.currentTarget.dataset.url,
    });

  },
  show(e){
    let index = e.currentTarget.dataset.index;
    console.log(index);
    this.setData({
      tab:index
    })
  }
})