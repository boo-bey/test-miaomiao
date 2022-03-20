<template>
  <div class="content">
           <div class="city_map">
               <ul class="hotcity">
                   <li>北京</li>
                   <li>上海</li>
                   <li>北京</li>
                   <li>上海</li>
                   <li>北京</li>
                   <li>北京</li>
                   <li>上海</li>
                   <li>北京</li>
                   <li>北京</li>
                   <li>上海</li>
                   <li>北京</li>
               </ul>
               <li class="letter"><span>A</span></li>
               <div class="a">
                   <li>阿拉善盟</li>
                   <li>鞍山</li>
                   <li>安庆</li>
               </div>
               <li class="letter"><span>B</span></li>
               <div class="b">
                   <li>北京</li>
                   <li>保定</li>
                   <li>蚌埠</li>
               </div>
               <div class="scroll">
                   <li>A</li>
                   <li>B</li>
                   <li>C</li>
                   <li>D</li>
                   <li>E</li>
                   <li>F</li>
                   <li>G</li>
                   <li>H</li>
                   <li>R</li>
                   <li>J</li>
                   <li>K</li>
               </div>
           </div>
       </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.content .city_map{
    width: 95%;
    padding: 120px 0 80px 0;
    box-sizing: border-box;
  
    background-color: rgb(253, 244, 241);
}
.content .city_map ul::after{
    content: '';
    display: block;
    clear: both;
}
.content .city_map ul{
    width: 100%;
    
}
.content .city_map ul li{
    float: left;
    width: 100px;
    height: 30px;
    line-height: 30px;
    background:#fff ;
    text-align: center;
    margin: 8px 10px;
   
    border-radius: 5px;
}
.content .city_map .letter{
    background: rgb(240, 240, 240);
}
.content .city_map .letter span{
    margin-left: 10px;
}
.content .city_map div li{
    margin-left: 10px;
    height: 30px;
    line-height: 30px;

   
}
.content .city_map .scroll{
    position: fixed;
    right: 2px;
    top: 30%;
    display: flex;
    flex-direction: column;
}

</style>