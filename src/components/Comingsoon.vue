<template>
 <div class="content">
            <ul>
                <li>
                    <img src="/imgs/imgs1.jpeg" alt="">
                    <div>
                        <h3>无名之辈</h3>
                        <div><span>17764</span>人想看</div>
                        <p>主演:陈建斌 任苏溪 潘斌龙</p>
                        <p>2018-11-30上映</p>
                    </div>
                    <div>
                        <button>预购</button>
                    </div>
                  
                </li>
            </ul>
            <ul>
                <li>
                    <img src="/imgs/imgs1.jpeg" alt="">
                    <div>
                        <h3>无名之辈</h3>
                        <div><span>17764</span>人想看</div>
                        <p>主演:陈建斌 任苏溪 潘斌龙</p>
                        <p>2018-11-30上映</p>
                    </div>
                    <div>
                        <button>预购</button>
                    </div>
                  
                </li>
            </ul>
           
        </div>
</template>

<script>
export default {

}
</script>

<style scoped>
 .content{
    overflow: scroll;
}
 .content li {
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    align-items: center;

}

 .content li {
    border-bottom: 1px solid #999;
}

 .content li button {
    height: 40px;
    line-height: 40px;
    border-radius: 5px;
    background: rgb(55, 0, 255);
    color: #fff;
    padding: 0 15px;
}
</style>