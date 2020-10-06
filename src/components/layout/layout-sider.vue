<template>
  <div class="sider">
    <a-layout-sider :theme="data.theme" :collapsed="data.isCollapse">
      <a-menu mode="inline">
        <a-menu-item>菜单项</a-menu-item>
        <a-sub-menu title="子菜单">
          <a-menu-item>子菜单项</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
  </div>
</template>

<script lang="ts">
import { reactive, computed, onMounted, ComputedRef } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  name: "",
  /** 父组件传过来的值 */
  props: {},
  /** 组件 */
  components: {},
  setup() {
    interface DataType {
      theme: string;
      isCollapse: ComputedRef<any>;
      routes: object;
    }
    const store = useStore();
    const routers = useRouter();
    const data: DataType = reactive({
      theme: "light",
      isCollapse: store.state.app.isCollapse,
      routes: {}
    });
    /** 声明周期函数 */
    data.isCollapse = computed(() => store.state.app.isCollapse);

    onMounted(() => {
      // 获取当前的全部路由
      // data.routes = routers.options.routes[0].children;

      console.dir(routers.options.routes[0].children);
      console.log(data.routes);
    });
    /** 返回值 */
    return {
      data
    };
  }
};
</script>

<style lang="scss" scoped>
/deep/ .ant-layout-sider-children {
  height: 100vh !important;
  @include webkit(box-shadow, 3px 0 16px rgba(0, 0, 0, 0.1));
}
</style>
