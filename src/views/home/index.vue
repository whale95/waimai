<template>
    <div class="home">
        <div class="content">
            <!-- 头部 -->
            <div class="header">
                <div class="text">外卖</div>
                <div class="location">
                    <van-icon name="location-o" />
                    <span>杭州</span>
                    <van-icon name="arrow" />
                </div>
            </div>
            <!-- 主要内容 -->
            <div class="main">
                <div class="main-bg">
                    <!-- 搜索 -->
                    <div class="search">
                        <input type="text">
                        <div class="search-text">搜索</div>
                    </div>
                    <!-- 分类 -->
                    <div class="sort">
                        <!-- 大分类 -->
                        <div class="big-sort">
                            <div v-for="(item, index) in big_sort" :key="index">
                                <svg class="icon" aria-hidden="true">
                                    <use :xlink:href="`#${item.icon}`"></use>
                                </svg>
                                {{ item.name }}
                            </div>
                        </div>
                        <!-- 小分类 -->
                        <div class="small-sort">
                            <div v-for="(item, index) in small_sort" :key="index">
                                <svg class="icon" aria-hidden="true">
                                    <use :xlink:href="`#${item.icon}`"></use>
                                </svg>
                                {{ item.name }}
                            </div>
                        </div>
                    </div>
                </div>
                <!-- tab -->
                <van-tabs v-model:active="active" color="red" class="vant-tabs">
                    <van-tab v-for="(item, index) in content_nav_list" :key="index" :title="item.tab">
                        <NavList :navList="item.data" />
                    </van-tab>
                </van-tabs>
            </div>
        </div>
        <Footer />
    </div>
</template>
<script>
import Footer from '../../components/Footer.vue'
import NavList from './conponents/NavList.vue'
import { reactive, toRefs, ref } from 'vue';
import axios from 'axios'
import { onMounted } from 'vue';
import { getHomeApiData } from '../../api/api'
export default {
    components: {
        Footer, NavList
    },
    setup() {

        const data = reactive({
            big_sort: [],
            small_sort: [],
            content_nav_list: []
        })
        const active = ref(0);
        const init = () => {
            getHomeApiData().then((res) => {
                data.big_sort = res.big_sort;
                data.small_sort = res.small_sort;
                data.content_nav_list = res.content_nav_list;
            })
            // axios.get('/home/getHomeData').then((res)=>{
            //     // console.log(res.data)
            //     const {code,homeData} = res.data;
            //     if(code === 200){
            //         data.big_sort = homeData.big_sort;
            //         data.small_sort = homeData.small_sort;
            //         data.content_nav_list = homeData.content_nav_list;
            //     }
            // })
        }
        onMounted(() => {
            init()
        })
        return {
            ...toRefs(data), active
        }
    }
}
</script>
<style lang="less" scoped>
.home {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-y: auto;
    font-size: 14px;

    .content {
        flex: 1;

        .header {
            background-image: linear-gradient(#ffc400, #fff);
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 20px 40px 20px;

            .text {
                font-size: 20px;
                font-weight: 600;
            }

            .location {
                span {
                    margin: 0 5px;
                }

                font-size: 14px;
            }
        }

        .main {
            margin-top: -30px;

            .main-bg {
                background-image: linear-gradient(#fff, #f5f5f5);
                padding: 10px 20px 0px 20px;
                border-radius: 30px 30px 0 0;

                .search {
                    position: relative;

                    input {
                        width: 100%;
                        border: 1px solid #ffc400;
                        border-radius: 20px;
                        height: 30px;
                    }

                    .search-text {
                        position: absolute;
                        right: -6px;
                        top: 1px;
                        background-color: #ffc400;
                        border-radius: 16px;
                        font-size: 14px;
                        width: 50px;
                        height: 32px;
                        line-height: 32px;
                        text-align: center;
                    }
                }

                .big-sort {
                    padding: 20px 0;
                    display: flex;

                    div {
                        flex: 1;
                        display: flex;
                        flex-flow: column;
                        align-items: center;

                        .icon {
                            width: 50px;
                            height: 50px;
                            margin-bottom: 5px;
                        }
                    }
                }

                .small-sort {
                    display: flex;
                    flex-wrap: wrap;
                    margin-top: 20px;

                    div {
                        display: flex;
                        flex-flow: column;
                        align-items: center;
                        width: 20%;

                        .icon {
                            width: 30px;
                            height: 30px;
                            margin: 6px;
                        }
                    }
                }
            }

            .vant-tabs {
                padding: 10px 20px
            }
        }
    }
}

/deep/ .van-tabs__wrap {
    border-radius: 10px;
}</style>
