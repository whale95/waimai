<template>
    <div class="navlistItem" @click="toShop">
        <img :src="navItem.pic" alt="">
        <div class="right">
            <span class="title">{{ navItem.title }}</span>
            <span class="sales">￥{{ navItem.sales }}</span>
            <span class="price">起送费 ￥{{ navItem.price }} 免配送费</span>
            <div class="label" >
                <span v-for="(i,index) in navItem.label" :key="index">{{ i }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
    export default {
        props:["navItem"],
        setup(){
            const router = useRouter();
            const toShop = ()=>{
                router.push('/shop')
            };
            return{
                toShop
            }
        }
    }
</script>

<style lang="less" scoped>
.navlistItem{
    display: flex;
    padding: 10px ;
    margin: 10px 0px;
    background-color: white;
    border-radius: 10px;
    img{
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 10px;
    }
    .right{
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        margin-left:20px;
        font-size: 12px;
        .title{
            font-size: 18px;
            font-weight: 600;
        }
        .label{
            span{
                background-color: hsl(46, 90%, 77%);
                margin-right: 5px;
                padding: 2px;
                border-radius: 5px;
            }
        }
    }
}
</style>