<template>
  <div class="user-center">
    <a-dropdown :trigger="['click']">
      <a class="user" @click="e => e.preventDefault()">
        <a-avatar class="user-avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <span> Serati Ma </span>
      </a>
      <template v-slot:overlay>
        <a-menu class="uer-center-items">
          <a-menu-item>
            <router-link to="/userCenter">个人中心</router-link>
          </a-menu-item>
          <a-menu-item>
            <router-link to="/changePassword">修改密码</router-link>
          </a-menu-item>
          <a-divider></a-divider>
          <a-menu-item>
            <router-link to="/login">退出登录</router-link>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
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
    const callback = (key: any) => {
      console.log(key);
    };
    /** 返回值 */
    return { callback };
  }
};
</script>

<style lang="scss" scoped>
.user {
  font-size: 14px;
  color: black;
  line-height: $headerHeight;
  .user-avatar {
    margin-top: -8px;
  }
}
.uer-center-items {
  margin-top: 15px;
  > * {
    padding: 5 20px;
  }
}
</style>
