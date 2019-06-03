<template>
  <mu-container>
    <mu-row class="row">
      <mu-col span="1">
      </mu-col>
      <mu-col span="4">
        物品名称：
      </mu-col>
      <mu-col span="5">
        <input type="text" v-model="name" class="input">
      </mu-col>
      <mu-col span="2">
      </mu-col>
    </mu-row>
    <mu-row class="row">
      <mu-col span="1">
      </mu-col>
      <mu-col span="4">
        物品描述：
      </mu-col>
      <mu-col span="5">
        <textarea v-model="description" class="textarea">
        </textarea>
      </mu-col>
      <mu-col span="2">
      </mu-col>
    </mu-row>
    <mu-row class="row">
      <mu-col span="1">
      </mu-col>
      <mu-col span="4">
        联系方式：
      </mu-col>
      <mu-col span="5">
        <input type="text" v-model="contact" class="input">
      </mu-col>
      <mu-col span="2">
      </mu-col>
    </mu-row>
    <mu-row class="row">
      <mu-col span="1">
      </mu-col>
      <mu-col span="4">
        价格：
      </mu-col>
      <mu-col span="3">
        <input type="number" v-model="price" class="input">
      </mu-col>
      <mu-col span="4">
        RMB
      </mu-col>
    </mu-row>
    <mu-row class="row">
      <mu-col span="1">
      </mu-col>
      <mu-col span="4">
        上传图片
      </mu-col>
      <mu-col span="7">
        <input type="file" accept="image/*;" class="img-selector" @change="uploadImg($event)">
      </mu-col>
    </mu-row>
    <mu-button full-width color="primary" @click="submit">提交</mu-button>
    <mywaiting v-if="waiting"></mywaiting>
    <mydialog :open.sync="notice.open" :title="notice.title" :text="notice.text" :close-color="notice.closeColor" :close-action="closeDialog"></mydialog>
  </mu-container>
</template>

<script>

import {mapActions} from 'vuex'
import {clearSession} from '@/static/sessionStorage'

export default {
  inject: ['reload'],
  name: 'mystart',
  data () {
    return {
      name: '',
      description: '',
      contact: '',
      price: 0,
      imgFile: '',
      waiting: false,
      notice: {
        open: false,
        title: "",
        text: "",
        closeColor: "primary",
        to: undefined,
      }
    }
  },
  methods: {
    ...mapActions('order', ['startOrder']),
    uploadImg (e) {
      let tag = e.target
      let imgPath = tag.files[0]
      let reader = new FileReader()
      var that = this
      reader.readAsDataURL(imgPath)
      reader.onload = function(e) {
        that.imgFile = e.target.result
      }
    },
    submit () {
      this.waiting = true
      this.startOrder({ name: this.name, description: this.description, contact: this.contact, price: this.price, imgFile: this.imgFile, callback: this.callback })
    },
    callback (status) {
      console.log(status)
      this.waiting = false
      if (status === 200) {
        this.notice = {
          open: true,
          title: "成功",
          text: "将回到首页",
          closeColor: "primary",
          to: "/"
        }
      } else if (status === 401) {
        this.notice = {
          open: true,
          title: "错误",
          text: "请重新登录",
          closeColor: "warning",
          to: "/login"
        }
      } else if (status === 403) {
        this.notice = {
          open: true,
          title: "错误",
          text: "输入信息不全",
          closeColor: "warning",
          to: undefined
        }
      } else if (status === 500) {
        this.notice = {
          open: true,
          title: "错误",
          text: "服务器出错，请稍后重试",
          closeColor: "warning",
          to: undefined
        }
      } else {
        this.notice = {
          open: true,
          title: "错误",
          text: "无法连接服务器",
          closeColor: "warning",
          to: undefined
        }
      }
    },
    closeDialog () {
      this.notice.open = false
      if (this.notice.to === '/')
        this.reload()
      else if (this.notice.to === '/login') {
        clearSession()
        this.$router.replace(this.notice.to)
      }
    }
  }
};
</script>

<style scoped>
.row {
  font-size: 18px;
  background: rgba(255, 255, 255, 1);
  padding-top: 10px;
  padding-bottom: 10px;
}
.input {
  width: 100%;
  border: 1px solid #a1a1a1;
}
.textarea {
  width: 100%;
  border: 1px solid #a1a1a1;
  height: 80px;
}
.img-selector {
  font-size: 12px;
  width: 100%;
  padding-right: 10px;
}
.img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
</style>
