import apiOrder from '@/api/order'
import {getUser, getToken} from '@/static/sessionStorage'

const state = {}

const getters= {}

const mutations = {}

const actions = {
  startOrder ({commit}, payload) {
    apiOrder.start(
      getToken(),
      getUser(),
      payload.name,
      payload.description,
      payload.contact,
      payload.price,
      payload.imgFile,
      payload.callback
    )
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
