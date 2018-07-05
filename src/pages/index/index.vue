<style scoped>
.container {
  /* padding: 0 20px; */
  width: 100%;
  height: 100%;
  background-color: #f5f6f7;
}
.userinfo {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.userinfo-avatar {
  margin: 20rpx;
  width: 128rpx;
  height: 128rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  margin-bottom: 5px;
  padding: 0 12px;
  border: 1px solid #ccc;
}
.menu {
  overflow: hidden;
  width: 100%;
  height: 40px;
  background-color: #f30213;
}
.menu-item {
  float: left;
  box-sizing: border-box;
  width: 25%;
  color: #ffffff;
  text-align: center;
  font-size: 18px;
  line-height: 38px;
}
.list {
  width: 100%;
}
.items {
  height: 88px;
  border: 1px solid #efefef;
  background-color: #ffffff;
  /* box-shadow: 0px 2px 2px 1px #eee; */
  margin-top: 10px;
  padding: 10px 20px;
  box-sizing: border-box;
}
.lotteryName,
.lotteryJackpot,
.issuName,
.date {
  display: inline-block;
  margin: 4px 6px;
  color: #333;
  font-size: 16px;
}
.topRight {
  float: right;
}
.redBall {
  display: inline-block;
  width: 28px;
  height: 28px;
  color: #ffffff;
  background-color: #f30213;
  border-radius: 50%;
  line-height: 28px;
  text-align: center;
  margin: 0 4px;
  font-size: 14px;
}
.blueBall {
  display: inline-block;
  width: 28px;
  height: 28px;
  color: #ffffff;
  background-color: #38f;
  border-radius: 50%;
  line-height: 28px;
  text-align: center;
  margin: 0 4px;
  font-size: 14px;
}
.bottom {
  margin-top: 10px;
}
.rightArrow {
  width: 24px;
  height: 24px;
}
</style>


<template class="page">

  <div class="container">
    <!-- <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div> -->
    <div class="menu" >
      <p class="menu-item" @click="getDataId('all')" index="1">全部</p>
      <p class="menu-item" @click="getDataId('11X5')" index ="2">11选5</p>
      <p class="menu-item" @click="getDataId('K3')" index="3">快3</p>
      <p class="menu-item" @click="getDataId('other')" index="4">其它</p>
    </div>
    <div class="list">
      <a href="/pages/counter/main" class="counter"><div class="items">
        <div>
          <span class='lotteryName'>双色球</span>
          <span class='lotteryJackpot'>奖池32亿</span>
          <div class="topRight">
            <span class="issuName">第2018011期</span>
            <span class="date">02-03</span>
          </div>
        </div>
        <div class="bottom">
            <span class="redBall">1</span>
            <span class="redBall">2</span>
            <span class="redBall">3</span>
            <span class="redBall">4</span>
            <span class="redBall">5</span>
            <span class="redBall">6</span>
            <span class="redBall">7</span>
            <span class="blueBall">80</span>
          <div class="topRight">
            <img class="rightArrow" src="../../../static/images/timeright.png" alt="">
          </div>
        </div>
       </div>
      </a>
      <a href="/pages/counter/main" class="counter">
        <div class="items">
          <div>
            <span class='lotteryName'>双色球</span>
            <span class='lotteryJackpot'>奖池32亿</span>
            <div class="topRight">
              <span class="issuName">第2018011期</span>
              <span class="date">02-03</span>
            </div>
          </div>
          <div class="bottom">
              <span class="redBall">11</span>
              <span class="redBall">21</span>
              <span class="redBall">32</span>
              <span class="redBall">42</span>
              <span class="redBall">52</span>
              <span class="redBall">62</span>
              <span class="redBall">72</span>
              <span class="blueBall">80</span>
            <div class="topRight">
              <img class="rightArrow" src="../../../static/images/timeright.png" alt="">
            </div>
          </div>
        </div>
      </a>
    </div>
   
  </div>
  <!-- <navigator url="/page/navigate/navigate?title=navigate" hover-class="navigator-hover">跳转到新页面</navigator> -->
  <!-- <navigator url="/pages/counter/main" open-type="redirect" hover-class="other-navigator-hover">在当前页打开</navigator> -->
</template>

<script>
import card from "@/components/card";

export default {
  data() {
    return {
      motto: "Hello World",
      userInfo: {}
    };
  },

  components: {
    card
  },

  methods: {
    bindViewTap() {
      const url = "../logs/main";
      wx.navigateTo({ url });
    },
    getUserInfo() {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: res => {
              this.userInfo = res.userInfo;
            }
          });
        }
      });
    },
    getDataId(type) {
      console.log(type);
    }
  },

  created() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo();
  }
};
</script>


