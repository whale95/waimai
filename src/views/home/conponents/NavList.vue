<template>
    <div class="navList">
        <div v-for="(item,index) in navList" :key="index">
            <NavListItem :navItem = "item"/>
        </div>
    </div>
</template>

<script>
import NavListItem from './NavListItem.vue';
    export default {
        props:['navList'],
        components:{NavListItem}
    }
</script>

<style lang="less" scoped>
.navList{
    margin-bottom: 50px;
}
</style>