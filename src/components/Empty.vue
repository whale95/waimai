<template>
    <div class="empty">
        <svg class="icon" aria-hidden="true" >
            <use xlink:href="#icon-inbox" ></use>
        </svg>
        空空如也
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
 .empty{
    flex: 1;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    .icon{
        fill: gray;
    }
 }
</style>