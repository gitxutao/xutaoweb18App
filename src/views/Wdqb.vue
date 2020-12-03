<template>
  <div>
    <div>
      <Header1 title="我的钱包"></Header1>
    </div>
    <div>
      <van-row type="flex" justify="center">
        <van-col span="24">
          <img src="../assets/wdqb.png" alt class="tp1" />
        </van-col>
      </van-row>
    </div>
    <div class="content">
      <van-row type="flex" justify="center">
        <van-col span="9"></van-col>
        <van-col span="6">
          <van-row class="ye">
            <van-col span="24" class="ye1">0.00</van-col>
            <van-col span="24" class="wz">总余额(元)</van-col>
          </van-row>
        </van-col>
        <van-col span="9"></van-col>
      </van-row>
    </div>
    <div class="content1">
      <van-row type="flex" justify="center">
        <van-col span="1"></van-col>
        <van-col span="20">余额明细</van-col>
        <van-col span="2"><van-icon name="arrow" /></van-col>
        <van-col span="1"></van-col>
      </van-row>
    </div>
     <div class="content2">
      <van-row type="flex" justify="center">
        <van-col span="1"></van-col>
        <van-col span="20">我的银行卡</van-col>
        <van-col span="2"><van-icon name="arrow" /></van-col>
        <van-col span="1"></van-col>
      </van-row>
    </div>
  </div>
</template>
<script>
import Header1 from "../components/Header1";
export default {
  components: {
    Header1
  }
};
</script>
<style scoped>
.tp1 {
  width: 100%;
}
.ye {
  text-align: center;
}
.content {
  margin-top: -120px;
}
.ye1 {
  font-size: 26px;
  color: white;
}
.wz {
  color: white;
}
.content1{
    margin-top: 74px;
    border-bottom: 1px solid rgb(218, 209, 209);
    height: 30px;
}
.content2{
    margin-top: 10px;
    border-bottom: 1px solid rgb(218, 209, 209);
    height: 30px;
}
</style>