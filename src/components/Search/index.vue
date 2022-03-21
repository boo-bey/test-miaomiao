<template>
  <div class="content">
    <div class="search">
      <input type="text" v-model="val" />
      <span class="iconfont">&#xe650;</span>
    </div>
    <div class="searchlist">
      <ul>
        <li>电影/电视/综艺</li>
        <div class="mou">
          <img src="/imgs/imgs1.jpeg" alt="" />
          <div class="movielist">
            <h3>无名之辈</h3>
            <p>A Cool Fish</p>
            <p><span>剧情</span><span>喜剧</span><span>犯罪</span></p>
            <p>2018-11-16</p>
          </div>
          <div>
            <span>8.5</span>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      val: "",
    };
  },
watch:{
  val(){
    this.axios({
      method:'get',
      url:'/data.json',
      params:{
      }
    }).then(res=>{
      console.log(res)
    })
  }
}

};
</script>



};
</script>

<style scoped>
.content {
  padding: 120px 0px 80px 0px;
}
.content .search {
  text-align: center;
  margin: 0 auto;
  height: 50px;
  background: rgb(244, 244, 244);
  flex-direction: column;

  display: flex;
  padding: 15px;
  box-sizing: border-box;
  align-items: flex-start;
}
.content .search input {
  width: 90%;
  height: 100%;
  padding: 5px 15px;
  border-radius: 5px;
}
.content .search span {
  margin-top: -20px;
}
.content .searchlist ul li {
  color: #999;
  height: 50px;
  line-height: 50px;
  padding-left: 10px;
  border-bottom: 1px dashed #999;
  box-sizing: border-box;
}
.content .searchlist .mou {
  padding: 10px;
  border-bottom: 1px dashed #999;

  display: flex;
  justify-content: space-between;
}
.content .searchlist .mou img {
  margin: 10px;
}
.content .searchlist .mou .movielist {
  margin-left: -170px;
}
.content .searchlist .mou div:nth-child(3) {
  color: orange;
  font-weight: bold;
}
</style>