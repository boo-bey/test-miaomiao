<template>
  <div class="min">
    <Header title="喵喵影院"></Header>
     <div class="nav">
            <div class="city">
                <div class="cityl iconfont">
                    全城&#xe642;
                    
                </div>
            </div>
            <div class="city">
                <div class="cityl iconfont">
                    品牌&#xe642;
                   
                </div>
            </div>
            <div class="city">
                <div class="cityl iconfont">
                    特色&#xe642;
                   
                </div>
            </div>
     </div>
    <Clist></Clist>
    <Footer></Footer>
  </div>
</template>

<script>
import Clist from '@/components/Clist'
import Header from'@/components/Header'
import Footer from'@/components/Footer'
export default {
  name:'Cinema',
  components:{
    Header,
    Footer,
    Clist,
  }
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
    background:#fff;
    position:fixed ;
    top: 60px;
    left: 0;
}
</style>