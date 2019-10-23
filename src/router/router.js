const AccountLogin = () =>
  import(/* webpackChunkName: "AccountLogin" */ "@/views/login"); //登录页
const manager = () =>
  import(/* webpackChunkName: "Manager" */ "@/views/manager"); //管理员
const managerCreate = () =>
  import(/* webpackChunkName: "managerCreate" */ "@/views/managerCreate"); //管理员添加
const managerEdit = () =>
  import(/* webpackChunkName: "managerEdit" */ "@/views/managerEdit"); //管理员编辑
const user = () => import(/* webpackChunkName: "user" */ "@/views/user"); // 用户统计
const sort = () => import(/* webpackChunkName: "sort" */ "@/views/sort"); // 分类管理

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
    children: [
      {
        path: "/admin/manager",
        name: "managerRoot",
        component: { render: h => h("router-view") },
        redirect: { name: "manager" },
        meta: {
          nav: {
            icon: "el-icon-s-custom",
            title: "管理员"
          }
        },
        children: [
          {
            path: "/admin/manager",
            name: "manager",
            component: manager,
            meta: {
              nav: {
                icon: "el-icon-menu",
                title: "菜单"
              }
            }
          },
          {
            path: "/admin/manager/create",
            name: "managerCreate",
            component: managerCreate,
            meta: {
              nav: {
                icon: "el-icon-circle-plus-outline",
                title: "创建"
              }
            }
          },
          {
            path: "/admim/manager/edit",
            name: "managerEdit",
            component: managerEdit
          }
        ]
      },
      {
        path: "/admin/user",
        name: "user",
        component: user,
        meta: {
          nav: {
            icon: "el-icon-s-data",
            title: "用户统计"
          }
        }
      },
      {
        path: "/admin/sort",
        name: "sort",
        component: sort,
        meta: {
          nav: {
            icon: "el-icon-sort",
            title: "分类管理"
          }
        }
      }
    ]
  }
];
