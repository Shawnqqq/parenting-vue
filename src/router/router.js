const AccountLogin = () =>
  import(/* webpackChunkName: "AccountLogin" */ "@/views/login");    //登录页

export default[
  {
    path:'/login',
    component:AccountLogin,
    name:'login'
  }
]