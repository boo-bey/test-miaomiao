<template>
  <div class="min">
    <Header title="我的喵喵"></Header>
    <Login></Login>
    <Footer></Footer>
  </div>
</template>

<script>
import Login from "../components/Login.vue";
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
export default {
  components: {
    Footer,
    Header,
    Login,
  },
};
</script>

<style>
.min{
  height: 100%;
  width: 100%;
}
</style>