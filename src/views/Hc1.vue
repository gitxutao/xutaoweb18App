<template>
  <div class="main">
    <div class="bttp">
      <img src="../assets/1hc.png" alt class="tp1" />
    </div>
    <div class="title">
      <h4>黑茶</h4>
    </div>
    <div class="content">
      <van-row type="flex" justify="center">
        <van-col span="8">
          <img src="../assets/hc1.png" alt="" class="tp2">
          <p class="titlename">安化黑茶</p>
        </van-col>
        <van-col span="8">
          <img src="../assets/hc2.png" alt="" class="tp2">
          <p class="titlename">六堡茶</p>
        </van-col>
        <van-col span="8">
          <img src="../assets/hc3.png" alt="" class="tp2">
          <p class="titlename">茯茶</p>
        </van-col>
      </van-row>
    </div>
    <div class="content">
      <van-row type="flex" justify="center">
        <van-col span="8">
          <img src="../assets/hc14.png" alt="" class="tp2">
          <p class="titlename">藏茶</p>
        </van-col>
        <van-col span="8">
          <img src="../assets/hc13.png" alt="" class="tp2">
          <p class="titlename">千两茶</p>
        </van-col>
        <van-col span="8">
          <img src="../assets/hc6.png" alt="" class="tp2">
          <p class="titlename">广云贡饼</p>
        </van-col>
      </van-row>
    </div>
    <div class="content">
      <van-row type="flex">
        <van-col span="8">
          <img src="../assets/hc7.png" alt="" class="tp2">
          <p class="titlename">湖北老黑茶</p>
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