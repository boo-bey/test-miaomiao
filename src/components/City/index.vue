<template>
  <div class="content">
    <div class="city_map">
      <ul class="hotcity">
        <li v-for="item in Hotcity" :key="item.id">{{ item.nm }}</li>
      </ul>
      <ul class="citymap" v-for="item in citylist" :key="item.index" ref="city_sort">
        <h3>{{ item.index }}</h3>
        <p v-for="it in item.list" :key="it.id">{{ it.nm }}</p>
      </ul>
      <ul class="indexmap">
        <div v-for="(item) in citylist" :key="item.list.nm" >{{ item.index }}</div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "City",
  data() {
    return {
      citylist: [],
      //citylist:[{index:A,list:[{name:'啊城'，id：123}]}]
      Hotcity: [],
    };
  },
  created() {
    this.axios({
      url: "/data.json",
    }).then((res) => {
      if (res.data.msg === "ok") {
        var cities = res.data.data.cities;
        const { citylist, hotcity } = this.tocitylist(cities);
        this.citylist = citylist;
        this.Hotcity = hotcity;
      }
    });
  },
  methods: {
    tocitylist(cities) {
      var citylist = [],
        hotcity = [];
      for (var i = 0; i < cities.length; i++) {
        var firstA = cities[i].py.substring(0, 1).toUpperCase();
        if (tocom(firstA)) {
          //如果里面没有
          citylist.push({
            index: firstA,
            list: [{ nm: cities[i].nm, id: cities[i].id }],
          });
        } else {
          for (var j = 0; j < citylist.length; j++) {
            if (citylist[j].index === firstA) {
              citylist[j].list.push({ nm: cities[i].nm, id: cities[i].id });
            }
          }
        }
      }
      citylist.sort((n1, n2) => {
        if (n1.index > n2.index) {
          return 1;
        } else if (n1.index < n2) {
          return -1;
        } else {
          return 0;
        }
      });
      function tocom(firstA) {
        for (var i = 0; i < citylist.length; i++) {
          if (citylist[i].index === firstA) {
            return false;
          }
        }
        return true;
      }
      hotcity = cities.filter((item) => {
        return item.isHot === 1;
      });
      return {
        citylist,
        hotcity,
      };
    },

  },
};
</script>

<style scoped>
.content {
  padding: 0 0 0 0px;
}
.content .city_map {
  width: 95%;
  margin: 130px 0 80px 0;
  box-sizing: border-box;
  background-color: rgb(253, 244, 241);
  box-sizing: border-box;
}
.content .city_map p{
    padding-left: 10px;
}
.content .city_map h3 {
    padding-left: 10px;
  background: #fff;
}
.content .city_map .indexmap {
  position: fixed;
  top: 30%;
  right: 5px;
  display: flex;
  flex-direction: column;
}
.content .city_map ul::after {
  content: "";
  display: block;
  clear: both;
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
</style>