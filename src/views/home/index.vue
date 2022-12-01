<template>
  <div class="home-container">
    <!-- 导航栏 -->
  <van-sticky>
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
  </van-sticky>
    <!-- /导航栏 -->
    <!-- 频道列表 -->
    <!--  通过 v-model 绑定当前激活标签对应的索引值，默认情况下启用第一个标签
          通过 animated 属性可以开启切换标签内容时的转场动画
          通过 swipeable 属性可以开启滑动切换标签页 -->
    <van-tabs class="channel-tabs" v-model="active" animated swipeable>
      <van-tab title="推荐" name="a">
        <van-image
          fit="contain"
          src="https://unpkg.com/@vant/assets/cat.jpeg"
        />
        <!-- 文章列表 -->
      <!-- <article-list />// 后端拿不到数据之前这里是实现不了了-->
      <van-cell
      clickable
      is-link value=""
      url="https://www.bilibili.com/video/BV1gf4y1V7YQ/?spm_id_from=333.999.0.0&vd_source=385bd7990cc40e7231e794d8828e18d8">
      <template #title>
        <span class="custom-title">《毒舌偶像反黑大作战》</span>
        <br />
        <van-tag round color="#fedfe1" text-color="#ad0000">B站</van-tag>
      </template>
      </van-cell>
      <van-cell
      clickable
      is-link value=""
      url="https://www.bilibili.com/video/BV1mk4y1d7Ce/?spm_id_from=333.999.0.0">
      <template #title>
        <span class="custom-title">《广播剧-琵琶行》</span>
        <br />
        <van-tag round color="#fedfe1" text-color="#ad0000">B站</van-tag>
      </template>
      </van-cell>
      <van-cell
      clickable
      is-link value=""
      url="https://music.163.com/#/program?id=2487074686">
      <template #title>
        <span class="custom-title">《念春归》</span>
        <br />
        <van-tag round color="#d75455" text-color="#f9f4dc">网易云音乐</van-tag>
      </template>
      </van-cell>
      <van-cell
      clickable
      is-link value=""
      url="https://music.163.com/#/program?id=2488374611">
      <template #title>
        <span class="custom-title">《梦旅》</span>
        <br />
        <van-tag round color="#d75455" text-color="#f9f4dc">网易云音乐</van-tag>
      </template>
      </van-cell>
    </van-tab>
      <van-tab title="海外" name="b">
      <van-cell
      clickable
      is-link value=""
      url="https://www.bilibili.com/video/BV1rX4y1F7vC/?spm_id_from=333.999.0.0&vd_source=385bd7990cc40e7231e794d8828e18d8">
      <template #title>
        <span class="custom-title">《日系学妹》</span>
        <br />
        <van-tag round color="#fedfe1" text-color="#ad0000">B站</van-tag>
      </template>
      </van-cell>
      <van-cell
      clickable
      is-link value=""
      url="https://www.bilibili.com/video/BV1rX4y1F7vC/?spm_id_from=333.999.0.0&vd_source=385bd7990cc40e7231e794d8828e18d8">
      <template #title>
        <span class="custom-title">《日系学妹》</span>
        <br />
        <van-tag round color="#fedfe1" text-color="#ad0000">B站</van-tag>
      </template>
      </van-cell>
      <van-cell
      clickable
      is-link value=""
      url="https://www.bilibili.com/video/BV1rX4y1F7vC/?spm_id_from=333.999.0.0&vd_source=385bd7990cc40e7231e794d8828e18d8">
      <template #title>
        <span class="custom-title">《日系学妹》</span>
        <br />
        <van-tag round color="#fedfe1" text-color="#ad0000">B站</van-tag>
      </template>
      </van-cell>
      </van-tab>
      <van-tab title="白噪音" name="c">没做完，没做完，没做完</van-tab>
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
    <!-- 频道编辑弹出层 -->
    <!-- <van-popup
      v-model : "isChennelEditShow"
      closeable
      position="bottom"
      :style="{ height: '30%' }"
    /> -->
    <!-- 频道编辑弹出层 -->
  </div>
</template>
<script>
import { Image as VanImage } from 'vant'
// import ArticleList from './components/aritcle-list.vue'
export default {
  name: 'HomeIndex',
  components: {
    [VanImage.name]: VanImage
    // ArticleList
  },
  props: {},
  data () {
    return {
      active: 0
      // isChennelEditShow : true // 控制编辑频道弹出层的展示状态
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
  }
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
