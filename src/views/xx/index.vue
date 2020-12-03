<template>
  <div>
    <div class="header">
      <Header1 title="消息"></Header1>
    </div>
    <div class="content">
      <van-row type="flex" justify="center">
        <van-col span="11">交易物流</van-col>
        <van-col span="2">|</van-col>
        <van-col span="11">通知</van-col>
      </van-row>
    </div>
    <div class="content1">
      <van-row type="flex" justify="center">
        <van-col span="7"></van-col>
        <van-col span="8"><img src="../../assets/xx.png" alt="" class="tp1"></van-col>
        <van-col span="9"></van-col>
      </van-row>
    </div>
  </div>
</template>
<script>
import Header1 from "../../components/Header1";
export default {
  components: {
    Header1
  }
};
</script>
<style scoped>
.content{
  padding-top: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
   border-bottom: 1px solid rgb(218, 209, 209);
}
.tp1{
  width: 150px;
  height: 150px;
}
.content1{
  padding-top: 240px;
}
</style>