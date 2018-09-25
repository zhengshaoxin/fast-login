<template>
  <div style="height: 100%;">
    <j-drawer :show.sync="drawerVisibility" @change-show="changeDrawerShow">

      <div slot="drawer">
        <center style="width:200px;">
          这里是登录用户详情
        </center>
      </div>

      <view-box ref="viewBox">
        <j-header slot="header" :left-options="leftOptions" :title="title">
          <svg
          v-if="route.path === '/'"
          slot="overwrite-left"
          type="navicon"
          size="30"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 512 512"
          style="fill: rgb(255, 255, 255); position: relative; top: -6px; left: -8px;"
          @click="drawerVisibility = !drawerVisibility">
            <path d="M96 241h320v32H96zm0-96h320v32H96zm0 192h320v32H96z"></path>
          </svg>
        </j-header>

        <transition :name="'fls-header-fade-in-right'">
          <router-view class="router-view"></router-view>
        </transition>

        <j-footer slot="footer"></j-footer>
      </view-box>
    </j-drawer>
  </div>
</template>

<script>
import JDrawer from './components/j-drawer'
import ViewBox from './components/view-box'
import JHeader from './components/j-header'
import JFooter from './components/j-footer'

export default {
  data () {
    return {
      drawerVisibility: false
    }
  },
  computed: {
    route () {
      return this.$route
    },
    leftOptions () {
      return {
        showBack: this.$route.path !== '/'
      }
    },
    title () {
      if (this.route.path === '/') {
        return '快速登录'
      }
      if (this.route.path === '/search') {
        return '账号搜索'
      }
      return ''
    }
  },
  methods: {
    drawerToggle () {
      this.drawerVisibility = !this.drawerVisibility
    },
    changeDrawerShow (state) {
      this.drawerVisibility = state;
    }
  },
  mounted () {
  },
  components: {
    JDrawer,
    ViewBox,
    JHeader,
    JFooter
  }
};
</script>

<style lang="less">
@import './style/weui/base/reset.less';
@import './style/weui/icon/weui-icon_font.less';
html {
  height: 100%;
}
body {
  height: 100%;
}
.router-view {
  width: 100%;
}
</style>
