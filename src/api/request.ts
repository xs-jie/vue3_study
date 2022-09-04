import axios from 'axios'

// type axiosConfig = {
//   url: string
//   method: string
//   headers?: Object
//   data?: any
// }

export default function request(config: any) {
  const instance = axios.create({
    baseURL: `http://localhost:8080`,
    timeout: 5000
  })

  /* 请求拦截器 */
  instance.interceptors.request.use(
    (config) => {
      /* 设置请求头 */
      return config
    },
    (err) => {}
  )

  /* 相应拦截器 */
  instance.interceptors.response.use(
    (response) => {
      return response
    },
    (err) => {}
  )

  return instance(config)
}
