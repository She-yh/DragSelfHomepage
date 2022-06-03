<template>
    <div id="app">
        <DndList/>
        <DownloadVue/>
        <SavePicVue/>
    </div>
</template>

<script>
    import DndList from './components/DndList.vue'
    import DownloadVue from './components/Download.vue'
    import SavePicVue from './components/SavePic.vue'
    export default {
        name: 'App',
        components: {
            DndList,
            DownloadVue,
            SavePicVue
        }
    }
</script>

<style>
    #app {
        font-family: "Microsoft Yahei Light", "Microsoft Yahei", PingFangSC-Regular, Helvetica, sans-serif, 等线;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    * {
        margin: 0;
        padding: 0;
    }
</style>
