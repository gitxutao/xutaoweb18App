<template>
  <div>
    <div class="header">
      <van-row type="flex" justify="center">
        <van-col span="4">
          <van-icon name="arrow-left" size="30" />
        </van-col>
        <van-col span="16">
          <van-tabs v-model="active">
            <van-tab title="商品" to="/sp"></van-tab>
            <van-tab title="详情"></van-tab>
            <van-tab title="评价"></van-tab>
          </van-tabs>
        </van-col>
        <van-col span="4">
          <van-icon name="ellipsis" size="30" />
        </van-col>
      </van-row>
    </div>
    <div>
    </div>
  </div>
</template>
<script>
import SP from '../views/sp'
export default {
    data() {
        return {
            active:0
        }
    },
    components:{
      SP
    }
    
};
</script>
<style scoped>
.header {
  width: 100%;
  background-color: white;
  z-index: 10;
}
.van-col {
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
}
</style>