<template>
  <div class="main">
    <div class="lbt">
      <van-row>
        <van-col span="24">
          <van-swipe @change="onChange">
            <van-swipe-item>
              <img src="../../assets/spxqlbt1.png" width="100%" />
            </van-swipe-item>
            <van-swipe-item>
              <img src="../../assets/spxqlbt2.png" width="100%" />
            </van-swipe-item>
            <van-swipe-item>
              <img src="../../assets/spxqlbt3.png" width="100%" />
            </van-swipe-item>
            <template #indicator>
              <div class="custom-indicator">{{ current + 1 }}/3</div>
            </template>
          </van-swipe>
        </van-col>
      </van-row>
    </div>
    <div class="jg">
      <van-row type="flex">
        <van-col span="6" class="sj">￥119.00</van-col>
        <van-col span="18" class="yj">原价:￥289.00</van-col>
      </van-row>
    </div>
    <div class="name">
      <van-row type="flex" justify="space-between">
        <van-col span="24">忆江南茶叶正宗正山小种礼盒装红熟茶小种武夷红茶</van-col>
      </van-row>
    </div>
    <div class="xx">
      <van-row type="flex">
        <van-col span="9" class="by">包邮</van-col>
        <van-col span="8">销量:723笔</van-col>
        <van-col span="7">浙江省杭州市</van-col>
      </van-row>
    </div>
    <div class="fgx">
      <van-row type="flex">
        <van-col span="24" class="by"></van-col>
      </van-row>
    </div>
    <div class="psdz">
      <van-row type="flex">
        <van-col span="1"></van-col>
        <van-col span="21">配送至:河北省</van-col>
        <van-col span="2">
          <van-icon name="arrow" size="20" />
        </van-col>
      </van-row>
    </div>
    <div class="pl">
      <van-row type="flex">
        <van-col span="1"></van-col>
        <van-col span="18">评价(40)</van-col>
        <vacn-col span="3"><router-link to="/pj" tag="div">查看全部</router-link></vacn-col>
        <van-col span="2"></van-col>
      </van-row>
    </div>
    <div class="pl">
      <van-row type="flex">
        <van-col span="1"></van-col>
        <van-col span="3">张伟</van-col>
        <van-col span="13">这个茶友很懒,打个五星好评。</van-col>
        <van-col span="7">
          <van-rate v-model="value2" :count="5" />
        </van-col>
      </van-row>
    </div>
    <div class="pl">
      <van-row type="flex">
        <van-col span="1"></van-col>
        <van-col span="3">李佳隆</van-col>
        <van-col span="13">这个茶友很懒,打个五星好评。</van-col>
        <van-col span="7">
          <van-rate v-model="value1" allow-half void-icon="star" void-color="#eee" />
        </van-col>
      </van-row>
    </div>
    <div class="pl">
      <van-row type="flex">
        <van-col span="1"></van-col>
        <van-col span="3">小毛</van-col>
        <van-col span="13">这个茶友很懒,打个五星好评。</van-col>
        <van-col span="7">
          <van-rate v-model="value" :count="5" />
        </van-col>
      </van-row>
    </div>
    <div class="rs">
      <van-row type="flex">
        <van-col span="12">
          <van-row type="flex">
            <van-col span="24">349</van-col>
            <van-col span="24">关注人数</van-col>
          </van-row>
        </van-col>
        <van-col span="12">
          <van-row type="flex">
            <van-col span="24">6</van-col>
            <van-col span="24">全部商品</van-col>
          </van-row>
        </van-col>
      </van-row>
    </div>
    <div class="dp">
      <van-row type="flex">
        <van-col span="1"></van-col>
        <van-col span="11" class="lxsj">联系商家</van-col>
        <van-col span="1"></van-col>
        <van-col span="10" class="jrdp">进入店铺</van-col>
        <van-col span="1"></van-col>
      </van-row>
    </div>
    <div class="sptp">
      <van-row type="flex">
        <van-col span="24">
          <img src="../../assets/1-1.png" alt class="tp1" />
          <img src="../../assets/1-2.png" alt class="tp1" />
          <img src="../../assets/1-3.png" alt class="tp1" />
          <img src="../../assets/1-5 (2).png" alt class="tp1" />
          <img src="../../assets/1-5.png" alt class="tp1" />
          <img src="../../assets/1-6.png" alt class="tp1" />
          <img src="../../assets/1-7.png" alt class="tp1" />
          <img src="../../assets/1-9 (2).png" alt class="tp1" />
          <img src="../../assets/1-9 (1).png" alt class="tp1" />
          <img src="../../assets/1-11 (2).png" alt class="tp1" />
        </van-col>
      </van-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: 0,
      value: 5,
      value2: 5,
      value1: 4.5
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    }
  }
};
</script>
<style scoped>
.main {
  width: 100%;
}
.lbt img {
  width: 100%;
  height: 350px;
}
.my-swipe .van-swipe-item[data-v-6c5cf0ba] {
  color: #fff;
  font-size: 20px;
  line-height: 12px;
  text-align: center;
  background-color: #39a9ed;
}
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
  border: 1px solid rgb(212, 209, 209);
  border-radius: 50px;
  color: rgb(212, 209, 209);
}
.sj {
  font-size: 24px;
  color: red;
}
.yj {
  padding-top: 8px;
  font-size: 14px;
  text-decoration: line-through;
  color: rgb(172, 165, 165);
}
.name {
  padding: 20px 7px;
}
.by {
  padding-left: 10px;
}
.fgx {
  height: 10px;
  background-color: #f5f5f5;
  margin-top: 10px;
}
.psdz {
  height: 30px;
  border-bottom: 1px solid rgb(218, 209, 209);
  line-height: 30px;
}
.pl {
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid rgb(218, 209, 209);
}
.rs {
  text-align: center;
  height: 50px;
  line-height: 24px;
}
.lxsj {
  width: 180px;
  height: 40px;
  border: 1px black solid;
  line-height: 40px;
  text-align: center;
}
.jrdp {
  width: 180px;
  height: 40px;
  border: 1px black solid;
  line-height: 40px;
  text-align: center;
}
.dp {
  padding-top: 10px;
}
.tp1 {
  width: 100%;
}
.sptp {
  padding-top: 10px;
}
</style>