<template>
  <div class="home">
    <div class="swiper-container">
      <div class="swiper-wrapper">
          <div
          class="swiper-slide"
          v-for="banner in banners"
          :key='banner.id'
          >
            <img :src="banner.imageUrl" alt="">
          </div>
      </div>

    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"></div>
  </div>
  </div>
</template>

<script>
import { getBanners } from '@/api/home'
import Swiper from 'swiper'
import 'swiper/swiper.scss'

export default {
  name: 'Home',
  data () {
    return {
      banners: []
    }
  },
  created () {
    // 发起ajax请求
    getBanners()
      .then(res => {
        console.log(res)
        this.banners = res
        // 在下次DOM 更新后 创建swiper对象
        this.$nextTick(() => {
          /* eslint-disable-next-line */
            new Swiper ('.swiper-container', {
            Autoplay: true,
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination'
            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }
          })
        })
      })
  },
  mounted () {

  }
}
</script>

<style lang="scss" scoped>
.home{
  .swiper-container {
      width: 100%;
      height: 0 ;
      padding-top: calc(100% *378 /1000);
      position: relative;
      .swiper-wrapper{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
}
</style>
