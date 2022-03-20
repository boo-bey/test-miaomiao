<template>
  <div class="content">
           <ul class="nowlist">
               <li><img src="/imgs/imgs1.jpeg" alt=""><li>
               <li class="listname">
                   <h3>无名之辈</h3>
                    <p>观众评<span>9.2</span></p>
                    <p>主演：陈建斌 任素汐 潘斌龙</p>
                    <p>今天<i>55</i>家影院放映<i>607</i>场</p>
               </li>
               <li>
                   <button>购票</button>
               </li>
           </ul>
           <ul class="nowlist">
            <li><img src="/imgs/imgs1.jpeg" alt=""><li>
            <li class="listname">
                <h3>无名之辈</h3>
                 <p>观众评<span>9.2</span></p>
                 <p>主演：陈建斌 任素汐 潘斌龙</p>
                 <p>今天<i>55</i>家影院放映<i>607</i>场</p>
            </li>
            <li>
                <button>购票</button>
            </li>
        </ul><ul class="nowlist">
            <li><img src="/imgs/imgs1.jpeg" alt=""><li>
            <li class="listname">
                <h3>无名之辈</h3>
                 <p>观众评<span>9.2</span></p>
                 <p>主演：陈建斌 任素汐 潘斌龙</p>
                 <p>今天<i>55</i>家影院放映<i>607</i>场</p>
            </li>
            <li>
                <button>购票</button>
            </li>
        </ul><ul class="nowlist">
            <li><img src="/imgs/imgs1.jpeg" alt=""><li>
            <li class="listname">
                <h3>无名之辈</h3>
                 <p>观众评<span>9.2</span></p>
                 <p>主演：陈建斌 任素汐 潘斌龙</p>
                 <p>今天<i>55</i>家影院放映<i>607</i>场</p>
            </li>
            <li>
                <button>购票</button>
            </li>
        </ul><ul class="nowlist">
            <li><img src="/imgs/imgs1.jpeg" alt=""><li>
            <li class="listname">
                <h3>无名之辈</h3>
                 <p>观众评<span>9.2</span></p>
                 <p>主演：陈建斌 任素汐 潘斌龙</p>
                 <p>今天<i>55</i>家影院放映<i>607</i>场</p>
            </li>
            <li>
                <button>购票</button>
            </li>
        </ul><ul class="nowlist">
            <li><img src="/imgs/imgs1.jpeg" alt=""><li>
            <li class="listname">
                <h3>无名之辈</h3>
                 <p>观众评<span>9.2</span></p>
                 <p>主演：陈建斌 任素汐 潘斌龙</p>
                 <p>今天<i>55</i>家影院放映<i>607</i>场</p>
            </li>
            <li>
                <button>购票</button>
            </li>
        </ul><ul class="nowlist">
            <li><img src="/imgs/imgs1.jpeg" alt=""><li>
            <li class="listname">
                <h3>无名之辈</h3>
                 <p>观众评<span>9.2</span></p>
                 <p>主演：陈建斌 任素汐 潘斌龙</p>
                 <p>今天<i>55</i>家影院放映<i>607</i>场</p>
            </li>
            <li>
                <button>购票</button>
            </li>
        </ul><ul class="nowlist">
            <li><img src="/imgs/imgs1.jpeg" alt=""><li>
            <li class="listname">
                <h3>无名之辈</h3>
                 <p>观众评<span>9.2</span></p>
                 <p>主演：陈建斌 任素汐 潘斌龙</p>
                 <p>今天<i>55</i>家影院放映<i>607</i>场</p>
            </li>
            <li>
                <button>购票</button>
            </li>
        </ul>
           
  </div>
</template>

<script>
export default {
  name:'Nowplaying'
}
</script>

<style scoped>
.content{
    padding: 0px 10px 80px 10px;
    box-sizing: border-box;
}
.content .nowlist{
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #999;
    padding: 10px 0;
    box-sizing: border-box;
}
.content .nowlist .listname{
   text-align: start;
   flex-grow: 0.8;
}
.content .nowlist .listname p span{
    color: orange;
}
.content .nowlist button{
    background-color:rgb(246, 59, 34) ;
    height: 30px;
    width: 60px;
    border-radius: 8px;
    color: #fff;
}
</style>