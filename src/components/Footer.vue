<template>
    <div class="footer">
        <div class="item">
            <!-- 在router-link中使用  active-class属性来实现选中样式的切换-->
            <router-link to="/home" class="nav-item" active-class="nav-color">
                <van-icon name="wap-home-o" size="30"/>
                首页
            </router-link>
        </div>
        <div class="item">
            <router-link to="/cart" class="nav-item" active-class="nav-color">
                <van-icon name="cart-o" size="30"/>
                购物车
            </router-link>
        </div>
        <div class="item">
            <router-link to="/order" class="nav-item" active-class="nav-color">
                <van-icon name="coupon-o" size="30"/>
                订单
            </router-link>
        </div>
        <div class="item">
            <router-link to="/mine" class="nav-item" active-class="nav-color">
                <van-icon name="manager-o" size="30"/>
                我的
            </router-link>
        </div>
    </div>
</template>




<style lang="less" scoped>
    .footer{
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        background-color: white;
        border-top: 0.5px solid #eee;
        font-size: 14px;
        .item{
            flex: 1;
            .nav-color{
                color:#ffc400
            }
            .nav-item{
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        }
    }
</style>