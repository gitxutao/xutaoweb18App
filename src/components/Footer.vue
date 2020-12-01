<template>
  <div class="main">
    <van-tabbar v-model="active" active-color="#b17a3f" inactive-color="#acacac">
     <van-tabbar-item icon="wap-home-o"> <router-link to="/home" tag="div">首页</router-link></van-tabbar-item>
       <van-tabbar-item icon="apps-o"><router-link to="/fl" tag="div">分类</router-link></van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item icon="manager-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
    data() {
        return {
            active: 0,
        }
    },
}
</script>
<style scoped>
.main{
  position: fixed;
}
</style>