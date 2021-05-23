<template>
    <div class="card-container">
        <div class="pic">
        </div>
        <div class="textcontainer">
            <div class="title">
            </div>
            <div class="content">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Piccard"
    }
</script>
<style scoped>
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
    }
    .textcontainer {
    }
    .pic {
        background-color: #2c3e50;
        width: 100%;
        height: 110px;
    }
    .title {
        height: 30px;
        width: 100%;
    }
    .content {
        background-color: #4AB7BD;
        height: 90px;
        width: 100%;
    }
</style>