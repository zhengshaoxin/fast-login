<template>
  <div>
    <div class="weui-cells weui-cells_form">
      <j-input title="refid" name="refid" placeholder="来源渠道"></j-input>
    </div>

    <div class="weui-cells weui-cells_form">
      <j-switch title="VIP" id="isVip"></j-switch>
      <j-switch title="已实名验证" id="isReal"></j-switch>
    </div>

    <div class="weui-btn-area">
      <a class="weui-btn weui-btn_primary" href="javascript:">搜 索</a>
    </div>
  </div>
</template>

<script>
import JInput from './j-input'
import JSwitch from './j-switch'

export default {
  components: {
    JInput,
    JSwitch
  }
};
</script>

<style lang="less">
@import '../style/weui/widget/weui-button/weui-button.less';
</style>
