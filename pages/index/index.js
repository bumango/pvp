const app = getApp()
var heroesData = require('../../data/heroes.js')
Page({
  data: {
    hero_type: [
      {
        "type": 0,
        "label": "全部"
      }, {
        "type": 3,
        "label": "坦克"
      }, {
        "type": 1,
        "label": "战士"
      }, {
        "type": 4,
        "label": "刺客"
      }, {
        "type": 2,
        "label": "法师"
      }, {
        "type": 5,
        "label": "射手"
      }, {
        "type": 6,
        "label": "辅助"
      }]

  },
  onLoad: function () {
    this.setData({
      heroes: heroesData.heroes
    });
    console.log(this.data.hero_type)
  },
})
