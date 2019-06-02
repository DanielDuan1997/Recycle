const SERVER_ADDRESS = 'http://0.0.0.0:5002'
//'http://118.25.153.8:5002'

import axios from 'axios'

export default {
  login (user, password, cbSucceed, cbFail) {
    let data = new FormData()
    data.append('user', user)
    data.append('password', password)
    axios.post(SERVER_ADDRESS + '/login', data)
      .then(response => cbSucceed(response.data))
      .catch(error => {
        let status = error.response.status
        let notice = error.response.data
        if (status === 401){
          if (notice === "user not exists")
            cbFail("用户不存在")
          else
            cbFail("密码错误")
        } else
          cbFail("无法连接服务器")
      })
  },
  signUp (user, password, callBack) {
    let data = new FormData()
    data.append("user", user)
    data.append("password", password)
    axios.post(SERVER_ADDRESS + '/signup', data)
      .then(response => callBack("success"))
      .catch(error => {
        if (error.response.status === 401)
          if (error.response.data === "username can't be empty")
            callBack("用户名不能为空")
          else
            callBack("用户已存在")
        else
          callBack("无法连接服务器")
      })
  }
}
