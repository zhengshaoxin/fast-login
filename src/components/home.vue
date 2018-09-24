<template>
  <div>
    <div class="weui-cells" style="margin-top: 0px">
      <div class="weui-cell">
        <div class="weui-cell__bd">
          <p>{{ user.phone }}</p>
        </div>
        <div class="weui-cell__ft">{{ user.uid }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from '../main'

export default {
  computed: {
    user() {
      return this.$store.state.user
    }
  }
};
</script>

<style lang="less">
@import '../style/weui/widget/weui-cell/weui-cell_global.less';
@import '../style/weui/widget/weui-cell/weui-cell_swiped.less';
</style>
