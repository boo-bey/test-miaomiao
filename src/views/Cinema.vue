<template>
  <div class="min">
      <Header title="喵喵电影"></Header>
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
        <Cilist></Cilist>
      <Footer></Footer>
  </div>
</template>

<script>
import Cilist from '../components/Cilist.vue'
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
export default {

components:{
    Footer,
    Header ,
    Cilist,
}
}
</script>

<style>
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

.min .nav .city {
    position: relative;
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


</style>