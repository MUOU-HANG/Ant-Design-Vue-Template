import { createRouter, createWebHashHistory } from "vue-router";
const Layout = () => import("@v/Home.vue");
const routes: Array<any> = [
  {
    path: "/",
    name: "Home",
    hidden: false,
    component: Layout,
    children: [
      {
        path: "/console",
        name: "Console",
        meta: {
          title: "控制台",
          icon: "MenuUnfoldOutlined"
        },
        component: () => import("@v/console/console.vue")
      },
      {
        path: "/info",
        name: "Info",
        meta: {
          title: "信息管理",
          icon: "MenuUnfoldOutlined"
        },
        component: () => import("@v/console/console.vue")
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
