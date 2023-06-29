<template>
    <div class="mine">
        <Header title="我的"/>
        <div class="content">
            <div class="userInfo">
                <img src="../../assets/minePic.webp" alt="">
                <div class="infoDetal">
                    <div class="userName">昵称：{{ userName }}</div>
                    <div class="userDescribe">个性签名：{{ userDescribe }}</div>
                </div>
            </div>
            <ul class="userList">
                <li class="listItem"  @click="go('/order')">
                    <span>我的订单</span>
                    <van-icon name="arrow"/>
                </li>
                <li class="listItem" @click="go('/address')" >
                    <span>地址管理</span>
                    <van-icon name="arrow"/>
                </li>
                <li class="listItem" @click="go('/userInfoEdit')">
                    <span>账号管理</span>
                    <van-icon name="arrow"/>
                </li>
            </ul>
        </div>
        <Footer/>
    </div>
</template>
<script>
    import { reactive } from 'vue';
import Footer from '../../components/Footer.vue'
    import Header from '../../components/Header.vue'
    import { useRouter } from 'vue-router';
import { toRefs } from 'vue';
import { onMounted } from 'vue';
    export default {
        components:{
            Footer,Header
        },
        setup(){
            let router = useRouter();
            let data = reactive({
                userName:"初一",
                userDescribe:""
            })
            const go = (path)=>{
                router.push(path);
            };
            const init = ()=>{
                if(localStorage.userInfo){
                    let userInfo = JSON.parse(localStorage.userInfo);
                    data.userName = userInfo.username || data.userName;
                    data.userDescribe = userInfo.describe || data.userDescribe ;
                }
            }
            onMounted(()=>{
                init();
            })
            return{
                go,...toRefs(data)
            }
        }
    }
</script>
<style lang="less" scoped>
    .mine{
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow-y: auto;
        font-size: 16px;
        .content{
            flex:1;
            margin: 10px;
            .userInfo{
                display: flex;
                align-items: center;
                background-image: linear-gradient(to right, #ffc400,#f7dd87);
                padding: 0 10px;
                height: 100px;
                border-radius: 5px;
                box-shadow:2px 2px 5px 2px #ffc400 ;
                color: white;
                img{
                    width: 60px;
                    height: 60px;
                    object-fit: cover;
                    border-radius: 50%;
                    // margin-left: 20px;
                }
                .infoDetal{
                    display: flex;
                    flex-flow: column;
                    justify-content: space-between;
                    height: 60px;
                    font-size: 14px;
                    margin-left: 10px;

                }
            }
            .userList{
                margin-top: 20px;
                .listItem{
                    height: 30px;
                    padding: 10px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background-color: white;
                    border-bottom: 1px solid #f5f5f5;
                }
            }
        }
    }
</style>
