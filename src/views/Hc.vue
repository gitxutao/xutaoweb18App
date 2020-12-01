<template>
  <div class="main">
    <div class="bttp">
      <img src="../assets/hc.png" alt class="tp1" />
    </div>
    <div class="title">
      <h4>红茶</h4>
    </div>
    <div class="content">
      <van-row type="flex" justify="center">
        <van-col span="8">
          <img src="../assets/hc1.png" alt="" class="tp2">
          <p class="titlename">正山小种</p>
        </van-col>
        <van-col span="8">
          <img src="../assets/hc2.png" alt="" class="tp2">
          <p class="titlename">金骏眉</p>
        </van-col>
        <van-col span="8">
          <img src="../assets/hc3.png" alt="" class="tp2">
          <p class="titlename">祁门</p>
        </van-col>
      </van-row>
    </div>
    <div class="content">
      <van-row type="flex" justify="center">
        <van-col span="8">
          <img src="../assets/hc14.png" alt="" class="tp2">
          <p class="titlename">银骏眉</p>
        </van-col>
        <van-col span="8">
          <img src="../assets/hc13.png" alt="" class="tp2">
          <p class="titlename">蒙顶红茶</p>
        </van-col>
        <van-col span="8">
          <img src="../assets/hc6.png" alt="" class="tp2">
          <p class="titlename">滇红</p>
        </van-col>
      </van-row>
    </div>
    <div class="content">
      <van-row type="flex" justify="center">
        <van-col span="8">
          <img src="../assets/hc7.png" alt="" class="tp2">
          <p class="titlename">闽红</p>
        </van-col>
        <van-col span="8">
          <img src="../assets/hc8.png" alt="" class="tp2">
          <p class="titlename">百瑞香</p>
        </van-col>
        <van-col span="8">
          <img src="../assets/hc9.png" alt="" class="tp2">
          <p class="titlename">川红</p>
        </van-col>
      </van-row>
    </div>
    <div class="content">
      <van-row type="flex" justify="center">
        <van-col span="8">
          <img src="../assets/hc10.png" alt="" class="tp2">
          <p class="titlename">霍红</p>
        </van-col>
        <van-col span="8">
          <img src="../assets/hc11.png" alt="" class="tp2">
          <p class="titlename">苏红</p>
        </van-col>
        <van-col span="8">
          <img src="../assets/hc12.png" alt="" class="tp2">
          <p class="titlename">小赤甘</p>
        </van-col>
      </van-row>
    </div>
    <div class="content">
      <van-row type="flex" justify="center">
        <van-col span="8">
          <img src="../assets/hc18.png" alt="" class="tp2">
          <p class="titlename">乌沃茶</p>
        </van-col>
        <van-col span="8">
          <img src="../assets/hc17.png" alt="" class="tp2">
          <p class="titlename">泉城红</p>
        </van-col>
        <van-col span="8">
          <img src="../assets/hc16.png" alt="" class="tp2">
          <p class="titlename">湖红</p>
        </van-col>
      </van-row>
    </div>
    <div class="content">
      <van-row type="flex">
        <van-col span="8">
          <img src="../assets/hc15.png" alt="" class="tp2">
          <p class="titlename">宁红</p>
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