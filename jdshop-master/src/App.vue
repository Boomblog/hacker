<template>
  <div id="app">
    <header>
      <router-view name="header" />
    </header>
    <main class="main-container">
      <router-view />
    </main>
    <footer>
      <router-view name="footer"/>
    </footer>
  </div>
</template>

<script>
import './_reset.scss' //  重置样式
export default {
  name: 'App',
  components: { // 局部注册组件

  }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'iconfont';  /* project id 1929572 */
  src: url('//at.alicdn.com/t/font_1929572_rzheq3fa81.eot');
  src: url('//at.alicdn.com/t/font_1929572_rzheq3fa81.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1929572_rzheq3fa81.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1929572_rzheq3fa81.woff') format('woff'),
  url('//at.alicdn.com/t/font_1929572_rzheq3fa81.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1929572_rzheq3fa81.svg#iconfont') format('svg');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
  html,body{
    height: 100%;
  }
  #app{
    height:100% ;
    display: flex;
    flex-direction: column;

   .main-container{
     flex: 1;
     text-align: center;
     overflow-x: hidden;
   }
  }
</style>
