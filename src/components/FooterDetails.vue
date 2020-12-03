<template>
  <div>
    <div class="footer">
      <van-goods-action>
        <van-goods-action-icon icon="shop-o" text="店铺" @click="onClickIcon1" />
        <van-goods-action-icon icon="service-o" text="客服" @click="onClickIcon" />
        <van-goods-action-icon icon="star-o" text="收藏" @click="onClickIcon1" />
        <van-goods-action-icon icon="shopping-cart-o" text="购物车" @click="onClickIcon2" />
        <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
      </van-goods-action>
    </div>
  </div>
</template>
<script>
export default {
    methods: {
    onClickIcon1() {
      this.$toast('收藏成功');
    },
    onClickButton() {
      this.$toast('点击按钮');
    },
    onClickIcon1(){
      this.$router.push({
        path:'/dp'
      })
    },
    onClickIcon2(){
       this.$router.push({
        path:'/gwc'
      })
    }
  },
}
</script>
<style scoped>

</style>