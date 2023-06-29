<template>
    <div class="userInfoEdit">
        <Header title="账号管理" />
        <div>
            <van-field v-model="username" label="昵称" placeholder="请输入昵称" />
            <van-field v-model="describe" label="个性签名" placeholder="个性签名" />
            <van-field v-model="password" label="密码" placeholder="请输入密码" />
        </div>
        <van-button type="primary"  color="#ffc400" block round class="save-btn" @click="save">保存</van-button>
        <van-button type="primary" color="#ffc400" block round class="save-btn" @click="loginOut">退出登录</van-button>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import { showToast } from 'vant';
import { reactive,toRefs,onMounted } from 'vue';
import { useRouter } from 'vue-router';
    export default {
        components:{
            Header
        },
        setup(){
            let data =reactive({
                username:"",
                describe:"今天中午吃什么？",
                password:"",
            })
            let router = useRouter();
            const save = ()=>{
                if(data.username && data.password){
                    let userInfo = JSON.parse(localStorage.userInfo);
                    let newUserInfo = {
                        username:data.username || userInfo.username,
                        password:data.password || userInfo.password,
                        describe:data.describe 
                    }
                    localStorage.setItem("userInfo",JSON.stringify(newUserInfo) );
                    showToast('修改成功');
                    setTimeout(()=>{
                        router.push('/mine');
                    },1000)
                }else{
                    showToast('请输入内容!')
                }
            }
            const loginOut = ()=>{
                localStorage.removeItem('isLogin');
                showToast('退出成功');
                setTimeout(()=>{
                    router.push('/login')
                    },1000)
            }
            const init = ()=>{
                if(localStorage.userInfo){
                    let userInfo = JSON.parse(localStorage.userInfo);
                    data.username = userInfo.username;
                    data.password = userInfo.password;
                    data.describe = userInfo.describe || data.describe;
                }
            }
            onMounted(()=>{
                init()
            })
            return{
                ...toRefs(data),
                save,
                loginOut
            }
        }
    }
</script>

<style lang="less" scoped>
.save-btn{
    width: 80%;
    margin: 10px auto;
}
</style>