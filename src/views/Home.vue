<template>
  <div class="main">
    <div class="header">
      <van-row type="flex" justify="center">
        <van-col span="4" class="ewm">
          <van-icon name="scan" size="30" />
        </van-col>
        <van-col span="16">
          <van-search v-model="value" placeholder="请输入搜索关键词" />
        </van-col>
        <van-col span="4">
          <van-icon name="chat-o" size="30" />
        </van-col>
      </van-row>
    </div>
    <div class="lbt">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="../assets/lb1.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/lb2.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/lb3.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/lb4.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/lb5.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/lb6.png" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="title">
      <van-row type="flex" justify="center">
        <van-col span="5">
          <img src="../assets/s-hc.png" alt />
        </van-col>
        <van-col span="5">
          <img src="../assets/s-lc.png" alt />
        </van-col>
        <van-col span="4">
          <img src="../assets/s-wlc.png" alt />
        </van-col>
        <van-col span="5">
          <img src="../assets/s-bc.png" alt />
        </van-col>
        <van-col span="5">
          <img src="../assets/s-1hc.png" alt />
        </van-col>
      </van-row>
    </div>
    <div class="titlename">
      <van-row type="flex" justify="center">
        <van-col span="5">红茶</van-col>
        <van-col span="5">绿茶</van-col>
        <van-col span="4">乌龙茶</van-col>
        <van-col span="5">白茶</van-col>
        <van-col span="5">黑茶</van-col>
      </van-row>
    </div>
    <div class="syfgx">
      <van-row type="flex" justify="center">
        <van-col span="24"></van-col>
      </van-row>
    </div>
    <div class="content">
      <van-row type="flex" justify="center">
        <van-col span="9">
          <img src="../assets/sy1-1.png" alt class="tp1" />
        </van-col>
        <van-col span="13" offset="1">
          <van-row type="flex" justify="center">
            <van-col span="12">
              <ul class="content-1">
                <li>好茶集市</li>
                <li>每日惊喜特大优惠</li>
              </ul>
            </van-col>
            <van-col span="12">
              <img src="../assets/sy1-2.png" alt class="tp2" />
            </van-col>
            <van-col span="12">
              <ul class="content-1">
                <li>更多优惠</li>
                <li>喝茶一种生活方式</li>
              </ul>
            </van-col>
            <van-col span="12">
              <img src="../assets/sy1-3.png" alt class="tp3" />
            </van-col>
          </van-row>
        </van-col>
      </van-row>
    </div>
    <div class="content1">
      <van-row type="flex" justify="space-between">
        <van-col span="24">
          <img src="../assets/1.png" alt class="tp4" />
        </van-col>
      </van-row>
    </div>
    <div class="content2">
      <van-row type="flex" justify="center">
        <van-col span="24">
          <img src="../assets/jxtj.png" alt class="tp5" />
        </van-col>
      </van-row>
    </div>
    <div class="content3">
      <van-row type="flex" justify="center">
        <van-col span="24">
          <img src="../assets/2.png" alt class="tp6" />
        </van-col>
      </van-row>
    </div>
    <div class="content4">
      <van-row type="flex" justify="space-around">
        <van-col span="6" class="content4-1">
          <img src="../assets/7.png" alt="" class="tp7">
        </van-col>
        <van-col span="6" class="content4-1">
          <img src="../assets/5.png" alt="" class="tp7">
        </van-col>
        <van-col span="6" class="content4-1">
          <img src="../assets/6.png" alt="" class="tp7">
        </van-col>
      </van-row>
    </div>

    <div class="content3">
      <van-row type="flex" justify="center">
        <van-col span="24">
          <img src="../assets/2.png" alt class="tp6" />
        </van-col>
      </van-row>
    </div>
    
    <van-tabbar v-model="active" active-color="#b17a3f" inactive-color="#acacac" z-index="10">
      <van-tabbar-item icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o">分类</van-tabbar-item>
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
      container: null,
      value: ""
    };
  }
};
</script>
<style scoped>
.main {
  background-color: #f5f5f5;
}
.header {
  width: 100%;
  background-color: white;
}
.van-col {
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
}
.my-swipe .van-swipe-item {
  text-align: center;
}
.lbt img {
  width: 100%;
  height: 170px;
}
.title {
  background-color: white;
}
.title img {
  width: 60px;
  height: 70px;
}
.titlename {
  background-color: white;
  color: #6b4d2a;
  height: 40px;
}
.syfgx {
  height: 10px;
}
.content {
  width: 100%;
  height: 185px;
  background-color: white;
}
.tp1 {
  width: 140px;
  height: 160px;
}
.tp2 {
  width: 70px;
  height: 70px;
}
.tp3 {
  width: 70px;
  height: 70px;
}
.tp4 {
  width: 90%;
}
.content1 {
  width: 100%;
  background-color: white;
}
.content2 img {
  width: 100%;
  height: 90px;
}
.tp6 {
  width: 97%;
}
.content-1 li:nth-of-type(2) {
  font-size: 12px;
  color: #e9e3e3;
}
.content4-1{
  width: 116px;
  height: 150px;
  background-color: white;
}
.tp7{
  width: 120px;
  height: 100px;
}
</style>