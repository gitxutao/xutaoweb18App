<template>
    <div>
        <div class="header">
      <van-row type="flex" justify="center">
        <van-col span="4" class="ewm">
          <van-icon name="scan" size="30" />
        </van-col>
        <van-col span="16">
          <van-search v-model="value" placeholder="请输入搜索关键词" />
        </van-col>
        <van-col span="4">
          <van-icon name="chat-o" size="30" />
        </van-col>
      </van-row>
    </div> 
    </div>
</template>
<script>
export default {
    data() {
        return {
           value:"" 
        }
    },
}
</script>
<style scoped>
.header {
  width: 100%;
  background-color: white;
  position: fixed;
  z-index: 10;
  border-bottom: 1px solid rgb(218, 209, 209);
}
.van-col {
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
}
</style>