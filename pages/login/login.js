const app = getApp();
Page({
    data: {
        //判断小程序的API，回调，参数，组件等是否在当前版本可用。
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        StatusBar: app.globalData.StatusBar,
        CustomBar: app.globalData.CustomBar,
    },
    onLoad: function () {},
    bindGetUserInfo: function (e) {
        console.log(e.detail.userInfo);
        if (e.detail.userInfo) {
            const db = wx.cloud.database();
            db.collection('user').where({
                _openid: wx.getStorageSync('openid')
            }).get({
                success: res => {
                    if (res.data.length > 0) {
                        wx.setStorageSync('isLogin', true);
                        wx.navigateBack({
                            delta: 1
                        })
                    } else {
                        var user = {
                            nickName: e.detail.userInfo.nickName,
                            avatarUrl: e.detail.userInfo.avatarUrl,
                            province: e.detail.userInfo.province,
                            city: e.detail.userInfo.city,
                            openid: wx.getStorageSync('openid'),
                            gender: e.detail.userInfo.gender
                        }
                        //授权成功后，跳转进入小程序首页
                        const db = wx.cloud.database();
                        db.collection('user').add({
                            // data 字段表示需新增的 JSON 数据
                            data: user
                        }).then(res => {
                            wx.setStorageSync('isLogin', true);
                            console.log(res)
                            wx.navigateBack({
                                delta: 1
                            })
                        })
                    }
                },
                fail: err => {
                    wx.setStorageSync('isLogin', false);
                    console.log('[数据库] [查询记录] 失败：')
                }
            })
        } else {
            //用户按了拒绝按钮
            wx.showModal({
                title: '警告',
                content: '简历信息授权后方可查看!',
                showCancel: false,
                confirmText: '返回授权',
                success: function (res) {
                    if (res.confirm) {
                        console.log('用户点击了“返回授权”')
                    }
                }
            })
        }
    }
})