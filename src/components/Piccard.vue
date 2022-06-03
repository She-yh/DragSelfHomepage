<template>
    <div class="card-container">
        <div class="pic" @change="showImg($event)">
            <input type="file" id="upload" accept="image/*" @change="showImg($event)"/>
            <label for="upload"><i>点击设置照片</i></label>
        </div>
        <div class="textcontainer">
            <input class="title" placeholder="请输入标题"/>
            <hr style="margin:0;background-color:#d2d2d2;height:0.5px;border:none;"/>
            <textarea class="content" placeholder="请输入内容">
            </textarea>
        </div>
    </div>
</template>

<script>
    import $ from "jquery";

    export default {
        name: "Piccard",
        methods: {
            showImg(obj) {
                obj = obj.target;
                var file = $(obj)[0].files[0];    //获取文件信息
                if (file) {
                    var reader = new FileReader();  //调用FileReader
                    console.log(reader);
                    reader.readAsDataURL(file); //将文件读取为 DataURL(base64)
                    reader.onload = function (evt) {   //读取操作完成时触发。
                        $(".pic").last().css("background-image", "url(" + evt.target.result + ")");
                    };
                } else {
                    alert("上传失败");
                }
            }
        }
    }
</script>
<style scoped>
    #upload {
        display: none;
    }

    .card-container {
        margin: 15px;
        height: 255px;
        width: 170px;
        padding: 4px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);
        transition: 0.5s;
    }
    .card-container:hover{
        transform: scale(1.05);
    }
    .textcontainer {
        height: 140px;
    }

    .pic {
        padding-top: 48px;
        background-size: cover;
        background-position: 50% 50%;
        background-color: #2c3e50;
        width: 100%;
        height: 67px;
    }

    .title {
        font-size: 17px;
        border: none;
        outline: none;
        cursor: text;
        height: 37px;
        color: #464646;
        width: 100%;
        text-align: center;
    }

    .content {
        padding: 5px;
        margin-top: 5px;
        background-color: rgba(241, 241, 241, .98);
        resize: none;
        cursor: text;
        color: #464646;
        border: 0;
        height: 80px;
        outline-style: none;
        text-align: center;
    }
</style>