<template>
    <div id="download" @click="download()">
        保存图片
    </div>
</template>
<script>
import html2canvas from "html2canvas"
    export default {
        name: "Download",
        components:{
        },
        data(){
            return{
            }
        },
        methods: {
            download(){
                let item = document.getElementsByClassName("dragArea-view")[0];
                console.log(item.scrollHeight);
                html2canvas(item,{
                    useCORS:true,
                    scale:1,
                    height:item.scrollHeight,
                    y:0
                })
                .then(canvas => {
                    let data = canvas.toDataURL("image/jpeg");
                    this.downLoadFile("down",data)
                    alert("转换结束");
                })
                .catch((e) => {
                    console.log("error:",e);
                });
            },
            downLoadFile(fileName, canvasImg) {
                //创建一个a标签
                console.log(canvasImg);
                var a = document.createElement('a')
                //指定下载文件名称
                a.href = canvasImg;
                a.download = fileName;
                a.id="downLink";
                a.innerHTML="点击下载图片";
                document.body.appendChild(a);
            }
    }
}
</script>
<style scoped>
#download{
    width: 100px;
    height: 30px;
    position: fixed;
    background-color: rgba(255,255,255,0.9);
    line-height: 30px;
    border-radius: 15px;
    left: 50%;
    transform: translateX(-50%);
    color: rgba(0, 0, 0, 0.8);
    bottom: 20px;
    font-size: 14px;
}
#downLink{
    width: 100px;
    height: 30px;
    position: fixed;
    background-color:rgba(255,255,255,0.9) ;
    line-height: 30px;
    border-radius: 15px;
    left: 50%;
    transform: translateX(-50%);
    color: rgba(255, 111, 111, 0.8);
    top: 20px;
    font-size: 14px;
}
</style>