<template>
  <div class="user-profile">
    <!-- 导航栏 -->
    <van-nav-bar
      title="个人信息"
      class="page-nav-bar"
      left-arrow
      @click-left="$router.back()"
    />
    <!-- 导航栏 -->

    <!-- 个人信息 -->
    <van-cell title="头像" is-link>
        <van-image
            class="avatar"
            fit="cover"
            round
            src="https://unpkg.com/@vant/assets/cat.jpeg"
        />
    </van-cell>
    <van-cell title="昵称" value="" is-link/>
    <van-cell title="性别" value="" is-link/>
    <van-cell title="生日" value="" is-link/>
    <!-- 个人信息 -->
  </div>
</template>
<script>
export default {
  name: 'UserProfile',
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
.user-profile {
    .avatar {
        width: 60px;
        height: 60px;
    }
}
</style>
