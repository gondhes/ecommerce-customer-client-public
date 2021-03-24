import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/axios/axios.js'
import router from '../router'
const baseURL = 'http://localhost:3000'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    insertProduct (state, payload) {
      state.products = payload
    }
  },
  actions: {
    login (context, payload) {
      axios({
        method: 'post',
        url: `${baseURL}/login`,
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          localStorage.access_token = data.access_token
          router.push('/')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    fetchProducts (context, payload) {
      axios({
        method: 'get',
        url: `${baseURL}/products`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('insertProduct', data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    logout () {
      localStorage.removeItem('access_token')
      this.$router.push('/')
    },
    register (context, payload) {
      axios({
        method: 'post',
        url: `${baseURL}/register`,
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          router.push('/login')
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
