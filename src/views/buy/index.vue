<template>
    <div class="buy-container">
      <van-nav-bar
        class="page-nav-bar"
        title="定制"
      >
    </van-nav-bar>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>本期活动</van-swipe-item>
        <van-swipe-item>限时贩售</van-swipe-item>
        <van-swipe-item>精品常驻</van-swipe-item>
        <van-swipe-item>过期活动</van-swipe-item>
      </van-swipe>
      <van-card
        price="15.00/分钟"
        tag="折扣中"
        origin-price="20.00/分钟"
        desc="私人定制，尊享专属美好~"
        title="《私人订制》"
        thumb="dz-shop.jpg"
      >
        <template #tags>
          <van-tag plain type="danger">专属</van-tag>
          <van-tag plain type="danger">定制</van-tag>
          <van-tag plain type="danger">全性向</van-tag>
        </template>
        <template #footer>
          <van-button size="mini">收藏</van-button>
          <van-button size="mini">购买</van-button>
        </template>
      </van-card>
      <van-card
        price="50.00"
        tag="促销中"
        origin-price="100.00"
        desc="我也不想被骗啊，可是她叫我姐姐诶~"
        title="《故乡百合开》"
        thumb="bh-shop.jpg"
      >
        <template #tags>
          <van-tag plain type="danger">橘里橘气</van-tag>
          <van-tag plain type="danger">可爱</van-tag>
          <van-tag plain type="danger">温馨日常</van-tag>
        </template>
        <template #footer>
          <van-button size="mini">收藏</van-button>
          <van-button size="mini">购买</van-button>
        </template>
      </van-card>
      <van-card
        price="80.00"
        origin-price="99.78"
        tag="热卖中"
        desc="下一站和弟弟去哪里呢？"
        title="《和姐姐的旅行》"
        thumb="yj-shop.jpg"
      >
        <template #tags>
          <van-tag plain type="danger">御姐</van-tag>
          <van-tag plain type="danger">温柔</van-tag>
        </template>
        <template #footer>
          <van-button size="mini">收藏</van-button>
          <van-button size="mini">购买</van-button>
        </template>
      </van-card>
      <van-card
        price="66.66"
        desc="师父你在干什么！"
        title="《风流师尊俏徒弟》"
        thumb="gf-shop.jpg"
      >
        <template #tags>
          <van-tag plain type="danger">少女</van-tag>
          <van-tag plain type="danger">古风</van-tag>
          <van-tag plain type="danger">搞笑</van-tag>
        </template>
        <template #footer>
          <van-button size="mini">收藏</van-button>
          <van-button size="mini">购买</van-button>
        </template>
      </van-card>
      <van-card
        price="87.98"
        desc="不要乘姐姐喝醉了做坏事哦~"
        title="《宿醉的迷人姐姐》"
        thumb="sz-shop.jpg"
      >
        <template #tags>
          <van-tag plain type="danger">御姐</van-tag>
          <van-tag plain type="danger">R18</van-tag>
        </template>
        <template #footer>
          <van-button size="mini">收藏</van-button>
          <van-button size="mini">购买</van-button>
        </template>
      </van-card>
      <van-card
        price=""
        desc=""
        title=""
      >
    </van-card>
    </div>
</template>
<script>
export default {
  name: 'buyIndex',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>
<style scoped lang="less">
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 100px;
    line-height: 300px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>
