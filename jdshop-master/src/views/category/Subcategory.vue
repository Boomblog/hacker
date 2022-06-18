<template>
  <ul class="sub-category">
      <li
        v-for="sub in subs"
        :key="sub.id"
        is='router-link'
        to="/list"
        tag="li"
      >
      <img :src="sub.imageUrl" alt="" />
      <span>{{ sub.title }}</span>
      </li>
  </ul>
</template>

<script>
import { getSubCategories } from '@/api/category'
export default {
  name: 'SubCategory',
  data () {
    return {
      subs: []
    }
  },
  // created () {
  //   console.log(this)
  //   getSubCategories(this.$route.params.id)
  //     .then(res => {
  //       console.log(res)
  //       this.subs = res
  //     })
  // },
  beforeRouteEnter (to, from, next) {
    console.log('before route enter:', this)
    next((vm) => {
      console.log('before route enter next 回调', vm)
      getSubCategories(to.params.id)
        .then(res => {
          console.log(res)
          vm.subs = res
        })
    })
  },
  beforeRouteUpdate (to, from, next) {
    console.log('before route update:', this.$route)
    getSubCategories(to.params.id)
      .then(res => {
        console.log(res)
        this.subs = res
      })
      // 调用next 向下一步
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log('before route leave:')
    next()
  }
}
</script>

<style lang="scss" scoped>
.sub-category{
  display: flex;
  flex-wrap: wrap;
  li{
    width: 45%;
  }
}
</style>
