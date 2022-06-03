# 拖拽式自主建站
## 项目介绍  
本来是自己的一个小项目，中途鸽了，现在正好用来练手  
右边的组件栏可以拖进中间的编辑区形成一个组件，组件间可以上下拖动改变顺序

## 实现思路
1. 拖动主要是用的`vuedragable`实现的，太久了不过多介绍
2. 上传图片的实现
   ```
    var reader = new FileReader();  //调用FileReader
    reader.readAsDataURL(file); //将文件读取为 DataURL(base64)
    reader.onload = function (evt) {   //读取操作完成时触发。
      $(".text-back").css("background-image", "url(" + evt.target.result + ")");
    };
   
   ```
3. 截图使用html2canvas将dom转canvas 
   ```
    html2canvas(item,{
        useCORS:true,
        height:heightItem.scrollHeight,
        y:0
    })
    .then(canvas => {
        let data = canvas.toDataURL("image/jpeg");
        this.downLoadFile("down",data)
        alert("转换结束");
    })
   ```
4. 然后将canvas转为URL
   `let data = canvas.toDataURL("image/jpeg")`
5. 在页面中添加a标签，然后点击触发下载
   ```
    a.href = canvasImg; //链接
    a.download = fileName;//文件名
    a.id = "downLink";
    a.innerHTML = "下载";
    document.body.appendChild(a);
   ```
## 过程中的问题
+ 由于添加组件长度会发生变化导致截图不完整   
  设置html2canvas中的height和windowHeight属性可以解决
+ 原项目使用了大量高斯模糊，好像对高斯模糊不支持，截图效果不正确，除了把高斯模糊换了没想到其它的办法
+ box-sizing也有问题

## 组件介绍
   * 基础组件
      + 文本框 
        > 可以添加文字和图片
      + 图片
        > 上传本地图片
      + 照片集
        > 添加照片，标题，描述
   * 自定义组件
     >用HTML/CSS/JS创建自己的组件
