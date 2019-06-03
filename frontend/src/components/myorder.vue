<template>
  <mu-container class="container">
    <mu-grid-list>
      <mu-grid-tile v-for="order, index in orders" :key="index" @click="open(order.id)">
        <img :src="order.img" >
        <span slot="title">{{order.name}}</span>
        <span slot="subTitle"><b>{{order.description}}</b></span>
        <mu-button slot="action" icon>
          <mu-icon value=":iconfont icon-right-arrow"></mu-icon>
        </mu-button>
      </mu-grid-tile>
    </mu-grid-list>
  </mu-container>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'myorder',
  data () {
    return {
      orders: []
    }
  },
  created: function () {
    this.getOrder({cbSuccess: this.cbSuccess, cbFail: this.cbFail})
  },
  methods: {
    ...mapActions('order', ['getOrder']),
    cbSuccess (data) {
      let data_len = data.length
      for (let i = 0; i < data_len; i += 1)
        data[i].img = "data:image/" + data[i].suffix + ";base64," + data[i].img
      this.orders = data
    },
    cbFail (status) {
      console.log(status)
    },
    open (id) {
      this.$router.push('/order/' + id)
    }
  }
};
</script>

<style scoped>
.container {
  position: relative;
  top: 70px;
}
</style>
