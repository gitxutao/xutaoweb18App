<template>
  <div class="main">
    <div class="bttp">
      <img src="../assets/qt.png" alt class="tp1" />
    </div>
    <div class="title">
      <h4>其他</h4>
    </div>
    <div class="content">
      <van-row type="flex">
        <van-col span="8">
          <img src="../assets/qt1.png" alt="" class="tp2">
          <p class="titlename">即溶茶</p>
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