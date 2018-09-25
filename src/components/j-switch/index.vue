<template>
    <div class="weui-cell weui-cell_switch">
        <div class="weui-cell__bd">{{ title }}</div>
        <div class="weui-cell__ft">
            <label :for="id" class="weui-switch-cp">
                <input :id="id" class="weui-switch-cp__input" type="checkbox">
                <div class="weui-switch-cp__box"></div>
            </label>
        </div>
    </div>
</template>

<script>
export default {
  props: ['id', 'title']
}
</script>

<style lang="less">
@import '../../style/weui/widget/weui-cell/weui-cell_global.less';
@import '../../style/weui/widget/weui-cell/weui-switch.less';
</style>
