import axios from 'axios'; // https://github.com/mzabriskie/axios

export default ({app, router, store, Vue}) => {
  Vue.prototype.$axios = axios;
};

// export default ({ Vue }) => {
//   Vue.prototype.$axios = axios.create({
//     baseURL: 'http://localhost:80',
//     withCredentials: true
//     // timeout: 1000,
//     // headers: {
//     //   'header': 'value'
//     // }
//   })
// }

// import { Loading, QSpinnerGears, Notify } from 'quasar'
// import axios from 'axios'
// export default ({ Vue, store }) => {
// ...
//   // add a request interceptor
//   axios.interceptors.request.use(config => {
//     // change some state in your store here
//     // Do something before request is sent
//     Loading.show({
//       spinner: QSpinnerGears,
//       // other props
//     })
//     return config
//   }, error => {
//     // Do something with request error
//     Notify.create(...)
//     Loading.hide()
//     return Promise.reject(error)
//   })
// // Add a response interceptor
//   axios.interceptors.response.use(response => {
//     // Do something with response data
//     // call some store functions etc..
//     Loading.hide()
//     return response
//   }, error => {
//     Notify.create(...)
//     Loading.hide()
//     // Do something with response error
//     return Promise.reject(error)
//   })
//   Vue.prototype.$axios = axios
// }
