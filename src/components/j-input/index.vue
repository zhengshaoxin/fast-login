<template>
  <div class="weui-cell">
    <div class="weui-cell__hd">
      <div :style="labelStyles" v-if="hasRestrictedLabel">
        <slot name="restricted-label"></slot>
      </div>
    </div>
    <div class="weui-cell__bd">
      <input
      v-if="!type || type === 'text'"
      type="text"
      class="weui-input"
      :maxlength="max"
      :autocomplete="autocomplete"
      :autocapitalize="autocapitalize"
      :autocorrect="autocorrect"
      :spellcheck="spellcheck"
      :style="inputStyle"
      :name="name"
      :pattern="pattern"
      :placeholder="placeholder"
      :readonly="readonly"
      :disabled="disabled"
      ref="input"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String,
    value: [String, Number],
    name: String,
    readonly: Boolean,
    disabled: Boolean,
    keyboard: String,
    inlineDesc: String,
    isType: [String, Function],
    max: Number,
    autocomplete: {
      type: String,
      default: 'off'
    },
    autocapitalize: {
      type: String,
      default: 'off'
    },
    autocorrect: {
      type: String,
      default: 'off'
    },
    spellcheck: {
      type: String,
      default: 'false'
    },
    isType: [String, Function],
    labelStyles: String
  },
  computed: {
    pattern () {
      if (this.keyboard === 'number' || this.isType === 'china-mobile') {
        return '[0-9]*'
      }
    },
    inputStyle () {
      if (this.textAlign) {
        return {
          textAlign: this.textAlign
        }
      }
    }
  },
  data () {
    let data = {
      hasRestrictedLabel: false,
      firstError: '',
      forceShowError: false,
      hasLengthEqual: false,
      valid: true,
      currentValue: ''
    }
    return data
  },
  mounted () {
    if (this.$slots && this.$slots['restricted-label']) {
      this.hasRestrictedLabel = true
    }
  }
};
</script>

<style lang="less">
  @import '../../style/weui/widget/weui-cell/weui-form/weui-form_common.less';
</style>
