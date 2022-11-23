import Vue from 'vue'
import Vuex from 'vuex'
import { getItem, setItem } from '@/utils/storage'

Vue.use(Vuex)

const TOKEN_KEY = 'LY_USER'

export default new Vuex.Store({
  state: {
    // 一个对象，用来存储当前登录用户信息，里面包含token等数据
    user: getItem(TOKEN_KEY)
    // user: JSON.parse(window.localStorage.getItem(TOKEN_KEY))//  让它不受刷新影响存储数据（数据持久化）
  },
  mutations: {
    setUser (state, data) {
      state.user = data
      //  为了防止刷新丢失，我们需要把数据备份到本地存储
      setItem(TOKEN_KEY, state.user)
      // window.localStorage.setItem(TOKEN_KEY, JSON.stringify(state.user))
    }
  },
  actions: {
  },
  modules: {
  }
})
