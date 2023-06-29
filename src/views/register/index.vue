<template>
    <div class="login">
        <Header title="注册" />
        <div class="content">
            <div class="top">
                <span>买团</span>
            </div>
            <div class="details">
                <van-form @submit="onSubmit">
                    <van-cell-group inset>
                        <van-field v-model="username" name="username" label="用户名" placeholder="用户名"
                            :rules="[{ required: true, message: '请填写用户名' }]" />
                        <van-field v-model="password" type="password" name="password" label="密码" placeholder="密码"
                            :rules="[{ required: true, message: '请填写密码' }]" />
                        <!-- <van-field v-model="describe" name="describe" label="个性签名" placeholder="请输入个性签名" /> -->
                    </van-cell-group>
                    <div style="margin: 16px;">
                        <van-button round block type="primary" native-type="submit">
                            注册
                        </van-button>
                        <van-button round block type="primary" @click="onLogin">
                            去登录
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
import { reactive, toRefs } from 'vue';
import { showToast } from 'vant';
export default {
    components: {
        Header
    },
    setup() {
        let data = reactive({
            username: "",
            password: "",
            describe: "今天晚上吃什么？"
        })
        let router = useRouter();
        const onSubmit = (value) => {
            if (localStorage.userInfo) {//和已有用户名比较
                const userInfo = JSON.parse(localStorage.getItem('userInfo'));
                if (value.username == userInfo.username) {
                    showToast('用户名已存在')
                } else {
                    register(value)
                }
            } else {
                register(value)
            } 
        }
        const register = (value) => {
            // 注册成功，将用户信息存到localstorage
            // 只能存字符串，要先转一下
            value["describe"]= "今天晚上吃什么？";
            localStorage.setItem('userInfo', JSON.stringify(value));
            showToast('注册成功');
            router.push('/login')
        }
        const onLogin = () => {
            router.push('/login')
        }
        return {
            ...toRefs(data),
            onSubmit,
            onLogin
        }
    }
}
</script>

<style lang="less" scoped>
.login {
    display: flex;
    flex-flow: column;

    .content {
        flex: 1;
        margin-top: 20px;

        .top {
            width: 180px;
            height: 180px;
            background-color: #ffc400;
            border-radius: 20px;
            text-align: center;
            font-size: 75px;
            margin: 0 auto;

            span {
                display: inline-block;
                margin-top: 40.5px
            }
        }

        .details {
            margin-top:10px;
        }
    }
}

/deep/ .van-button--primary {
    background-color: #ffc400;
    border-color: #ffc400;
    margin-bottom: 10px;
}
</style>