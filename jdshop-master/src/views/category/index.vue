<template>
  <div class="categeory">
      <div class="left">
        <ul class="left">
          <li
          v-for="categeory in categories"
          :key="categeory.id"
          is="router-link"
          :to= "'/category/Sub/'+ categeory.id"
          tag="li"
          >{{ categeory.name}}</li>
        </ul>
      </div>
      <div class="right">
        <router-view />
      </div>
  </div>
</template>

<script>
import { getAllCategories } from '@/api/category'
export default {
  name: 'Categeory',
  data () {
    return {
      categories: []
    }
  },
  created () {
    getAllCategories()
      .then(res => {
        console.log(res)
        this.categories = res
        // 编程式导航 默认打开显示页面
        this.$router.push('/category/sub/2').catch(() => {})
      })
  }
}
</script>

<style lang="scss" scoped>
  .categeory{
    display:flex;
    height: 100%;
    .left{
      width: 100px;
      height: 100%;
      background: #eeeeee;
      li{
        height: 30px;
        line-height: 30px;
        padding-left: 10px;
      }
    }
    .right{
      overflow-x: hidden;
    }
     .router-link-exact-active.router-link-active {
        color: #666;
        background-color: #fff;
    }
  }
</style>
