<template>
  <div class="main">
    <div class="bttp">
      <img src="../assets/lc.png" alt class="tp1" />
    </div>
    <div class="title">
      <h4>绿茶</h4>
    </div>
    <div class="content">
      <van-row type="flex" justify="center">
        <van-col span="8">
          <img src="../assets/lc1.png" alt="" class="tp2">
          <p class="titlename">龙井</p>
        </van-col>
        <van-col span="8">
          <img src="../assets/lc20.png" alt="" class="tp2">
          <p class="titlename">碧螺春</p>
        </van-col>
        <van-col span="8">
          <img src="../assets/lc3.png" alt="" class="tp2">
          <p class="titlename">毛尖</p>
        </van-col>
      </van-row>
    </div>
    <div class="content">
      <van-row type="flex" justify="center">
        <van-col span="8">
          <img src="../assets/lc17.png" alt="" class="tp2">
          <p class="titlename">毛峰</p>
        </van-col>
        <van-col span="8">
          <img src="../assets/lc5.png" alt="" class="tp2">
          <p class="titlename">云雾</p>
        </van-col>
        <van-col span="8">
          <img src="../assets/lc6.png" alt="" class="tp2">
          <p class="titlename">日照绿茶</p>
        </van-col>
      </van-row>
    </div>
    <div class="content">
      <van-row type="flex" justify="center">
        <van-col span="8">
          <img src="../assets/lc7.png" alt="" class="tp2">
          <p class="titlename">六安瓜片</p>
        </van-col>
        <van-col span="8">
          <img src="../assets/lc8.png" alt="" class="tp2">
          <p class="titlename">雀舌</p>
        </van-col>
        <van-col span="8">
          <img src="../assets/lc9.png" alt="" class="tp2">
          <p class="titlename">安吉白茶</p>
        </van-col>
      </van-row>
    </div>
    <div class="content">
      <van-row type="flex" justify="center">
        <van-col span="8">
          <img src="../assets/lc10.png" alt="" class="tp2">
          <p class="titlename">蒙顶甘露</p>
        </van-col>
        <van-col span="8">
          <img src="../assets/lc11.png" alt="" class="tp2">
          <p class="titlename">雪水云绿</p>
        </van-col>
        <van-col span="8">
          <img src="../assets/lc12.png" alt="" class="tp2">
          <p class="titlename">开化龙顶</p>
        </van-col>
      </van-row>
    </div>
    <div class="content">
      <van-row type="flex" justify="center">
        <van-col span="8">
          <img src="../assets/lc13.png" alt="" class="tp2">
          <p class="titlename">惠名茶</p>
        </van-col>
        <van-col span="8">
          <img src="../assets/lc14.png" alt="" class="tp2">
          <p class="titlename">雨花茶</p>
        </van-col>
        <van-col span="8">
          <img src="../assets/lc15.png" alt="" class="tp2">
          <p class="titlename">径山茶</p>
        </van-col>
      </van-row>
    </div>
    <div class="content">
      <van-row type="flex">
        <van-col span="8">
          <img src="../assets/lc16.png" alt="" class="tp2">
          <p class="titlename">双龙银针</p>
        </van-col>
        
      </van-row>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.main {
  width: 295px;
  height: 650px;
  margin: 7px 9px;
   position: relative;
  overflow-y: scroll;
}
.tp1 {
  width: 295px;
}
.tp2{
  width: 96px;
  height: 70px;
}
.content{
  margin: 18px 0px;
}
.titlename{
    text-align: center;
}
</style>