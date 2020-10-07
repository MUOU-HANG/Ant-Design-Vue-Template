<template>
  <a-list item-layout="horizontal" :data-source="data.todos">
    <template v-if="!data.todos.length == 0" v-slot:renderItem="{ item, index }">
      <a-list-item>
        <a-list-item-meta :description="item.description" @click="todoDone(index)">
          <template v-slot:title>
            <a href="#">{{ item.title }}</a>
            <a-tag :color="item.tag" class="todo-tags" v-if="!item.done">
              {{ item.tagDesc }}
            </a-tag>
            <a-tag color="#2db7f5" class="todo-tags" v-else>
              已完成
            </a-tag>
          </template>
        </a-list-item-meta>
      </a-list-item>
    </template>
    <template v-if="data.todos.length == 0">
      <a-empty description="暂无通知" />
    </template>
  </a-list>
  <a-list>
    <a-list-item>
      <a-button type="info" block @click="clearTodo">清空通知</a-button>
      <a-button type="info" block>
        <router-link to="">查看更多</router-link>
      </a-button>
    </a-list-item>
  </a-list>
</template>

<script lang="ts">
import { data, useGetTodo, useClearTodo, useDoneTodo } from "./index";
export default {
  name: "TodoList",
  /** 父组件传过来的值 */
  props: {},
  /** 组件 */
  components: {},
  setup(props, { emit }) {
    // 获取待办数据
    useGetTodo(emit, data);
    // 清空待办
    const { clearTodo } = useClearTodo(emit, data);
    // 完成待办事项
    const { todoDone } = useDoneTodo(emit, data);
    /** 返回值 */
    return { data, clearTodo, todoDone };
  }
};
</script>

<style lang="scss" scoped>
.todo-tags {
  float: right;
}
</style>
