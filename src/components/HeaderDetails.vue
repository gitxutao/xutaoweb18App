<template>
  <div>
    <div class="header">
      <van-row type="flex"  style="width:100%">
        <van-col span="24">
          <van-tabs v-model="active" swipeable>
            <van-tab title="商品"><SP></SP></van-tab>
            <van-tab title="详情"><XX></XX></van-tab>
            <van-tab title="评价"><PJ></PJ></van-tab>
          </van-tabs>
        </van-col>
      </van-row>
    </div>
    <div>
    </div>
  </div>
</template>
<script>
import SP from '../views/sp'
import XX from '../views/xx1'
import PJ from '../views/pj'
export default {
    data() {
        return {
            active:0
        }
    },
    components:{
      SP,
      XX,
      PJ
    }
    
};
</script>
<style scoped>
.header {
  width: 100%;
  background-color: white;
  z-index: 10;
}

</style>