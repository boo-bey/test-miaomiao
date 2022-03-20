<template>
  <div class="min">
    <Header title="喵喵电影"></Header>
    <div class="nav">
      <router-link to="/movie/city" tag="div" class="city">
        <div class="cityl iconfont">上海&#xe642;</div>
      </router-link>
      <router-link to="/movie/nowplaying" tag="div" class="nowplay">
        <h2>正在热映</h2>
      </router-link>
      <router-link to="/movie/comingsoon" tag="div" class="comingplay">
        <h2>即将上映</h2>
      </router-link>
      <router-link to="/movie/search" tag="div" class="search iconfont"
        >&#xe650;</router-link
      >
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "Movie",
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
.min .nav {
  width: 100%;
  height: 60px;
  line-height: 60px;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #999;
  background: #fff;
  position: fixed;
  top: 60px;
  left: 0;
}

.min .nav .city {
  position: relative;
}

.min .mapl {
  display: none;
}

.min .cityl:hover .mapl {
  position: absolute;
  background: #fff;
  display: flex;
  justify-content: space-between;
}

.nav .city {
  font-size: 24px;
}

.active {
  border-bottom: 4px solid rgb(246, 59, 34);
}

.min .nav .nowplay h2,
.min .nav .comingplay h2,
.min .nav .search {
  font-size: 20px;
  font-weight: normal;
}

.min .nav .search {
  color: rgb(246, 59, 34);
  font-weight: bold;
}

</style>