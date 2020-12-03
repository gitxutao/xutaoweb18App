<template>
    <div>
        <div class="header">
      <van-row type="flex" >
        <van-col span="4" class="ewm">
          <van-icon name="arrow-left" size="30" @click="fh"/>
        </van-col>
        <van-col span="16">
          <h3>{{title}}</h3>
        </van-col>
        <van-col span="4">
        </van-col>
      </van-row>
    </div> 
    </div>
</template>
<script>
export default {
    data() {
        return {
        }
    },
    props:{
      title:{
        default:'消息'
      }
    },
    methods:{
      fh(){
        this.$router.go(-1)
      }
    }
}
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
</style>