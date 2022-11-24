<template>
  <div class="my-container">
        <!-- 已登陆头部 -->
      <div v-if="user" class="header user-info">
      <div class="base-info">
        <div class="left">
          <van-image
            class="avatar"
            src="https://unpkg.com/@vant/assets/cat.jpeg"
            round
            fit="cover"
          />
          <span class="name">聪明可爱寒寒酱</span>
        </div>
        <div class="right">
          <van-button size="mini" round>编辑资料</van-button>
        </div>
      </div>
      <div class="data-stats">
        <div class="data-item">
          <span class="count">237</span>
          <span class="text">关注</span>
        </div>
        <div class="data-item">
          <span class="count">100000</span>
          <span class="text">粉丝</span>
        </div>
        <div class="data-item">
          <span class="count">520</span>
          <span class="text">投稿</span>
        </div>
        <div class="data-item">
          <span class="count">20</span>
          <span class="text">已购</span>
        </div>
      </div>
    </div>
    <!-- 已登陆头部 -->
    <!-- 未登录头部 -->
    <div v-else class="header not-login">
      <div class="login-btn" @click="$router.push('./login')">
        <img class="mobile" src="~@/assets/mobile.png" alt="">
        <span class="text">登录 / 注册</span>
      </div>
    </div>
    <!-- 未登录头部 -->
    <!-- 导航 -->
    <van-grid class="grid-nav" :column-num="2" clickable>
      <van-grid-item class="grid-item">
        <i slot="icon" class="iconfont icon-shoucang"></i>
        <span slot="text" class="text">收藏</span>
      </van-grid-item>
      <van-grid-item class="grid-item">
        <i slot="icon" class="iconfont icon-gengduo"></i>
        <span slot="text" class="text">历史</span>
      </van-grid-item>
    </van-grid>
    <van-cell title="消息通知" is-link />
    <van-cell title="稿件管理" is-link />
    <van-cell title="创作激励" is-link />
    <van-cell title="内置游戏" is-link />
    <van-cell class="mb-9" title="虚拟女友" is-link />
    <van-cell
    v-if="user"
    class="logout-cell"
    clickable
    title="退出登录"
    @click="onLogout"
    />
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { getUserInfo } from '@/api/user'
export default {
  name: 'MyIndex',
  components: {},
  props: {},
  data () {
    return {
      userInfo: {} // 用户信息
    }
  },
  computed: {
    ...mapState(['user'])
  },
  watch: {},
  created () {
    // 如果用户登陆了则请求加载用户数据
    if (this.user) {
      this.loadUserInfo()
    }
  },
  mounted () {},
  methods: {
    onLogout () {
      // console.log('onLogout')
      // 退出提示
      // 在组件中需要使用this.$dialog来调用弹框组件
      this.$dialog.confirm({
        title: '退出登录',
        message:
          '请确认您是否退出登录？'
      }).then(() => {
        // console.log('确认执行这里')
        // 登录的页面视图是根据容器改变的，容器改变成null就会回到未登录页面
        // 清除登录状态(这里本地存储的数据也会跟着变，因为容器定义的时候已经绑定了更新)
        this.$store.commit('setUser', null)
      }).catch(() => {
        console.log('取消执行这里')
      })
    },
    async loadUserInfo () {
      try {
        const { data } = await getUserInfo()
        this.userInfo = data.data
        console.log(data)
      } catch (err) {
        this.$toast('获取用户数据数据失败，请稍后重试')
      }
    }
  }
}
</script>
<style scoped lang="less">
.my-container{
  .header {
    height: 361px;
    background: url("~@/assets/banner.jpg"); // 在CSS里使用@别名前面要加波浪线
    background-size: cover;
  }
  .not-login {
    display: flex;
    justify-content: center;
    align-items: center;
    .login-btn{
      display: flex;
      flex-direction: column;
      justify-self: center;
      align-items: center;
    }
    .mobile{
      width: 132px;
      height: 132px;
      margin-bottom: 15px;
    }
    .text{
      font-size: 28px;
      color: white;
    }
  }
  .user-info {
    .base-info {
      height: 231px;
      padding: 76px 32px 23px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left{
        display: flex;
        align-items: center;
        .avatar {
          width: 132px;
          height: 132px;
          border: 4px solid #fff;
          margin-right: 23px;
        }
        .name{
          font-size: 30px;
          color: black;
          font-weight: 600;
        }
      }
    }
    .data-stats {
      // height: 130px;
      display: flex;
      .data-item {
        height: 130px;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        .count {
          font-size: 36px;
        }
        .text {
          font-size: 23px;
        }
      }
    }
  }
  .grid-nav {
    .grid-item {
      height: 141px;
      i.iconfont {
        font-size: 45px;
      }
      .icon-shoucang {
        color: #eb5253;
      }
      .icon-gengduo{
        color: #ff9d1d;
      }
      span.text {
        font-size: 28px;
      }
    }
  }
  .logout-cell {
    text-align: center;
    color: #d86262;
  }
  .mb-9 {
    margin-bottom: 9px;
  }
}
</style>
