<template>
    <!--    <div style="background-color:red;width:100px;height:100px"></div>-->
    <div class="plus-face">
        <div class="plus-container">
            <div class="edit_box">
                <h2 class="edit_title">Html</h2>
                <textarea id="html" class="edit_text"></textarea>
            </div>
            <div class="showbox">
                <h2 class="edit_title">展示区</h2>
                <div id="showcontent" class="edit_text"></div>
            </div>
            <div class="showbox"></div>
            <div class="bottomcontainer">
                <button class="bottom" @click="hide_box">保存修改</button>
                <button class="bottom" @click="change_show">展示</button>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from "jquery"
    export default {
        name: "Plusbox",
        props: ['showbox', 'list_preview','HtmlContent'],
        data() {
            return {}
        },
        methods: {
            hide_box() {
                this.$emit("get_show", !this.showbox);
                this.add_com();
            },
            change_show() {
                this.showcontent();
            },
            add_com() {
                this.$emit("get_list", this.list_preview);
                this.$emit("get_content",this.HtmlContent);
            },
            showcontent() {
                this.HtmlContent=$("#html").val();
                $("#showcontent").html(this.HtmlContent);
            }
        }
    }
</script>

<style scoped>
    #html{
        background-color: #ffffff;
    }
    .bottomcontainer{
        width: 100vw;
        position: absolute;
        bottom: 10px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .bottom {
        backdrop-filter: blur(100px);
        -webkit-backdrop-filter: blur(100px);
        background-color: rgba(0,0,0,0.5);
        width: 100px;
        height: 30px;
        line-height: 30px;
        color: white;
        border-radius: 15px;
        border: none;
    }

    .plus-face {
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
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
    .edit_title {
        color: #ffffff;
        margin-bottom: 50px;
    }

    .edit_text {

        box-shadow: 0 0 20px 8px rgba(0, 0, 0, 0.5);
        border-radius: 10px;
        overflow: hidden;
        width: 45vw;
        height: 80vh;
        font-size: 18px;
        color: #2c3e50;
        border: 0;
        outline: none;
        resize: none;
        padding: 10px;
        transition: all 0.3s;
    }

    .edit_text:focus, .edit_text:hover {
        outline: none;
        transform: scale(1.05);
    }

</style>