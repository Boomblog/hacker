<template>
  <div class="title-header">
    <div class="back" @click="backHandler"><i class="iconfont">&#xe63a;</i></div>
    <div class="title-field">{{ $route.meta.title }}</div>
    <div><i class="iconfont">&#xe65e;</i></div>
  </div>
</template>

<script>
export default {
  name: 'TitleHeader',
  data () {
    return {
      title: '页面标题'
    }
  },
  created () {
    console.log(this)
  },
  methods: {
    backHandler () {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
.title-header{
  display: flex;
  align-items: center;
  height: 40px;
  .back{
    width: 60px;
    text-align: center;
  }
  .title-field{
    flex: 1;
  }
}
</style>
