<template>
  <div>
    <div class="header">
      <van-row type="flex" justify="center">
        <van-col span="11" class="sc" @click="sc">
          <van-icon name="cross" size="30" />
        </van-col>
        <van-col span="13" class="zc">登录</van-col>
      </van-row>
    </div>
    <div class="headerfgx"></div>
    <div class="logo">
      <van-row type="flex" justify="center">
        <van-col span="4"></van-col>
        <van-col span="16">
          <img src="../../assets/logo.png" alt class="tp1" />
        </van-col>
        <van-col span="4"></van-col>
      </van-row>
    </div>
    <div class="dlk">
      <van-row type="flex" justify="center">
        <van-col span="2"></van-col>
        <van-col span="20">
          <van-form @submit="onSubmit">
            <van-field
              v-model="account1"
              name="account1"
              label="账号"
              placeholder="账号"
            />
            <van-field
              v-model="password1"
              type="password"
              name="password1"
              label="密码"
              placeholder="密码"
            />
            <div style="margin: 16px;">
              <van-button round block type="info" native-type="submit">提交</van-button>
            </div>
          </van-form>
        </van-col>
        <van-col span="2"></van-col>
      </van-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: "",
      password: this.$route.query.password,
      account: this.$route.query.account,
      account1: "",
      password1: ""
    };
  },
  methods: {
    sc(){
      this.$router.go(-1)
    },
    onSubmit(values) {
      console.log("submit", values);
      sessionStorage.setItem("user",JSON.stringify(values));
       if (this.account1=="") {
           this.$toast({
          message: "请输入账号",
          position: "top"
        });
      }else if(this.password1 == ""){
         this.$toast({
          message: "请输入密码",
          position: "top"
        });
      }else if(this.account1!==this.account){
        this.$toast({
          message: "输入的账号不存在,请重新输入",
          position: "top"
        });
      }else if(this.password1!=this.password){
        this.$toast({
          message: "输入的密码错误,请重新输入",
          position: "top"
        });
      } else {
        this.$router.push({
          path: "/wd"
        });
      }
    },
  }
};
</script>
<style scoped>
.header {
  height: 50px;
}
.zc {
  line-height: 50px;
  font-size: 20px;
}
.sc {
  display: flex;
  align-self: center;
  padding-left: 15px;
}
/* .headerfgx {
  height: 0.1px;
  background-color: rgb(134, 130, 130);
} */
.logo {
  padding-top: 70px;
}
.tp1 {
  width: 150px;
  height: 40px;
  padding-left: 50px;
}
.van-button--info {
  background-color: #504848;
  border: 1px solid #504848;
}
.dlk{
  padding-top: 80px;
}
</style>