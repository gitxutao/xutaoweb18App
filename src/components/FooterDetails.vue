<template>
  <div>
    <div class="footer">
      <van-goods-action>
        <van-goods-action-icon icon="shop-o" text="店铺" @click="onClickIcon" />
        <van-goods-action-icon icon="service-o" text="客服" @click="onClickIcon" />
        <van-goods-action-icon icon="star-o" text="收藏" @click="onClickIcon" />
        <van-goods-action-icon icon="shopping-cart-o" text="购物车" @click="onClickIcon" />
        <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
      </van-goods-action>
    </div>
  </div>
</template>
<script>
export default {
    methods: {
    onClickIcon() {
      this.$toast('点击图标');
    },
    onClickButton() {
      this.$toast('点击按钮');
    },
  },
}
</script>
<style scoped>

</style>