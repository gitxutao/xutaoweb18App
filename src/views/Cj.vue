<template>
  <div class="main">
    <div class="bttp">
      <img src="../assets/cj7.png" alt class="tp1" />
    </div>
    <div class="title">
      <h4>茶具</h4>
    </div>
    <div class="content">
      <van-row type="flex" justify="center">
        <van-col span="8">
          <img src="../assets/cj.png" alt="" class="tp2">
          <p class="titlename">公道杯</p>
        </van-col>
        <van-col span="8">
          <img src="../assets/cj1.png" alt="" class="tp2">
          <p class="titlename">茶壶</p>
        </van-col>
        <van-col span="8">
          <img src="../assets/cj2.png" alt="" class="tp2">
          <p class="titlename">盖碗</p>
        </van-col>
      </van-row>
    </div>
    <div class="content">
      <van-row type="flex" justify="center">
        <van-col span="8">
          <img src="../assets/cj4.png" alt="" class="tp2">
          <p class="titlename">茶叶罐</p>
        </van-col>
        <van-col span="8">
          <img src="../assets/cj5.png" alt="" class="tp2">
          <p class="titlename">茶杯</p>
        </van-col>
        <van-col span="8">
          <img src="../assets/cj6.png" alt="" class="tp2">
          <p class="titlename">套组</p>
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