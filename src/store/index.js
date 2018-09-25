import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const ladies = [
  {'nickname':'\u67f3\u5982\u662f', 'account':15255982845, 'uid':667364},
  {'nickname':'\u9648\u5706\u5706', 'account':15029683428, 'uid':480509},
  {'nickname':'\u674e\u9999\u541b', 'account':15789858159, 'uid':102382},
  {'nickname':'\u8463\u5c0f\u5b9b', 'account':13580292168, 'uid':130624},
  {'nickname':'\u987e\u7709\u751f', 'account':15263717160, 'uid':250044},
  {'nickname':'\u535e\u7389\u4eac', 'account':13857003746, 'uid':152867},
  {'nickname':'\u5bc7\u767d\u95e8', 'account':15588772091, 'uid':700018},
  {'nickname':'\u9a6c\u6e58\u5170', 'account':13038694018, 'uid':556513}
]

export default new Vuex.Store({
  state: {
    user: ladies
  }
})
