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
const topic = () => import(/* webpackChunkName: "topic" */ "@/views/topic"); // 话题管理
const topicCreate = () =>
  import(/* webpackChunkName: "topicCreate" */ "@/views/topicCreate"); //话题添加
const topicEdit = () =>
  import(/* webpackChunkName: "topicEdit" */ "@/views/topicEdit"); //话题编辑
const answer = () => import(/* webpackChunkName: "answer" */ "@/views/answer"); // 回答管理
const compilation = () =>
  import(/* webpackChunkName: "compilation" */ "@/views/compilation"); // 回答管理

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
      },
      {
        path: "/admin/topic",
        name: "topicrRoot",
        component: { render: h => h("router-view") },
        redirect: { name: "topic" },
        meta: {
          nav: {
            icon: "el-icon-chat-line-round",
            title: "话题管理"
          }
        },
        children: [
          {
            path: "/admin/topic",
            name: "topic",
            component: topic,
            meta: {
              nav: {
                icon: "el-icon-menu",
                title: "菜单"
              }
            }
          },
          {
            path: "/admin/topic/create",
            name: "topicCreate",
            component: topicCreate,
            meta: {
              nav: {
                icon: "el-icon-circle-plus-outline",
                title: "创建"
              }
            }
          },
          {
            path: "/admim/topic/edit",
            name: "topicEdit",
            component: topicEdit
          },
          {
            path: "/admin/topic/answer",
            name: "answer",
            component: answer
          }
        ]
      },
      {
        path: "/admin/compilation",
        name: "compilation",
        component: compilation,
        meta: {
          nav: {
            icon: "el-icon-star-off",
            title: "合辑管理"
          }
        }
      }
    ]
  }
];
