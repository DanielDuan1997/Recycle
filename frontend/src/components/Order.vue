<template>
  <mu-container>
    <myheader left-icon=":iconfont icon-left-arrow" title="Recycle"go-back></myheader>
    <mu-card class="card">
      <mu-card-header :title="seller" :sub-title="sellDate">
      </mu-card-header>
      <mu-card-media :title="name">
        <img :src="img">
      </mu-card-media>
      <mu-card-title :title="contact"></mu-card-title>
      <mu-card-text class="card-text">
        {{description}}
      </mu-card-text>
<!-- 
      <mu-card-actions>
        <mu-button flat>Action 1</mu-button>
        <mu-button flat>Action 2</mu-button>
      </mu-card-actions> -->
    </mu-card>
  </mu-container>
<!--   <mu-container>
    {{name}}<br>
    {{seller}}<br>
    {{description}}<br>
    {{contact}}<br>
    <img :src="img" class="image" />
  </mu-container> -->
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'Order',
  data () {
    return {
      name: '',
      seller: '',
      sellDate: '',
      description: '',
      contact: '',
      img: '',
    }
  },
  created: function () {
    this.getSpecificOrder({order_id: this.$route.params.order_id, cbSuccess: this.cbSuccess, cbFail: this.cbFail})
  },
  methods: {
    ...mapActions('order', ['getSpecificOrder']),
    cbSuccess (data) {
      this.name = data.name
      this.seller = data.seller
      this.sellDate = data.selldate
      this.description = data.description
      this.contact = "联系方式:  " + data.contact
      this.img = "data:image/" + data.suffix + ";base64," + data.img
      console.log(this.sellDate)
    },
    cbFail (status) {
      console.log(status)
    }
  }
};
</script>

<style scoped>
.card {
  top: 70px;
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  text-align: left;
}
.card-text {
  font-size: 15px;
  padding-top: 0;
}
</style>
