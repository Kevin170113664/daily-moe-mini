const imageBaseUrl = 'https://hinatsuruai.chinacloudsites.cn/';

Page({
  data: {
    bandoriImages: []
  },
  onLoad: function() {
    const that = this;
    wx.request({
      url: imageBaseUrl + '/api/bandori/artCards',
      success: function (res) {
        that.setData({bandoriImages: res.data})
      }
    })
  }
})