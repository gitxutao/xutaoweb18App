<template>
  <div class="main">
    <div class="bttp">
      <img src="../assets/3hc.png" alt class="tp1" />
    </div>
    <div class="title">
      <h4>花茶</h4>
    </div>
    <div class="content">
      <van-row type="flex" justify="center">
        <van-col span="8">
          <img src="../assets/3hc1.png" alt="" class="tp2">
          <p class="titlename">菊花茶</p>
        </van-col>
        <van-col span="8">
          <img src="../assets/3hc2.png" alt="" class="tp2">
          <p class="titlename">金花茶</p>
        </van-col>
        <van-col span="8">
          <img src="../assets/3hc3.png" alt="" class="tp2">
          <p class="titlename">玫瑰花茶</p>
        </van-col>
      </van-row>
    </div>
    <div class="content">
      <van-row type="flex" justify="center">
        <van-col span="8">
          <img src="../assets/3hc4.png" alt="" class="tp2">
          <p class="titlename">茉莉花茶</p>
        </van-col>
        <van-col span="8">
          <img src="../assets/3hc5.png" alt="" class="tp2">
          <p class="titlename">金盏花茶</p>
        </van-col>
        <van-col span="8">
          <img src="../assets/3hc6.png" alt="" class="tp2">
          <p class="titlename">百合花茶</p>
        </van-col>
      </van-row>
    </div>
    <div class="content">
      <van-row type="flex" justify="center">
        <van-col span="8">
          <img src="../assets/3hc7.png" alt="" class="tp2">
          <p class="titlename">白兰花茶</p>
        </van-col>
        <van-col span="8">
          <img src="../assets/3hc8.png" alt="" class="tp2">
          <p class="titlename">勿忘我花茶</p>
        </van-col>
        <van-col span="8">
          <img src="../assets/3hc9.png" alt="" class="tp2">
          <p class="titlename">桂花茶</p>
        </van-col>
      </van-row>
    </div>
     <div class="content">
      <van-row type="flex">
        <van-col span="8">
          <img src="../assets/3hc10.png" alt="" class="tp2">
          <p class="titlename">紫罗兰</p>
        </van-col>
        <van-col span="8">
          <img src="../assets/3hc12.png" alt="" class="tp2">
          <p class="titlename">栀子花茶</p>
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