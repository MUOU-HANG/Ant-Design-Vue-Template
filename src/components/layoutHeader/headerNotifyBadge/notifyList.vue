<template>
  <a-list item-layout="horizontal" :data-source="data.notifies">
    <template v-if="!data.notifies.length == 0" v-slot:renderItem="{ item }">
      <a-list-item>
        <a-list-item-meta description="三年前">
          <template v-slot:title>
            <a href="#">{{ item.title }}</a>
          </template>
          <template v-slot:avatar>
            <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </template>
        </a-list-item-meta>
      </a-list-item>
    </template>
    <template v-if="data.notifies.length == 0">
      <a-empty description="暂无通知" />
    </template>
    <a-list-item>
      <a-button type="info" block @click="clearNotify">清空通知</a-button>
      <a-button type="info" block>
        <router-link to="">查看更多</router-link>
      </a-button>
    </a-list-item>
  </a-list>
</template>

<script lang="ts">
import { data, useGetNotify, useClearNotify } from "./index";
export default {
  name: "",
  /** 父组件传过来的值 */
  props: {},
  inject: ["user"],
  /** 组件 */
  components: {},
  setup(props, { emit }) {
    // 获取通知数据
    useGetNotify(emit, data);

    // 清空数据
    const { clearNotify } = useClearNotify(emit, data);

    /** 返回值 */
    return { data, clearNotify };
  }
};
</script>

<style lang="scss" scoped></style>
