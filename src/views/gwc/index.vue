<template>
  <div class="main">
    <div class="header">
      <van-row type="flex">
        <van-col span="4"></van-col>
        <van-col span="16">
          <h3>购物车</h3>
        </van-col>
        <van-col span="4" class="ewm">
          <van-icon name="chat-o" size="30" />
        </van-col>
      </van-row>
    </div>
    <div class="content">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <div>
          <van-row type="flex" justify="center">
            <van-col span="5"></van-col>
            <van-col span="14">
              <img src="../../assets/gwc.png" alt class="tp1" />
            </van-col>
            <van-col span="5"></van-col>
          </van-row>
        </div>
        <div class="bjs">
          <div class="content5">
            <van-row type="flex" justify="center">
              <van-col span="24">
                <img src="../../assets/3.png" alt class="tp8" />
              </van-col>
            </van-row>
          </div>

          <div class="content6" @click="spxq">
            <van-row type="flex" justify="space-around">
              <van-col span="12">
                <ul class="box">
                  <li>
                    <img src="../../assets/sp1.png" alt class="tp9" />
                  </li>
                  <li>迎客松茶叶绿茶雀舌毛尖茶型茉型茉</li>
                  <li class="jg2">
                    <img src="../../assets/xsg.png" alt class="tp10" />
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
                    <img src="../../assets/sp2.png" alt class="tp9" />
                  </li>
                  <li>熙月黄山毛峰礼盒装散装春型茉型茉</li>
                  <li class="jg2">
                    <img src="../../assets/xsg.png" alt class="tp10" />
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
                    <img src="../../assets/sp3.png" alt class="tp9" />
                  </li>
                  <li>八马茶叶 太姥山福鼎白茶贡型茉型茉</li>
                  <li class="jg2">
                    <img src="../../assets/xsg.png" alt class="tp10" />
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
                    <img src="../../assets/sp4.png" alt class="tp9" />
                  </li>
                  <li>春伦茉莉花茶特级浓香型茉型茉型茉</li>
                  <li class="jg2">
                    <img src="../../assets/xsg.png" alt class="tp10" />
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
                    <img src="../../assets/sp5.png" alt class="tp9" />
                  </li>
                  <li>瓷罐金俊眉礼盒装 浓香茶叶型茉型茉</li>
                  <li class="jg2">
                    <img src="../../assets/xsg.png" alt class="tp10" />
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
                    <img src="../../assets/sp6.png" alt class="tp9" />
                  </li>
                  <li>闽北乌龙武夷山大红袍大红袍型茉</li>
                  <li class="jg2">
                    <img src="../../assets/xsg.png" alt class="tp10" />
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
                    <img src="../../assets/sp7.png" alt class="tp9" />
                  </li>
                  <li>创意礼品功夫茶具套餐一套型茉型茉</li>
                  <li class="jg2">
                    <img src="../../assets/xsg.png" alt class="tp10" />
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
                    <img src="../../assets/sp8.png" alt class="tp9" />
                  </li>
                  <li>武夷岩茶 武夷山浓香大茶叶型茉型茉</li>
                  <li class="jg2">
                    <img src="../../assets/xsg.png" alt class="tp10" />
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
        </div>
      </van-pull-refresh>
      <div>
          <Footer></Footer>
        </div>
    </div>
  </div>
</template>
<script>
import Footer from "../../components/Footer";
export default {
  components: {
    Footer
  },
  data() {
    return {
      isLoading: false
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
      }, 1000);
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
.header {
  width: 100%;
  height: 50px;
  background-color: white;
  position: fixed;
  z-index: 10;
  border-bottom: 1px solid rgb(218, 209, 209);
}
.van-col {
  text-align: center;
  padding-top: 11px;
}
.content {
  padding-top: 50px;
}
.tp1 {
  width: 200px;
  height: 100px;
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
  justify-content: flex-start;
}
.jg {
  text-decoration: line-through;
  color: #a8a6a6;
  justify-content: flex-start;
}
.content7 {
  padding-top: 10px;
}
.content8 {
  padding-top: 50px;
}
.jg1 {
  justify-content: flex-start;
}
.jg2 {
  width: 200px;
  display: flex;
  color: red;
}
.jg3 {
  width: 200px;
  display: flex;
}
.xl {
  padding-left: 50px;
}
.van-col {
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
}
.bjs {
  background-color: #f5f5f5;
}
.main{
    padding-bottom: 50px;
}
</style>