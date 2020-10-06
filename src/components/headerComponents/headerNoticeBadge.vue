<template>
  <div class="notice-badge-wrap">
    <a-dropdown :trigger="['click']">
      <span @click="e => e.preventDefault()">
        <BellOutlined />
        <a-badge count="5" class="notice-badge">
          <a href="#" class="head-example" />
        </a-badge>
      </span>
      <template v-slot:overlay>
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
      </template>
    </a-dropdown>
  </div>
</template>

<script lang="ts">
import { BellOutlined } from "@ant-design/icons-vue";

export default {
  name: "",
  /** 父组件传过来的值 */
  props: {},
  /** 组件 */
  components: { BellOutlined },
  setup() {
    /** 返回值 */
    return {};
  }
};
</script>

<style lang="scss" scoped>
.notice-badge-wrap {
  position: relative;
  .notice-badge {
    position: absolute;
    top: 15px;
  }
}
.user-center-tabs {
  padding: 0 20px;
}
</style>
