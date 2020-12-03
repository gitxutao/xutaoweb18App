<template>
  <div class="main">
    <div class="header">
      <Header></Header>
    </div>
    <div class="content8">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <div class="lbt">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="../assets/lb1.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/lb2.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/lb3.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/lb4.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/lb5.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/lb6.png" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="title">
      <van-row type="flex" justify="center">
        <van-col span="5">
          <img src="../assets/s-hc.png" alt />
        </van-col>
        <van-col span="5">
          <img src="../assets/s-lc.png" alt />
        </van-col>
        <van-col span="4">
          <img src="../assets/s-wlc.png" alt />
        </van-col>
        <van-col span="5">
          <img src="../assets/s-bc.png" alt />
        </van-col>
        <van-col span="5">
          <img src="../assets/s-1hc.png" alt />
        </van-col>
      </van-row>
    </div>
    <div class="titlename">
      <van-row type="flex" justify="center">
        <van-col span="5">红茶</van-col>
        <van-col span="5">绿茶</van-col>
        <van-col span="4">乌龙茶</van-col>
        <van-col span="5">白茶</van-col>
        <van-col span="5">黑茶</van-col>
      </van-row>
    </div>
    <div class="syfgx">
      <van-row type="flex" justify="center">
        <van-col span="24"></van-col>
      </van-row>
    </div>
    <div class="content">
      <van-row type="flex" justify="center">
        <van-col span="9">
          <router-link to="/dp" tag="div"><img src="../assets/sy1-1.png" alt class="tp1" /></router-link>
        </van-col>
        <van-col span="13" offset="1">
          <van-row type="flex" justify="center">
            <van-col span="12">
              <ul class="content-1">
                <li>好茶集市</li>
                <li>每日惊喜特大优惠</li>
              </ul>
            </van-col>
            <van-col span="12">
              <img src="../assets/sy1-2.png" alt class="tp2" />
            </van-col>
            <van-col span="12">
              <ul class="content-1">
                <li>更多优惠</li>
                <li>喝茶一种生活方式</li>
              </ul>
            </van-col>
            <van-col span="12">
              <img src="../assets/sy1-3.png" alt class="tp3" />
            </van-col>
          </van-row>
        </van-col>
      </van-row>
    </div>
    <div class="content1">
      <van-row type="flex" justify="space-between">
        <van-col span="24">
          <img src="../assets/1.png" alt class="tp4" />
        </van-col>
      </van-row>
    </div>
    <div class="content2">
      <van-row type="flex" justify="center">
        <van-col span="24">
          <img src="../assets/jxtj.png" alt class="tp5" />
        </van-col>
      </van-row>
    </div>
    <div class="content3">
      <van-row type="flex" justify="center">
        <van-col span="24">
          <img src="../assets/2.png" alt class="tp6" />
        </van-col>
      </van-row>
    </div>
    <div class="content4">
      <van-row type="flex" justify="space-around">
        <van-col span="6" class="content4-1">
          <img src="../assets/7.png" alt class="tp7" />
        </van-col>
        <van-col span="6" class="content4-1">
          <img src="../assets/5.png" alt class="tp7" />
        </van-col>
        <van-col span="6" class="content4-1">
          <img src="../assets/6.png" alt class="tp7" />
        </van-col>
      </van-row>
    </div>

    <div class="content5">
      <van-row type="flex" justify="center">
        <van-col span="24">
          <img src="../assets/3.png" alt class="tp8" />
        </van-col>
      </van-row>
    </div>

    <div class="content6" @click="spxq">
      <van-row type="flex" justify="space-around">
        <van-col span="12">
          <ul class="box">
            <li>
              <img src="../assets/sp1.png" alt class="tp9" />
            </li>
            <li>迎客松茶叶绿茶雀舌毛尖茶型茉型茉</li>
            <li class="jg2">
              <img src="../assets/xsg.png" alt class="tp10" />
              <span class="jg1">￥87.00</span>
            </li>
            <li class="jg3">
              <span class="jg">￥258.00</span>
              <span class="xl">销量:110笔</span>
            </li>
          </ul>
        </van-col>
        <van-col span="12">
          <ul class="box">
            <li>
              <img src="../assets/sp2.png" alt class="tp9" />
            </li>
            <li>熙月黄山毛峰礼盒装散装春型茉型茉</li>
            <li class="jg2">
              <img src="../assets/xsg.png" alt class="tp10" />
              <span class="jg1">￥1148.00</span> 
            </li>
            <li class="jg3">
              <span class="jg">￥328.00</span>
              <span class="xl">销量:368笔</span>
            </li>
          </ul>
        </van-col>
      </van-row>
    </div>
    <div class="content7">
      <van-row type="flex" justify="space-around">
        <van-col span="9">
          <ul class="box">
            <li>
              <img src="../assets/sp3.png" alt class="tp9" />
            </li>
            <li>八马茶叶 太姥山福鼎白茶贡型茉型茉</li>
            <li class="jg2">
              <img src="../assets/xsg.png" alt class="tp10" />
              <span class="jg1">￥87.00</span>
            </li>
            <li class="jg3">
              <span class="jg">￥258.00</span>
              <span class="xl">销量:110笔</span>
            </li>
          </ul>
        </van-col>
        <van-col span="9">
          <ul class="box">
            <li>
              <img src="../assets/sp4.png" alt class="tp9" />
            </li>
            <li>春伦茉莉花茶特级浓香型茉型茉型茉</li>
            <li class="jg2">
              <img src="../assets/xsg.png" alt class="tp10" />
              <span class="jg1">￥48.00</span>
            </li>
            <li class="jg3">
              <span class="jg">￥328.00</span>
              <span class="xl">销量:368笔</span>
            </li>
          </ul>
        </van-col>
      </van-row>
    </div>
     <div class="content7">
      <van-row type="flex" justify="space-around">
        <van-col span="9">
          <ul class="box">
            <li>
              <img src="../assets/sp5.png" alt class="tp9" />
            </li>
            <li>瓷罐金俊眉礼盒装 浓香茶叶型茉型茉</li>
            <li class="jg2">
              <img src="../assets/xsg.png" alt class="tp10" />
              <span class="jg1">￥66.00</span>
            </li>
            <li class="jg3">
              <span class="jg">￥125.00</span>
              <span class="xl">销量:60笔</span>
            </li>
          </ul>
        </van-col>
        <van-col span="9">
          <ul class="box">
            <li>
              <img src="../assets/sp6.png" alt class="tp9" />
            </li>
            <li>闽北乌龙武夷山大红袍大红袍型茉</li>
            <li class="jg2">
              <img src="../assets/xsg.png" alt class="tp10" />
              <span class="jg1">￥98</span>
            </li>
            <li class="jg3">
              <span class="jg">￥152.00</span>
              <span class="xl">销量:68笔</span>
            </li>
          </ul>
        </van-col>
      </van-row>
    </div>
    <div class="content7">
      <van-row type="flex" justify="space-around">
        <van-col span="9">
          <ul class="box">
            <li>
              <img src="../assets/sp7.png" alt class="tp9" />
            </li>
            <li>创意礼品功夫茶具套餐一套型茉型茉</li>
            <li class="jg2">
              <img src="../assets/xsg.png" alt class="tp10" />
              <span class="jg1">￥19.00</span>
            </li>
            <li class="jg3">
              <span class="jg">￥69.00</span>
              <span class="xl">销量:110笔</span>
            </li>
          </ul>
        </van-col>
        <van-col span="9">
          <ul class="box">
            <li>
              <img src="../assets/sp8.png" alt class="tp9" />
            </li>
            <li>武夷岩茶 武夷山浓香大茶叶型茉型茉</li>
            <li class="jg2">
              <img src="../assets/xsg.png" alt class="tp10" />
              <span class="jg1">￥169.00</span>
            </li>
            <li class="jg3">
              <span class="jg">￥158.00</span>
              <span class="xl">销量:368笔</span>
            </li>
          </ul>
        </van-col>
      </van-row>
    </div>
    </van-pull-refresh>
    </div>
    <div>
      <Footer></Footer>
    </div>
  </div>
