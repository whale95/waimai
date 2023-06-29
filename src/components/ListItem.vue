<template>
    <div class="listItem">
       <van-checkbox class="checkBox" :name="item.id" v-if="showCheck"></van-checkbox>
       <div class="left">
            <img :src="item.pic" alt="">
       </div>
       <div class="right">
            <div class="text">
                <div class="title">{{ item.title }}</div>
                <div class="price">￥{{item.price}}</div>
            </div>
            <div class="add">
                <van-icon name="add-o" color="red" size="25" v-if="item.add" @click="handleAdd(item.id)"/>
                <van-stepper v-else   @change="handleChange" :name="item.id" />
            </div>
       </div>
    </div>
</template>

<script>
    export default {
        props:['item',"handleAdd","handleChange","showCheck"],
    }
</script>

<style lang="less" scoped>
.listItem{
    padding: 10px;
    margin: 10px;
    font-size: 16px;
    font-weight: 600;
    background-color: white;
    border-radius: 10px;
    display: flex;
    .checkBox{
        padding-right: 10px;
    }
    .left{
        img{
            width: 60px;
            height: 60px;
            object-fit: cover;
            border-radius: 10px;
        }
    }
    .right{
        flex: 1;
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        margin-left: 10px;
        .text{
            display: flex;
            justify-content: space-between;
        }
        .add{
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
}
</style>