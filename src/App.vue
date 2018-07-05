<script>
export default {
  created() {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync("logs") || [];
    logs.unshift(Date.now());
    wx.setStorageSync("logs", logs);

    console.log("app created and cache logs by setStorageSync");
  }
};
</script>

<style>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;
  padding: 0;
  height: 100%;
}
</style>
