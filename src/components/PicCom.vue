<template>
    <div class="picwrap">
        <div class="pic-top">
            <i @click="addpiccard()" style="color:rgba(0,0,0,0.9);font-size:14px">点击此处添加卡片</i>
        </div>
        <div class="piccontainer">
            <Piccard v-for="(element,index) in list" :key=index></Piccard>
        </div>
    </div>
</template>
<script>
    import Piccard from "@/components/Piccard";

    export default {
        name: "PicCom",
        components: {Piccard},
        data() {
            return {
                list: [],
                last: 0
            }
        },
        methods: {
            addpiccard() {
                this.list.push(++this.last);
            }
        },
    }
</script>

<style scoped>
    .fa-plus-square-o {
        color: #7a7a7a;
    }

    .fa-plus-square-o :before {
        font-size: 20px;
    }

    Piccard {
        transition: all 0.5s;
    }

    .piccontainer {
        overflow: hidden;
        height: 50vh;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        width: 100%;
        text-align: center;
        backdrop-filter: brightness(80%);
        -webkit-backdrop-filter: brightness(80%);
    }

    .pic-top {
        height: 30px;
        width: 100%;
        background-color: white;
        border-radius: 10px 10px 0 0;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }
</style>