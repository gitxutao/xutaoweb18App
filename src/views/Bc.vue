<template>
  <div class="main">
    <div class="bttp">
      <img src="../assets/bc.png" alt class="tp1" />
    </div>
    <div class="title">
      <h4>白茶</h4>
    </div>
    <div class="content">
      <van-row type="flex" justify="center">
        <van-col span="8">
          <img src="../assets/bc1.png" alt="" class="tp2">
          <p class="titlename">福鼎白茶</p>
        </van-col>
        <van-col span="8">
          <img src="../assets/bc2.png" alt="" class="tp2">
          <p class="titlename">白牡丹</p>
        </van-col>
        <van-col span="8">
          <img src="../assets/bc3.png" alt="" class="tp2">
          <p class="titlename">寿眉</p>
        </van-col>
      </van-row>
    </div>
    <div class="content">
      <van-row type="flex" justify="center">
        <van-col span="8">
          <img src="../assets/bc4.png" alt="" class="tp2">
          <p class="titlename">白毫银针</p>
        </van-col>
        <van-col span="8">
          <img src="../assets/bc5.png" alt="" class="tp2">
          <p class="titlename">贡眉</p>
        </van-col>
        <van-col span="8">
          <img src="../assets/bc6.png" alt="" class="tp2">
          <p class="titlename">老白茶</p>
        </van-col>
      </van-row>
    </div>
    <div class="content">
      <van-row type="flex">
        <van-col span="8">
          <img src="../assets/bc7.png" alt="" class="tp2">
          <p class="titlename">太姥银针</p>
        </van-col>
        <van-col span="8">
          <img src="../assets/bc8.png" alt="" class="tp2">
          <p class="titlename">新工艺白茶</p>
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