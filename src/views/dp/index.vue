<template>
  <div class="main1">
    <div class="header">
      <van-row type="flex">
        <van-col span="4" class="ewm">
          <van-icon name="arrow-left" size="30" @click="fh" color="#ffffff" />
        </van-col>
        <van-col span="16" class="ewm">
          <input type="text" name id class="srk" placeholder="搜本店" />
        </van-col>
        <van-col span="4" class="ewm">
          <router-link to="/xx" tag="div">
            <van-icon name="chat-o" size="30" color="#ffffff" />
          </router-link>
        </van-col>
      </van-row>
    </div>
    <div class="main">
      <div class="content">
        <van-row type="flex">
          <van-col span="1" class="content1"></van-col>
          <van-col span="6" class="content1">
            <img src="../../assets/dp1.png" alt class="tp1" />
          </van-col>
          <van-col span="1" class="content1"></van-col>
          <van-col span="12" class="content1">
            <van-row>
              <van-col span="24">
                好茶集市
                <van-icon name="arrow" />
              </van-col>
              <van-col span="24">关注人数:1945</van-col>
            </van-row>
          </van-col>
          <van-col span="3" class="content1">关注</van-col>
          <van-col span="1" class="content1"></van-col>
        </van-row>
      </div>
    </div>
    <div class="ph">
      <van-row type="flex" justify="center">
        <van-col span="6">销量</van-col>
        <van-col span="6">价格</van-col>
        <van-col span="6">新品</van-col>
        <van-col span="6">筛选</van-col>
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
        <van-col span="12">
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
        <van-col span="12">
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
        <van-col span="12">
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
        <van-col span="12">
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
    <div class="content7">
      <van-row type="flex" justify="space-around">
        <van-col span="12">
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
        <van-col span="12">
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
    <div class="footer">
       <van-tabbar v-model="active" active-color="#b17a3f" inactive-color="#acacac">
     <van-tabbar-item icon="shop-o"> <router-link to="" tag="div">店铺详情</router-link></van-tabbar-item>
       <van-tabbar-item icon="service-o"><router-link to="" tag="div">联系商家</router-link></van-tabbar-item>
    </van-tabbar>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    fh() {
      this.$router.go(-1);
    },
    spxq() {
      this.$router.push({
        path: "/spxq"
      });
    }
  }
};
</script>
<style scoped>
.main {
  background-color: #f5f5f5;
}
.header {
  width: 100%;
  background-color: #463a3a;
  position: fixed;
  z-index: 10;
  height: 50px;
}
.ewm {
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
}
.srk {
  height: 40px;
  width: 260px;
  border-radius: 40px;
}
.main {
  padding-top: 49px;
}
.content {
  height: 50px;
  background-color: #463a3a;
}
.tp1 {
  width: 60px;
  height: 37px;
  padding-top: 7px;
}
.content1 {
  align-items: center;
  display: flex;
  justify-content: center;
  color: white;
}
.ph {
  height: 40px;
  border-bottom: 1px solid rgb(218, 209, 209);
  line-height: 40px;
  text-align: center;
}
.box {
  background-color: white;
}
.tp9 {
  width: 195px;
  height: 160px;
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
.content7 {
  padding-top: 10px;
}
.main1{
    padding-bottom: 50px;
}
.box li:nth-of-type(2) {
  width: 200px;
  color: #837d7d;
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>