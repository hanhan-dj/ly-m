<template>
  <div class="home-container">
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav-bar">
      <van-button
        class="search-btn"
        slot="title"
        type="info"
        size="small"
        round
        icon="search"
        to="/search"
      >搜索</van-button>
    </van-nav-bar>
    <!-- /导航栏 -->
    <!-- 频道列表 -->
    <!--  通过 v-model 绑定当前激活标签对应的索引值，默认情况下启用第一个标签
          通过 animated 属性可以开启切换标签内容时的转场动画
          通过 swipeable 属性可以开启滑动切换标签页 -->

    <van-tabs class="channel-tabs" v-model="active" swipeable>
      <van-tab title="推荐" name="a">此页是推荐内容</van-tab>
      <van-tab title="海外" name="b">内容 2</van-tab>
      <van-tab title="白噪音" name="c">内容 3</van-tab>
      <van-tab title="asmr" name="d">内容 3</van-tab>
      <van-tab title="轻熟" name="e">内容 3</van-tab>
      <van-tab title="童趣" name="f">内容 3</van-tab>
      <van-tab title="温柔" name="g">内容 3</van-tab>
      <van-tab title="御姐" name="h">内容 3</van-tab>
      <van-tab title="萝莉" name="i">内容 3</van-tab>
      <van-tab title="R18" name="j">内容 3</van-tab>
      <div slot="nav-right" class="placeholder"></div>
      <div
        slot="nav-right"
        class="hamburger-btn"
        @click="isChennelEditShow = true"
      >
        <i class="iconfont icon-gengduo"></i>
      </div>
    </van-tabs>
    <!-- 频道列表 -->
  </div>
</template>
<script>
export default {
  name: 'HomeIndex',
  components: {},
  props: {},
  data () {
    return {
      active: 0
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>
<style scoped lang="less">
.home-container {
  .van-nav-bar__title {
    max-width: unset;
  }
  .search-btn {
    width: 450px;
    height: 64px;
    background-color: #5babfb;
    border: none;
    font-size: 28px;
    .van-icon {
      font-size: 32px;
    }
  }

  /deep/ .channel-tabs {
    .van-tab {
      border-right: 1px solid #edeff3;
      min-width: 200px;
      font-size: 30px;
      color: #777777;
    }

    .van-tab--active {
      color: #333333;
    }

    .van-tabs__nav {
      padding-bottom: 0;
    }

    .van-tabs__line {
      bottom: 8px;
      width: 31px !important;
      height: 6px;
      background-color: #3296fa;
    }

    .placeholder {
      flex-shrink: 0;
      width: 66px;
      height: 82px;
    }

    .hamburger-btn {
      position: fixed;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 66px;
      height: 82px;
      background-color: #fff;
      background-color: rgba(255, 255, 255, 0.902);
      opacity: 0.902;
      i.toutiao {
        font-size: 33px;
      }
      &:before {
        content: "";
        position: absolute;
        left: 0;
        width: 3px; // 需要在真实手机上显示的话用1px
        height: 58px;
        background-image: url(~@/assets/gradient-gray-line.png);
        background-size: contain;
      }
    }
  }
}
</style>
