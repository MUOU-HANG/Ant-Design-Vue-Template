<template>
  <div class="notice-badge-wrap">
    <a-dropdown :trigger="['click']">
      <span @click="e => e.preventDefault()">
        <BellOutlined class="icon" />
        <a-badge :count="data.count" class="notice-badge">
          <a href="#" class="head-example" />
        </a-badge>
      </span>
      <template v-slot:overlay>
        <a-menu style="width:344px;height:450px;overflow: hidden;">
          <a-tabs class="user-center-tabs">
            <a-tab-pane key="1">
              <template v-slot:tab>
                通知 ({{ data.notifyItemCount }})
              </template>
              <HeaderNotifyList @getNumber="getNumber" />
            </a-tab-pane>
            <a-tab-pane key="2">
              <template v-slot:tab>
                消息 ({{ data.messageItemCount }})
              </template>
              <HeaderMessageList @getNumber="getNumber" />
            </a-tab-pane>
            <a-tab-pane key="3">
              <template v-slot:tab> 待办 ({{ data.todoItemCount }}) </template>
              <HeaderTodoList @getNumber="getNumber" />
            </a-tab-pane>
          </a-tabs>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<script lang="ts">
import HeaderNotifyList from "@c/layoutHeader/headerNotifyBadge/notifyList.vue";
import HeaderMessageList from "@c/layoutHeader/headerNotifyBadge/messageList.vue";
import HeaderTodoList from "@c/layoutHeader/headerNotifyBadge/todoList.vue";
import { BellOutlined } from "@ant-design/icons-vue";
import { Todo, Count } from "@/types/header/noticeBadge";
import { reactive } from "vue";

// 查看更多
export default {
  name: "",
  /** 父组件传过来的值 */
  props: {},
  /** 组件 */
  components: {
    BellOutlined,
    HeaderNotifyList,
    HeaderMessageList,
    HeaderTodoList
  },
  provide: {
    user: "John Doe"
  },
  setup() {
    const data = reactive({
      notifyItemCount: 0,
      messageItemCount: 0,
      todoItemCount: 0,
      count: 0 // 总的消息数，用徽标显示
    });

    const getNumber = (e: Count) => {
      data.notifyItemCount = e.notifies.length;
      data.messageItemCount = e.messages.length;
      // 筛选todo是否完成
      const result: Todo[] = e.todos.filter(r => r.done == false);
      data.todoItemCount = result.length;
      data.count = e.notifies.length + e.messages.length + result.length;
    };
    /** 返回值 */
    return { data, getNumber };
  }
};
</script>

<style lang="scss" scoped>
.icon {
  @include icon(18px, "", 0 0 0 0);
}
.notice-badge-wrap {
  position: relative;
  .notice-badge {
    position: absolute;
    top: 15px;
    left: 40px;
  }
}
.user-center-tabs {
  padding: 0 20px;
  width: 361px;
  height: 100%;
  overflow-y: scroll;
}
</style>
