<template>
  <div>
    <div class="header">
      <van-row type="flex" justify="center">
        <van-col span="11" class="sc">
          <van-icon name="cross" size="30" />
        </van-col>
        <van-col span="13" class="zc">注册</van-col>
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
    <div class="zck">
      <van-row type="flex" justify="center">
        <van-col span="2"></van-col>
        <van-col span="20">
          <van-form @submit="onSubmit">
            <van-field v-model="account" name="账号" label="账号" placeholder="账号" />
            <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码" />
            <van-field
              v-model="password1"
              type="password"
              name="确定密码"
              label="确定密码"
              placeholder="确定密码"
            />
            <div style="margin: 16px;">
              <van-button round block type="info" native-type="submit" @click="zc">注册</van-button>
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
      password: "",
      password1: "",
      account: ""
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
    zc() {
      if (this.account == "") {
        this.$toast({
          message: "请输入账号",
          position: "top"
        });
      } else if (this.password == "") {
        this.$toast({
          message: "请设置密码",
          position: "top"
        });
      } else if (this.password1 == "") {
        this.$toast({
          message: "请输入确认密码",
          position: "top"
        });
      } else if (this.password != this.password1) {
        this.$toast({
          message: "两次输入密码不一致",
          position: "top"
        });
      } else {
        this.$router.push({
          path: "/login?account=" + this.account + "&password=" + this.password
        });
      }
    }
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
.zck{
  padding-top: 80px;
}
</style>