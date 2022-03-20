<template>
  <div class="min">
    <Header title="我的喵喵"></Header>
    <Login></Login>
    <Footer></Footer>
  </div>
</template>

<script>
import Login from '@/components/Login'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name:'Mine',
  components:{
    Header,
    Footer,
    Login,
  }
};
</script>

<style>
</style>