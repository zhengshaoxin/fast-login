<template>
  <div class="fls-header">
    <div class="fls-header-left">
      <slot name="overwrite-left">
        <a class="fls-header-back" @click.preventDefault v-show="_leftOptions.showBack" @click="onClickBack">
          {{ typeof _leftOptions.backText === 'undefined' ? '返回' : _leftOptions.backText }}
        </a>
        <div class="left-arrow" @click="onClickBack" v-show="_leftOptions.showBack"></div>
      </slot>
    </div>
    <h1 class="fls-header-title">
      <span>{{ title }}</span>
    </h1>
    <div class="fls-header-right">
      <router-link class="fls-header-search" :to="{path: '/search'}" v-show="!_leftOptions.showBack">
        <i class="weui-icon-search"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import objectAssign from 'object-assign'

export default {
  name: 'j-header',
  props: {
    leftOptions: Object,
    title: String,
    rightOptions: Object
  },
  computed: {
    _leftOptions () {
      return objectAssign({
        showBack: true,
        preventGoBack: false
      }, this.leftOptions || {})
    }
  },
  methods: {
    onClickBack () {
      if (this._leftOptions.preventGoBack) {
        this.$emit('on-click-back')
      } else {
        this.$router ? this.$router.back() : window.history.back()
      }
    }
  }
};
</script>

<style lang="less">
@header-background-color: #758a99;
@header-title-color: #fff;
@header-text-color: #fff;
@header-arrow-color: #fff;

.fls-header {
  position: relative;
  padding: 3px 0;
  box-sizing: border-box;
  background-color: @header-background-color;
}
.fls-header .fls-header-title {
  line-height: 40px;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  color: @header-title-color;
}
.fls-header-title-area, .fls-header .fls-header-title {
  margin: 0 88px;
  height: 40px;
  width: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.fls-header .fls-header-title > span {
  padding-top: 1px;
  display: inline-block;
}
.fls-header .fls-header-left,.fls-header .fls-header-right {
  position: absolute;
  top: 14px;
  display: block;
  font-size: 14px;
  line-height: 21px;
  color: @header-text-color;
}
.fls-header .fls-header-left a,.fls-header .fls-header-left button,.fls-header .fls-header-right a,.fls-header .fls-header-right button {
  float: left;
  margin-right: 8px;
  color: @header-text-color;
}
.fls-header .fls-header-left a:active,.fls-header .fls-header-left button:active,.fls-header .fls-header-right a:active,.fls-header .fls-header-right button:active {
  opacity: .5
}
.fls-header .fls-header-left {
  left: 18px
}
.fls-header .fls-header-left .fls-header-back {
  // font-weight: 300;
  padding-left: 16px
}
.fls-header .fls-header-left .left-arrow {
  position: absolute;
  width: 30px;
  height: 30px;
  top: -5px;
  left: -5px;

  &:before {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    border: 1px solid @header-arrow-color;
    border-width: 1px 0 0 1px;
    transform: rotate(315deg);
    top: 9px;
    left: 7px;
  }
}
.fls-header .fls-header-right {
  right: 15px
}
.fls-header .fls-header-right a,.fls-header .fls-header-right button {
  margin-left: 8px;
  margin-right: 0
}
.fls-header .fls-header-right .fls-header-search i {
  margin-top: -2px;
  font-size: 18px;
  color: @header-text-color;
}
.fls-header .fls-header-right .fls-header-more:after {
  content: "\2022\0020\2022\0020\2022\0020";
  font-size: 16px;
}
.fls-header-fade-in-right-enter-active {
  animation: fadeinR .5s;
}
.fls-header-fade-in-left-enter-active {
  animation: fadeinL .5s;
}
@keyframes fadeinR {
  0% {
    opacity: 0;
    transform: translateX(150px);
  }
  100% {
    opacity:1;
    transform:translateX(0);
  }
}
@keyframes fadeinL{
  0% {
    opacity: 0;
    transform: translateX(-150px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
