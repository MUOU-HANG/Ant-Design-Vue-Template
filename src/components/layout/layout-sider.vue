<template>
  <div class="sider">
    <a-layout-sider :theme="data.theme" :collapsed="data.isCollapse">
      <template v-for="item in data.routes">
        <a-menu mode="inline" :key="item.name" v-if="!item.hidden" :inlineCollapsed="false" v-model:selectedKeys="data.selectedKeys" v-model:openKeys="data.openKeys">
          <a-menu-item v-if="!item.children" :key="item.name">
            <router-link :to="item.path">
              <span>
                <BorderOutlined /> <span>{{ item.meta.title }}</span>
              </span>
            </router-link>
          </a-menu-item>
          <a-sub-menu v-else :key="item.name">
            <template v-slot:title>
              <span>
                <BorderOutlined /><span>{{ item.meta.title }}</span>
              </span>
            </template>

            <template v-for="subItem in item.children">
              <a-menu-item v-if="!subItem.hidden" :key="subItem.name">
                <router-link :to="subItem.path">
                  {{ subItem.meta.title }}
                </router-link>
              </a-menu-item>
            </template>
          </a-sub-menu>
        </a-menu>
      </template>
    </a-layout-sider>
  </div>
</template>

<script lang="ts">
import { reactive, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import { BorderOutlined } from "@ant-design/icons-vue";
export default {
  name: "lauout-sider",
  /** 父组件传过来的值 */
  props: {},

  /** 组件 */
  components: { BorderOutlined },
  setup() {
    interface DataType {
      theme: string;
      isCollapse: any;
      routes: any;
      selectedKeys: any;
      openKeys: any;
    }
    const store = useStore();
    const routers = useRouter();
    const route = useRoute();

    const data: DataType = reactive({
      theme: "light",
      isCollapse: store.state.app.isCollapse,
      routes: [],
      selectedKeys: [],
      openKeys: []
    });

    /** 声明周期函数 */
    data.isCollapse = computed(() => store.state.app.isCollapse);
    onMounted(() => {
      // 获取当前的全部路由
      data.routes = routers.options.routes[0].children;
      // 获取当前地址栏对应的菜单情况
      data.selectedKeys.push(route.name);
      data.openKeys.push(route.matched[route.matched.length - 2].name);
    });
    /** 返回值 */
    return {
      data
    };
  }
};
</script>

<style lang="scss" scoped>
body {
  margin: 0;
}
</style>