</template>
<script>
import Footer from "../components/Footer";
import Header from '../components/Header'
export default {
  components: {
    Footer,
    Header
  },
  data() {
    return {
      container: null,
      value: "",
      account:"",
      password:"",
      isLoading: false,
    };
  },
  created(){
    this.login();
  },
  methods: {
     onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
      }, 1000);
    },
    login() {
      var user=JSON.parse(sessionStorage.getItem("user"));
      if(user){
       this.account=user.account1;
       this.password=user.password1;
      }
    },
    spxq(){
      this.$router.push({
        path:'/spxq'
      })
    }
  }
};
</script>
<style scoped>
.main {
  background-color: #f5f5f5;
  margin-bottom: 50px;
}
.header {
  width: 100%;
  background-color: white;
}
.van-col {
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
}
.my-swipe .van-swipe-item {
  text-align: center;
}
.lbt img {
  width: 100%;
  height: 170px;
}
.title {
  background-color: white;
}
.title img {
  width: 60px;
  height: 70px;
}
.titlename {
  background-color: white;
  color: #6b4d2a;
  height: 40px;
}
.syfgx {
  height: 10px;
}
.content {
  width: 100%;
  height: 185px;
  background-color: white;
}
.tp1 {
  width: 140px;
  height: 160px;
}
.tp2 {
  width: 70px;
  height: 70px;
}
.tp3 {
  width: 70px;
  height: 70px;
}
.tp4 {
  width: 90%;
}
.content1 {
  width: 100%;
  background-color: white;
}
.content2 img {
  width: 100%;
  height: 90px;
}
.tp6 {
  width: 97%;
}
.content-1 li:nth-of-type(2) {
  font-size: 12px;
  color: #e9e3e3;
}
.content4-1 {
  width: 116px;
  height: 150px;
  background-color: white;
}
.tp7 {
  width: 120px;
  height: 100px;
}
.tp8 { 
  width: 100%;
}
.tp9 {
  width: 195px;
  height: 160px;
}
.box {
  background-color: white;
}
.box li:nth-of-type(2) {
  width: 200px;
  color: #837d7d;
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tp10 {
  width: 60px;
  height: 20px;
  justify-content: flex-start
}
.jg {
  text-decoration: line-through;
  color: #a8a6a6;
  justify-content: flex-start;
}
.content7{
  padding-top: 10px;
}
.content8{
padding-top: 50px;
}
.jg1{
  justify-content: flex-start;
}
.jg2{
  width: 200px;
  display: flex;
  color: red;
}
.jg3{
  width: 200px;
  display: flex;
}
.xl{
  padding-left: 50px;
}
</style>