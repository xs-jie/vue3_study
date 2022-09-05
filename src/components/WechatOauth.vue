<template>
  <div class="wechat">
    <h1>微信授权登录</h1>
    <a-driver></a-driver>
    <a-button @click="wechatLogin" type="primary">微信登录</a-button>
    <a-button @click="getAccess_token">通过code获取access_token</a-button>
    <div>code:{{ route.query }}</div>
    <div>
      code换取的token信息：
      <div>access_token:{{ access_token }}</div>
      <div>refresh_token:{{ refresh_token }}</div>
      <div>openid:{{ openid }}</div>
      <div>_res:{{ _res }}</div>
    </div>
  </div>
  <div id="code"></div>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'

const axiosInstance = axios.create({})
const route = useRoute()

const appid = 'wx9488e1ef8a3fa61a'
const secret = 'bc7e33812e210391f8a71e37b3622f4b'
// const redirect_uri = encodeURIComponent(
//   'https://5622-27-38-216-57.ap.ngrok.io/home/content1'
// )
const redirect_uri = encodeURIComponent('https://console.callzone.com.cn/#/')
let code = ref('')
let access_token = ref('')
let refresh_token = ref('')
let openid = ref('')
let _res = reactive({})

/* 计算属性，判断当前浏览器是否是微信浏览器 */
const isWechatBrowser = computed(() => {
  let ua = window.navigator.userAgent.toLowerCase()
  if (ua.indexOf('micromessenger') !== -1) {
    return true
  } else {
    return false
  }
})

const url1 = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${redirect_uri}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`
const _url1 = `https://open.weixin.qq.com/connect/qrconnect?appid=${appid}&redirect_uri=${redirect_uri}&response_type=code&scope=snsapi_login&state=STATE#wechat_redirect`
const wechatLogin = () => {
  if (isWechatBrowser.value) {
    window.location.href = url1
  } else {
    setCode()
    // window.location.href = _url1
  }
  // console.log(isWechatBrowser.value)
}

const setCode = () => {
  const s = document.createElement('script')
  s.type = 'text/javascript'
  s.src = 'https://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js'
  const wxElement = document.body.appendChild(s)
  wxElement.onload = function () {
    var obj = new WxLogin({
      id: 'code', // 需要显示的容器id
      appid: appid, // 公众号appid wx*******
      scope: 'snsapi_login', // 网页默认即可
      redirect_uri: redirect_uri, // 授权成功后回调的url
      state: 'STATE', // 可设置为简单的随机数加session用来校验
      style: 'black', // 提供"black"、"white"可选。二维码的样式
      href: '' // 外部css文件url，需要https
    })
  }
}

/* 获取到Code后，使用code换取access_token */
const url2 = `https://api.weixin.qq.com/sns/oauth2/access_token?appid=${appid}&secret=${secret}&code=${route.query.code}&grant_type=authorization_code`

const getAccess_token = () => {
  if (route.query.code) {
    axiosInstance({
      url: url2,
      method: 'get'
    }).then((res: any) => {
      window.alert(res)
      _res = { abc: '132' }
      access_token.value = res.access_token
      openid.value = res.openid
      refresh_token.value = res.refresh_token
    })
    // window.location.href = url2
  }
}

/* 刷新access_token */
const url3 = `https://api.weixin.qq.com/sns/oauth2/refresh_token?appid=${appid}&grant_type=refresh_token&refresh_token=${refresh_token}`

/* 拉去用户信息 */
const url4 = `https://api.weixin.qq.com/sns/userinfo?access_token=${access_token}&openid=${openid}&lang=zh_CN`

onMounted(() => {
  // code.value = route.query.code
})
</script>

<style lang="less" scoped>
.wechat {
  margin-top: 50px;
}
</style>
