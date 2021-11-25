import { createStore } from 'vuex'

export default createStore({
  state: {
    visible: false,
    username: localStorage.getItem('username') || '',
    userlogin: null,
    userid: null,
    userstaff: null,
    usersuperuser: null,
    timer: '',
    token: localStorage.getItem('access') || '',
  },
  getters: {
  },
  mutations: {

  },
  actions: {
  },
  modules: {
  }
})
