<template>
  <div class="main-wrap">
    <a-layout-content>
      <router-view>
        <router-view />
      </router-view>
    </a-layout-content>
  </div>
</template>

<script lang="ts">
export default {
  name: "",
  /** 父组件传过来的值 */
  props: {},
  /** 组件 */
  components: {},
  setup() {
    /** 返回值 */
    return {};
  }
};
</script>

<style lang="scss" scoped>
.main-wrap {
  background-color: $mainColor;
  margin: 10px;
  position: absolute;
  top: $headerHeight;
  right: 0;
  left: $siderWidth;
  bottom: 0;
}
</style>
