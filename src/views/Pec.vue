<template>
  <div class="main">
    <div class="bttp">
      <img src="../assets/pec.png" alt class="tp1" />
    </div>
    <div class="title">
      <h4>普洱茶</h4>
    </div>
    <div class="content">
      <van-row type="flex">
        <van-col span="8">
          <img src="../assets/pec1.png" alt="" class="tp2">
          <p class="titlename">生茶</p>
        </van-col>
        <van-col span="8">
          <img src="../assets/pec2.png" alt="" class="tp2">
          <p class="titlename">熟茶</p>
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