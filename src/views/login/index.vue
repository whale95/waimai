<template>
    <div class="login">
        <Header title = "登录"/>
        <div class="content">
            <div class="top">
                <span>买团</span>
            </div>
            <div class="details">
                <van-form @submit="onSubmit">
                    <van-cell-group inset>
                        <van-field
                            v-model="username"
                            name="username"
                            label="用户名"
                            placeholder="用户名"
                            :rules="[{ required: true, message: '请填写用户名' }]"
                        />
                        <van-field
                            v-model="password"
                            type="password"
                            name="password"
                            label="密码"
                            placeholder="密码"
                            :rules="[{ required: true, message: '请填写密码' }]"
                        />
                    </van-cell-group>
                    <div style="margin: 16px;">
                        <van-button round block type="primary" native-type="submit">
                        登录
                        </van-button>
                        <van-button round block type="primary" @click="onRegister">
                        去注册
                        </van-button>
                    </div>
                </van-form>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import { useRouter } from 'vue-router';
import { reactive,toRefs } from 'vue';
import { showToast } from 'vant';
    export default {
        components:{
            Header
        },
        setup(){
            let data = reactive({
                username:"",
                password:""
            })
            let router  = useRouter();
            const onSubmit = (value)=>{
                console.log(value);
                // 登录
                if(localStorage.userInfo){
                    let userInfo = JSON.parse(localStorage.getItem('userInfo'));
                    if(value.username === userInfo.username){
                        if(value.password === userInfo.password){
                            showToast("登录成功");
                            localStorage.setItem('isLogin','login');
                            router.push('/home')
                        }else{
                            showToast('密码错误')
                        }
                    }else{
                        showToast('账号不存在')
                    }
                }else{
                    showToast('账号未注册');
                    return;
                }
            }
            const onRegister = ()=>{
                router.push('/register')
            }
            return{
                ...toRefs(data),
                onSubmit,
                onRegister
            }
        }
    }
</script>

<style lang="less" scoped>
.login{
    display: flex;
    flex-flow: column;
    .content{
        flex: 1;
        margin-top: 20px;
        .top{
            width: 180px;
            height: 180px;
            background-color: #ffc400;
            border-radius: 20px;
            text-align: center;
            font-size: 75px;
            margin: 0 auto;
            span{
                display: inline-block;
                margin-top: 40.5px
            }
        }
        .details{
            margin-top:10px;
        }
    }
}
/deep/ .van-button--primary{
    background-color: #ffc400;
    border-color: #ffc400;
    margin-bottom: 10px;
}
</style>