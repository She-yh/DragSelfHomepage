<template>
    <div id="comments">
        <h2 class="com-title">评论区</h2>
        <div class="com-container">
            <input type="text" class="com-input" v-model="content" @keyup.enter="add" @focus="content=''">
            <div class="com-list-container">
                <ul class="com-list">
                    <li v-for="(item,index) in list" :key="index">
                        <div>{{index+1}}.{{item}}</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Comments",
        data() {
            return {
                list: ["吃饭饭", "睡觉觉"],
                content: "请输入内容"
            }
        },
        methods: {
            add() {
                this.list.push(this.content);
            }
        },

    }
</script>

<style scoped>
    li {
        text-decoration: none;
        list-style: none;
        height: 30px;
        line-height: 30px;
    }
    li:hover{
        background-color: #c1c1c1;
    }
    li>div{
        color: #707070;
    }
    .com-container{
        overflow: hidden;
        border-radius: 5px;
        width: 50%;
        background-color: white;
        box-shadow: 0 0 20px 5px rgba(0,0,0,0.5);
    }
    .com-title {
        padding: 25px 0 25px 0;
    }

    .com-input {
        color: #707070;
        width: 50%;
        height: 35px;
        line-height: 35px;
        font-size: 18px;
        border: 0;
        outline-style: none;
        text-align: center;
    }

    #comments {
        height: 50vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        backdrop-filter: brightness(80%);
        -webkit-backdrop-filter: brightness(80%);
    }
</style>