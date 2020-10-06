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
        hidden: false,
        meta: {
          title: "菜单一"
        },
        component: () => import("@v/console/console.vue"),
        children: [
          {
            path: "/item1",
            name: "Item1",
            hidden: false,
            meta: {
              title: "导航一"
            },
            component: () => import("@v/console/item1.vue")
          },
          {
            path: "/item2",
            name: "Item2",
            hidden: false,
            meta: {
              title: "导航二"
            },
            component: () => import("@v/console/item2.vue")
          }
        ]
      },
      {
        path: "/info",
        name: "Info",
        hidden: false,
        meta: {
          title: "菜单二",
          icon: "MenuUnfoldOutlined"
        },
        component: () => import("@v/info/item1.vue"),
        children: [
          {
            path: "/item3",
            name: "Item3",
            hidden: false,
            meta: {
              title: "导航一"
            },
            component: () => import("@v/info/item1.vue")
          },
          {
            path: "/item4",
            name: "Item4",
            hidden: false,
            meta: {
              title: "导航二"
            },
            component: () => import("@v/info/item2.vue")
          }
        ]
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
