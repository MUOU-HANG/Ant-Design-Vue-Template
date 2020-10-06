<template>
  <div class="notice-content">
    <a-menu>
      <a-tabs class="user-center-tabs">
        <a-tab-pane key="1" tab="通知 (4)">
          Content of Tab Pane 1
        </a-tab-pane>
        <a-tab-pane key="2" tab="消息 (3)">
          Content of Tab Pane 2
        </a-tab-pane>
        <a-tab-pane key="3" tab="待办 (4)">
          Content of Tab Pane 3
        </a-tab-pane>
      </a-tabs>
    </a-menu>
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
.notice-content {
  padding: 0 20px;
}
</style>
