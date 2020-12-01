<template>
  <div class="main">
    <div class="bttp">
      <img src="../assets/2hc.png" alt class="tp1" />
    </div>
    <div class="title">
      <h4>黄茶</h4>
    </div>
    <div class="content">
      <van-row type="flex" justify="center">
        <van-col span="8">
          <img src="../assets/2hc1.png" alt="" class="tp2">
          <p class="titlename">平阳黄汤</p>
        </van-col>
        <van-col span="8">
          <img src="../assets/2hc2.png" alt="" class="tp2">
          <p class="titlename">霍山黄牙</p>
        </van-col>
        <van-col span="8">
          <img src="../assets/2hc3.png" alt="" class="tp2">
          <p class="titlename">君山银针</p>
        </van-col>
      </van-row>
    </div>
    <div class="content">
      <van-row type="flex">
        <van-col span="8">
          <img src="../assets/2hc4.png" alt="" class="tp2">
          <p class="titlename">蒙顶黄芽</p>
        </van-col>
        <van-col span="8">
          <img src="../assets/2hc5.png" alt="" class="tp2">
          <p class="titlename">海马宫茶</p>
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