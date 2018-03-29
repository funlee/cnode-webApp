/*
 * @Author: funlee
 * @Email: i@funlee.cn
 * @Date: 2018-03-27 14:15:47
 * @Description: hello_world
 */
import axios from 'axios';
axios.defaults.baseURL = 'https://cnodejs.org/api/v1'

axios.interceptors.response.use(res => {
  const data = res.data
  if(data.success) {
    return data
  }
},error => {
  return Promise.reject(error)
})
