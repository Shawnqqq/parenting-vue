const AccountLogin = () =>
  import(/* webpackChunkName: "AccountLogin" */ "@/views/login"); //登录页
const manager = () =>
  import(/* webpackChunkName: "Manager" */ "@/views/manager"); //管理员页面


import BasicLayout from "@/components/BasicLayout";

export default [
  {
    path: "/login",
    component: AccountLogin,
    name: "login"
  },
  {
    path: "/admin",
    component: BasicLayout,
    name: "admin",
    children:[
      {
        path:"/admin/manager",
        name:'managerRoot',
        component:{ render: h => h('router-view')},
        redirect: { name: "manager" },
        meta:{
          nav:{
            icon:'el-icon-s-custom',
            title:'管理员'
          }
        },
        children:[
          {
            path:'/admin/manager',
            name:'manager',
            component:manager,
            meta:{
              nav:{
                icon:'el-icon-menu',
                title:'菜单'
              }
            }
          }
        ]
      }
    ]
  }
];
