const app = getApp();
Page({
  data: {
    title: '',
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    dataList: [{
      imageUrlList: [
        'cloud://resume-5gvararhee45fc66.7265-resume-5gvararhee45fc66-1302238580/ZLPX}~LC`F33VMQ0~D4)2KO.png',
        'cloud://resume-5gvararhee45fc66.7265-resume-5gvararhee45fc66-1302238580/YHJYVUL2W9[TSFC_S)Q@T]J.png',
        'cloud://resume-5gvararhee45fc66.7265-resume-5gvararhee45fc66-1302238580/2.png',
        'cloud://resume-5gvararhee45fc66.7265-resume-5gvararhee45fc66-1302238580/1.png'
      ],
      descriptionList: [
        '一、部分页面展示',
      ]
    }]
  },
  clickImg(event) {
    console.log('event', event);
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