<template>
  <div class="main-wrap">
    main
    <router-view />
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
}
</style>
