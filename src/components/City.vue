<template>
  <div class="content">
    <div class="city_map" v-for="item in cityList" :key="item.title" >
      <li class="letter" >
        <span>{{ item.title }}</span>
      </li>
      <div class="a" v-for="child in item.lists" :key="child">
        <li>{{ child }}</li>
      </div>
    </div>
    <div class="scroll" >
      <li v-for="(item) in cityList" :key="item.title" >{{ item.title }}</li>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      cityList: [],
    };
  },
  created() {
    this.axios({
      url: "../data.json",
    }).then((res) => {
      this.cityList = res.data.city;
     
    });
  },
   
};
</script>

<style scoped>
.content .city_map {
  width: 95%;

  background-color: rgb(253, 244, 241);
}
.content .city_map ul::after {
  content: "";
  display: block;
  clear: both;
}
.content .city_map ul {
  width: 100%;
}
.content .city_map ul li {
  float: left;
  width: 100px;
  height: 30px;
  line-height: 30px;
  background: #fff;
  text-align: center;
  margin: 8px 10px;

  border-radius: 5px;
}
.content .city_map .letter {
  background: rgb(240, 240, 240);
}
.content .city_map .letter span {
  margin-left: 10px;
}
.content .city_map div li {
  margin-left: 10px;
  height: 30px;
  line-height: 30px;
}
.content .scroll {
  position: fixed;
  right: 2px;
  top: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
</style>