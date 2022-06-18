<template>
  <div class="tabbar">
    <router-link
      v-for="nav in navs"
      :key="nav.path"
      :to="nav.path"
      tag="div"
    >
    <i class="iconfont" v-html="nav.meta.icon"></i>
        <span>{{nav.meta.title}}</span>
    </router-link>
    <!-- <router-link to="/" tag="div">
    <i class="iconfont">&#xe608;</i>
    <span>首页</span>
    </router-link>
    <router-link to="/category" tag="div">
    <i class="iconfont">&#xe65c;</i>
    <span>分类</span>
    </router-link>
    <router-link to="/cart" tag="div">
    <i class="iconfont">&#xe605;</i>
    <span>购物车</span>
    </router-link>
    <router-link to="/mine" tag="div">
    <i class="iconfont">&#xe66c;</i>
    <span>我的</span>
    </router-link> -->
  </div>
</template>

<script>
import routes from '@/router/routes'
export default {
  name: 'Tabbar',
  computed: {
    navs () {
      return routes.filter(route => {
        return route.meta.isNav
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .tabbar{
    display: flex;
    height: 60px;
    div{
      flex: 1;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      i{
        font-size: 25px;
      }
      span{
        font-size: 14px;
      }
    }
    .router-link-exact-active.router-link-active{
      background: #eeeeee;
    }
  }
</style>
