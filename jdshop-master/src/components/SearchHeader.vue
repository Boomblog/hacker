<template>
  <div class="search-header">
    <div class="back" @click="backHandler"><i class="iconfont">&#xe63a;</i></div>
    <div class="input-field"><input type="text"></div>
    <div><i class="iconfont">&#xe65e;</i></div>
  </div>
</template>

<script>
export default {
  name: 'SearchHeader',
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
.search-header{
  display: flex;
  align-items: center;
  height: 40px;
  .back{
    width: 60px;
    text-align: center;
  }
  .input-field{
    flex: 1;
  }
}
</style>
