<template>
  <div class="login">
            <div class="center">
                    <input type="text" name="" placeholder="请输入账号" id="1">
                    <input type="password" placeholder="请输入密码" id="2" autocomplete='no'>
                <button>登录</button>
                <div>
                    <span>立即注册</span>
                    <span>找回密码</span>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name:'Login',
}
</script>

<style scopde>
.login{
    padding: 120px 0 80px 0;
}
.login .center{
    display: flex;  
    flex-direction: column;
    align-items: center;
}
.login .center input{
    width: 80%;
    background: rgb(251,248,193);
    text-align: center;
    height: 60px;
    line-height: 60px;
    box-shadow: 2px 2px 4px rgb(124, 122, 122);
    margin-bottom: 10px;
    font-size: 16px;
    color: #999;
    border-radius: 5px;
}

.login .center button{
    background-color:rgb(246, 59, 34) ;
    height: 60px;
    width: 50%;
    font-size: 32px;
    color: #fff;
    margin-top: 20px;
    border-radius: 10px; 
}
.login .center div{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 20px;
    color: rgb(246, 59, 34);
}
.login .center div span{
    margin: 0 10px;
    font-size: 20px;
}
</style>