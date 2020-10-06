<template>
  <a-layout-header class="header" style="background: #fff;">
    <div class="header-wrap">
      <div class="header-left" @click="toggleCollapse">
        <MenuUnfoldOutlined v-if="data.isCollapse" class="icon" />
        <MenuFoldOutlined v-else class="icon" />
      </div>
      <div class="header-right">
        <!-- 消息提示 -->
        <HeaderNoticBadge class="icon notice-badge" />
        <!-- 用户中心 -->
        <HeaderUserCenter class="icon" />
      </div>
    </div>
  </a-layout-header>
</template>

<script lang="ts">
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons-vue";
import HeaderNoticBadge from "@c/headerComponents/headerNoticeBadge.vue";
import HeaderUserCenter from "@c/headerComponents/headerUserCenter.vue";
import { reactive, computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "LayoutHeader",
  /** 父组件传过来的值 */
  props: {},
  /** 组件 */
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    HeaderNoticBadge,
    HeaderUserCenter
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
.header {
  background-color: $theme;
  @include webkit(box-shadow, 0 4px 6px 0 rgba(0, 0, 0, 0.1));
}
.icon {
  @include icon(18px, "", 0 20px 0 20px);
}

.header-wrap {
  .header-left,
  .header-right {
    display: inline-block;
    > * {
      display: inline-block;
    }
  }
}
.header-right {
  position: fixed;
  right: 0;
  padding-right: 20px;
  .notice-badge:hover {
    background-color: rgb(249, 249, 249);
    cursor: pointer;
  }
}
</style>
