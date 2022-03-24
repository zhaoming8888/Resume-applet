const app = getApp();
Page({
  data: {
    title: '',
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    dataList: [{
      imageUrlList: [
        'cloud://cloud1-2goey71p41951d12.636c-cloud1-2goey71p41951d12-1304445380/360截图20211128201605277.jpg',
        'cloud://resume-5gvararhee45fc66.7265-resume-5gvararhee45fc66-1302238580/4]41U70_6N341AQT0D0T}LK.png',
        'cloud://resume-5gvararhee45fc66.7265-resume-5gvararhee45fc66-1302238580/}HOT)$H8J~}7$GLIZD0RCFM.png',
        'cloud://resume-5gvararhee45fc66.7265-resume-5gvararhee45fc66-1302238580/`ZN_2PB1)P3$AWBE7E)CG3U.png'
      ],
      descriptionList: [
        '一、后台部分页面展示'
      ]
    }, {
      imageUrlList: [
        'cloud://resume-5gvararhee45fc66.7265-resume-5gvararhee45fc66-1302238580/MKZ7Z]]6GL(BXV)FOLYZDQT.png',
        'cloud://resume-5gvararhee45fc66.7265-resume-5gvararhee45fc66-1302238580/L5A6TOP[ACWB}V576E$D8MV.png',
        'cloud://resume-5gvararhee45fc66.7265-resume-5gvararhee45fc66-1302238580/G2]A(T)5I3E616({S5H])NK.png',
        'cloud://resume-5gvararhee45fc66.7265-resume-5gvararhee45fc66-1302238580/B(GSU6BRH)SHW4F7_U2PM02.png',
        'cloud://resume-5gvararhee45fc66.7265-resume-5gvararhee45fc66-1302238580/_9P5HCUH5_KGPAV@~V[0{QC.png'
      ],
      descriptionList: [
        '二、前端部分页面展示',
      ]
    }]
  },
  clickImg(event) {
    const imageUrl = event.currentTarget.dataset.url
    wx.previewImage({
      current: imageUrl,
      urls: [imageUrl]
    })
  },
  onUnload: function () {},
  onShareAppMessage: function (ops) {
    return {
      title: '个人简历',
      path: 'pages/index/index'
    }

  }
});