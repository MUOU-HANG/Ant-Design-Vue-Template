<template>
  <a-list item-layout="horizontal" :data-source="data.messages">
    <template v-if="!data.messages.length == 0" v-slot:renderItem="{ item }">
      <a-list-item>
        <a-list-item-meta :description="item.date">
          <template v-slot:title>
            <a href="#">{{ item.name }} {{ item.title }}</a>
          </template>
          <template v-slot:avatar>
            <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </template>
        </a-list-item-meta>
      </a-list-item>
    </template>
    <template v-if="data.messages.length == 0">
      <a-empty description="暂无通知" />
    </template>
    <a-list-item>
      <a-button type="info" block @click="clearMessage">清空通知</a-button>
      <a-button type="info" block>
        <router-link to="">查看更多</router-link>
      </a-button>
    </a-list-item>
  </a-list>
</template>

<script lang="ts">
import { data, useGetMessage, useClearMessage } from "./index";

export default {
  name: "",

  /** 父组件传过来的值 */
  props: {},
  /** 组件 */
  components: {},
  setup(props, { emit }) {
    // 获取消息数据
    useGetMessage(emit, data);
    // 清空消息
    const { clearMessage } = useClearMessage(emit, data);
    /** 返回值 */
    return { data, clearMessage };
  }
};
</script>

<style lang="scss" scoped></style>
