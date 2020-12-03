<template>
  <div class="main">
    <div class="header">
      <van-row type="flex">
        <van-col span="4">
          <van-icon name="user-circle-o" size="30" color="#ffffff" />
        </van-col>
        <van-col span="16">
          <h3>我的</h3>
        </van-col>
        <van-col span="4" class="ewm">
          <van-icon name="setting-o" size="30" color="#ffffff" />
        </van-col>
      </van-row>
    </div>
    <div class="content" v-show="content">
      <van-row type="flex" justify="center">
        <van-col span="1"></van-col>
        <van-col span="6">
          <img src="../../assets/wdtx.png" alt class="tp1" />
        </van-col>
        <van-col span="6">{{account}}</van-col>
        <van-col span="11"></van-col>
      </van-row>
    </div>
     <div class="content" v-show="content1">
      <van-row type="flex" justify="center">
        <van-col span="1"></van-col>
        <van-col span="6">
          <img src="../../assets/mdltx.png" alt class="tp1" />
        </van-col>
        <van-col span="6"><span @click="dl">登录</span>/<span @click="zc">注册</span></van-col>
        <van-col span="11"></van-col>
      </van-row>
    </div>
    <div class="content1">
      <van-row type="flex" justify="center">
        <van-col span="4">
            <van-row>
                <van-col span="24"><van-icon name="balance-pay" size="28"/></van-col>
                <van-col span="24">待付款</van-col>
            </van-row>
        </van-col>
        <van-col span="4">
            <van-row>
                <van-col span="24"><van-icon name="todo-list-o" size="28"/></van-col>
                <van-col span="24">待分享</van-col>
            </van-row>
        </van-col>
        <van-col span="4">
            <van-row>
                <van-col span="24"><van-icon name="records" size="28"/></van-col>
                <van-col span="24">待发货</van-col>
            </van-row>
        </van-col>
        <van-col span="4">
            <van-row>
                <van-col span="24"><van-icon name="newspaper-o" size="28"/></van-col>
                <van-col span="24">待收货</van-col>
            </van-row>
        </van-col>
        <van-col span="4">
            <van-row>
                <van-col span="24"><van-icon name="comment-o" size="28"/></van-col>
                <van-col span="24">待评价</van-col>
            </van-row>
        </van-col>
        <van-col span="4">
            <van-row>
                <van-col span="24"><van-icon name="orders-o" size="28"/></van-col>
                <van-col span="24">我的订单</van-col>
            </van-row>
        </van-col>
      </van-row>
    </div>
    <div class="content2">
      <van-row type="flex" justify="center">
        <van-col span="6">
            <van-row>
                <van-col span="24">0</van-col>
                <van-col span="24">积分</van-col>
            </van-row>
        </van-col>
        <van-col span="6">
            <van-row>
                <van-col span="24">0.00</van-col>
                <van-col span="24">余额</van-col>
            </van-row>
        </van-col>
        <van-col span="6">
            <van-row>
                <van-col span="24">0</van-col>
                <van-col span="24">优惠劵</van-col>
            </van-row>
        </van-col>
        <van-col span="6">
            <van-row>
              <router-link to="/wdqb" tag="div">
                <van-col span="24"><van-icon name="paid" size="20"/></van-col>
                <van-col span="24">我的钱包</van-col>
                </router-link>
            </van-row>
        </van-col>
      </van-row>
    </div>
     <div class="content3">
      <van-row type="flex" justify="center">
        <van-col span="6">
            <van-row>
                <van-col span="24"><van-icon name="star" color="yellow" size="24"/></van-col>
                <van-col span="24">收藏夹</van-col>
            </van-row>
        </van-col>
        <van-col span="6">
            <van-row>
                <van-col span="24"><van-icon name="like" color="red" size="24"/></van-col>
                <van-col span="24">关注店铺</van-col>
            </van-row>
        </van-col>
        <van-col span="6">
            <van-row>
                <van-col span="24"><van-icon name="todo-list" color="blueviolet" size="24"/></van-col>
                <van-col span="24">账单</van-col>
            </van-row>
        </van-col>
        <van-col span="6">
            <van-row>
                <van-col span="24"><van-icon name="manager" color="rgba(55, 133, 61, 0.527)" size="24"/></van-col>
                <van-col span="24">客户服务</van-col>
            </van-row>
        </van-col>
      </van-row>
    </div>
    <div class="content4">
      <van-row type="flex" justify="center">
        <van-col span="6">
            <van-row>
                <van-col span="24"><van-icon name="fire" color="green" size="24"/></van-col>
                <van-col span="24">我的茶树</van-col>
            </van-row>
        </van-col>
        <van-col span="6">
            <van-row>
                <van-col span="24"><van-icon name="like" color="yellowgreen" size="24"/></van-col>
                <van-col span="24">商家入驻</van-col>
            </van-row>
        </van-col>
        <van-col span="6">
            <van-row>
                <van-col span="24"><van-icon name="todo-list" color="blueviolet" size="24"/></van-col>
                <van-col span="24">每日一言</van-col>
            </van-row>
        </van-col>
        <van-col span="6">
            <van-row>
                <van-col span="24"><van-icon name="manager" color="blue" size="24"/></van-col>
                <van-col span="24">成为合伙人</van-col>
            </van-row>
        </van-col>
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
        <div>
            <Footer></Footer>
        </div>
  </div>
</template>
<script>
import Footer from '../../components/Footer'
export default {
    components:{
        Footer
    },
    data() {
        return {
            content:false,
            content1:true,
            account:"",
            password:""
        }
    },
    created(){
    this.login();
    if(this.account!=""&&this.password!=""){
      this.content=true;
       this.content1=false;
    }else if(this.account==""&&this.password==""){
      this.content1=true;
      this.content=false;
    }
  },
    methods:{
      dl(){
         var user=JSON.parse(sessionStorage.getItem("user"));
      if(user){
       this.account=user.account1;
       this.password=user.password1;
      }
        this.$router.push({
          path:'/login'
        })
      },
      zc(){
        this.$router.push({
          path:'/register'
        })
      },
      spxq(){
      this.$router.push({
        path:'/spxq'
      })
    },
    
  login() {
      var user=JSON.parse(sessionStorage.getItem("user"));
      if(user){
       this.account=user.account1;
       this.password=user.password1;
      }
    },
    }
};
</script>
<style  scoped>
.main{
    padding-bottom: 50px;
}
.header {
  width: 100%;
  height: 50px;
  background-color: white;
  position: fixed;
  z-index: 10;
  background-color: #463a3a;
  color: blue
}
.van-col {
  text-align: center;
  padding-top: 11px;
}
.tp1 {
  width: 65px;
  height: 65px;
  border-radius: 50px;
  background: white;
}
.content {
  padding-top: 50px;
  line-height: 65px;
  color: white;
  background-color: #463a3a;
}
h3 {
  color: white;
}
.content1{
    font-size: 13px;
    text-align: center;
     border-bottom: 1px solid rgb(218, 209, 209);
     height: 90px;
}
.content2{
    font-size: 14px;
    text-align: center;
     border-bottom: 7px solid rgb(218, 209, 209);
     height: 80px;
}
.content3{
    font-size: 14px;
    text-align: center;
     height: 80px;
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
  margin-top: 10px;
}
.main{
    padding-bottom: 50px;
}
</style>