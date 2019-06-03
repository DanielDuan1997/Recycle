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
  },
  getOrder ({commit}, payload) {
    apiOrder.get(
      getToken(),
      getUser(),
      payload.cbSuccess,
      payload.cbFail
    )
  },
  getSpecificOrder ({commit}, payload) {
    apiOrder.getSpecific(
      getToken(),
      getUser(),
      payload.order_id,
      payload.cbSuccess,
      payload.cbFail
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
