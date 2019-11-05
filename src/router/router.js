const AccountLogin = () =>
  import(/* webpackChunkName: "AccountLogin" */ "@/views/login"); //登录页
const manager = () =>
  import(/* webpackChunkName: "Manager" */ "@/views/manager"); //管理员
const managerCreate = () =>
  import(/* webpackChunkName: "Manager" */ "@/views/managerCreate"); //管理员添加
const managerEdit = () =>
  import(/* webpackChunkName: "Manager" */ "@/views/managerEdit"); //管理员编辑
const user = () => import(/* webpackChunkName: "User" */ "@/views/user"); // 用户统计
const category = () =>
  import(/* webpackChunkName: "Category" */ "@/views/category"); // 分类管理
const topic = () => import(/* webpackChunkName: "Topic" */ "@/views/topic"); // 话题管理
const topicCreate = () =>
  import(/* webpackChunkName: "Topic" */ "@/views/topicCreate"); //话题添加
const topicEdit = () =>
  import(/* webpackChunkName: "Topic" */ "@/views/topicEdit"); //话题编辑
const answer = () => import(/* webpackChunkName: "Answer" */ "@/views/answer"); // 回答管理
const column = () => import(/* webpackChunkName: "column" */ "@/views/column"); // 合辑管理
const columnCreate = () =>
  import(/* webpackChunkName: "column" */ "@/views/columnCreate"); // 合辑添加
const columnSingle = () =>
  import(/* webpackChunkName: "column" */ "@/views/columnSingle");

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
        path: "/admin/category",
        name: "category",
        component: category,
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
        path: "/admin/column",
        name: "columnRoot",
        component: { render: h => h("router-view") },
        redirect: { name: "column" },
        meta: {
          nav: {
            icon: "el-icon-star-off",
            title: "合辑管理"
          }
        },
        children: [
          {
            path: "/admin/column",
            name: "column",
            component: column,
            meta: {
              nav: {
                icon: "el-icon-menu",
                title: "菜单"
              }
            }
          },
          {
            path: "/admin/column/create",
            name: "columnCreate",
            component: columnCreate,
            meta: {
              nav: {
                icon: "el-icon-circle-plus-outline",
                title: "创建"
              }
            }
          },
          {
            path: "/admin/column/single",
            name: "columnSingle",
            component: columnSingle
          }
        ]
      }
    ]
  }
];
