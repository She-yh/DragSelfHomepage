<template>
    <div class="textwrap">
        <div class="text-top">
            <i class="fontsize">A</i>
            <input type="file" id="upload" accept="image/*" @change="showImg($event)"/>
            <label for="upload"><i class="fa fa-plus-square-o" aria-hidden="true"></i></label>
        </div>
        <div class="text-back">
        <textarea class="textcom">
        </textarea>
        </div>
    </div>
</template>

<script scoped>
    import $ from "jquery"

    export default {
        name: "TextCom",
        data() {
            return {}
        },
        methods: {
            showImg(obj) {
                obj = obj.target;
                var file = $(obj)[0].files[0];    //获取文件信息
                if (file) {
                    var reader = new FileReader();  //调用FileReader
                    console.log(reader);
                    reader.readAsDataURL(file); //将文件读取为 DataURL(base64)
                    reader.onload = function (evt) {   //读取操作完成时触发。
                        $(".text-back").css("background-image", "url(" + evt.target.result + ")");
                    };
                } else {
                    alert("上传失败");
                }
            }
        }
    }
</script>

<style scoped>
    .fontsize {
        color: #7a7a7a;
    }

    .fa-plus-square-o {
        color: #7a7a7a;
    }

    #upload {
        display: none;
    }

    img {
        width: 100px;
        height: 100px;
    }

    .text-top {
        height: 30px;
        width: 100%;
        background-color: white;
        border-radius: 10px 10px 0 0;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }
    .text-back{
        background-size: cover;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-color: #485d70;
        padding: 0;

    }
    .textcom {
        height: 50vh;
        margin: 0;
        width: 100%;
        color: white;
        background-color: transparent;
        font-size: 20px;
        border: 0;
        outline-style: none;
        text-align: center;
        /*filter: brightness(70%);*/
        backdrop-filter: brightness(70%);
    }
</style>