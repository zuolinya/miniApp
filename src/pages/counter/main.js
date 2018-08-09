import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()


export default {
  // 这个字段走 json
  config: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '开奖详情',
    navigationBarTextStyle: 'black',
  }
}
