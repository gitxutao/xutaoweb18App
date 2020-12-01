<template>
  <div class="main">
    <div>
      <Header></Header>
    </div>
    <div class="zhen">
      <van-row type="flex" justify="center">
        <van-col span="8">
          <div class="sidebar">
            <van-sidebar v-model="activeKey">
              <router-link to="/ppph" tag="div">
                <van-sidebar-item title="品牌排行" />
              </router-link>
               <router-link to="/hc" tag="div">
              <van-sidebar-item title="红茶" />
              </router-link>
              <router-link to="/lc" tag="div">
              <van-sidebar-item title="绿茶" />
               </router-link>
               <router-link to="/wlc" tag="div">
              <van-sidebar-item title="乌龙茶" />
               </router-link>
                <router-link to="/bc" tag="div">
              <van-sidebar-item title="白茶" />
               </router-link>
                <router-link to="/hc1" tag="div">
              <van-sidebar-item title="黑茶" />
                </router-link>
                <router-link to="/hc2" tag="div">
              <van-sidebar-item title="黄茶" />
              </router-link>
              <router-link to="/pec" tag="div">
              <van-sidebar-item title="普洱茶" />
              </router-link>
              <router-link to="/hc3" tag="div">
              <van-sidebar-item title="花茶" />
              </router-link>
              <router-link to="/cj" tag="div">
              <van-sidebar-item title="茶具" />
              </router-link>
              <router-link to="/qt" tag="div">
              <van-sidebar-item title="其他" />
              </router-link>
            </van-sidebar>
          </div>
        </van-col>
        <van-col span="16">
          <div class="tiao">
            <router-view></router-view>
          </div>
        </van-col>
      </van-row>
    </div>
    <div>
      <Footer></Footer>
    </div>
  </div>
</template>
<script>
import Header from "../../components/Header";
import Footer from "../../components/Footer";
export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      activeKey: 0
    };
  }
};
</script>
<style scoped>
.zhen {
  position: relative;
}

.tiao {
  position: absolute;
  top: 55px;
  left: 100px;
}
.van-sidebar-item {
  background-color: white;
  color: rgb(156, 146, 146);
}
.sidebar {
  height: 650px;
  width: 100px;
  border-right: 1px solid rgb(218, 209, 209);
  position: relative;
  overflow-y: scroll;
  top: 55px;
}
</style>