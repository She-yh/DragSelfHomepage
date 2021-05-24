<template>
    <div class="plus-face">
        <div class="plus-container">
            <div class="edit_box">
                <h2 class="edit_title">Style</h2>
                <textarea class="edit_text"></textarea>
            </div>
            <div class="edit_box">
                <h2 class="edit_title">JavaScript</h2>
                <textarea class="edit_text"></textarea>
            </div>
            <div class="edit_box">
                <h2 class="edit_title">Html</h2>
                <textarea class="edit_text"></textarea>
            </div>
            <div class="showbox"></div>
            <button class="bottom" @click="change_show">保存修改</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Plusbox",
        props:['showbox','list_preview'],
        data() {
            return {}
        },
        methods:{
            change_show(){
                this.$emit("get_show",!this.showbox);
                this.add_com();
            },
            add_com(){
                 this.$set(this.list_preview,3,'isSelf');
                this.$emit("get_list",this.list_preview);
            }
        }
    }
</script>

<style scoped>
    .bottom{
        width: 100px;
        height: 30px;
        line-height: 30px;
        background-color: #428cbd;
        color: white;
        border-radius: 15px;
        border: none;
    }
    .plus-face{
        backdrop-filter: blur(20px);
        position: fixed;
        z-index: 1000;
    }
    .plus-container {
        width: 100vw;
        height: 100vh;
        margin: auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: space-around;
        justify-content: space-around;
    }

    .edit_box {

    }

    .edit_title {
        color: #ffffff;
        margin-bottom: 50px;
    }

    .edit_text {
        box-shadow: 0 0 20px 8px rgba(0, 0, 0, 0.5);
        border-radius: 10px;
        overflow: hidden;
        width: 30vw;
        height: 50vh;
        font-size: 18px;
        color: #2c3e50;
        border: 0;
        outline: none;
        resize: none;
        padding: 10px;
        transition: all 0.3s;
    }
    .edit_text:focus,.edit_text:hover {
        outline: none;
        transform: scale(1.05);
    }

</style>