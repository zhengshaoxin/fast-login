<template>
  <div>
    <div class="weui-cells" style="margin-top: 0px">
      <div class="weui-cell" v-for="item in users">
        <div class="weui-cell__bd" :title="item.nickname">
          <p>{{ item.account }}</p>
        </div>
        <div class="weui-cell__ft">{{ item.uid }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from '../main'

export default {
  computed: {
    users() {
      return this.$store.state.user
    }
  }
};
</script>

<style lang="less">
@import '../style/weui/widget/weui-cell/weui-cell_global.less';
@import '../style/weui/widget/weui-cell/weui-cell_swiped.less';
</style>
