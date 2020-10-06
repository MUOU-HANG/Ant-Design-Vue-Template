<template>
  <a-layout-header class="header" style="background: #fff;">
    <div class="header-wrap" @click="toggleCollapse">
      <MenuUnfoldOutlined v-if="data.isCollapse" class="icon" />
      <MenuFoldOutlined v-else class="icon" />
    </div>
  </a-layout-header>
</template>

<script lang="ts">
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons-vue";
import { reactive, computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "LayoutHeader",
  /** 父组件传过来的值 */
  props: {},
  /** 组件 */
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined
  },
  setup() {
    const store = useStore();
    const data = reactive({
      isCollapse: store.state.app.isCollapse
    });

    const toggleCollapse = () => {
      store.commit("app/SET_COLLAPSE");
    };
    data.isCollapse = computed(() => store.state.app.isCollapse);

    /** 返回值 */
    return { data, toggleCollapse };
  }
};
</script>

<style lang="scss" scoped>
.ant-layout-header {
  padding: 0 0 !important;
}
.header {
  background-color: $theme;
  @include webkit(box-shadow, 0 4px 6px 0 rgba(0, 0, 0, 0.1));
}
.header-wrap {
  display: inline-block;
}
.icon {
  @include icon(18px, "", 0 0 0 20px);
}
</style>
