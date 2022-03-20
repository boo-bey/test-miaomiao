<template>
  <div class="foot">
    <router-link tag="div" to="/movie" class="movie">
      <span class="iconfont">&#xe6d9;</span>
      <p >电影</p>
    </router-link>
    <router-link tag="div" to="/cinema" class="cenam">
      <span class="iconfont">&#xe6aa;</span>
      <p>影院</p>
    </router-link>
    <router-link tag="div" to="/mine" class="miner">
      <span class="iconfont">&#xe633;</span>
      <p>我的</p>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.foot {
  height: 80px;
  width: 100%;
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  line-height: 80px;
  border-top: 1px solid rgb(198, 195, 195);
}
.foot div {
  display: flex;
  flex-direction: column;
  font-size: 16px;
  line-height: 20px;
  justify-content: center;
  align-items: center;
}
.ac{
  color: rgb(246, 59, 34);
}
</style>