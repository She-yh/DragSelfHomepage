<template>
    <div id="app">
        <DndList/>
    </div>
</template>

<script>
    import DndList from './components/DndList.vue'

    export default {
        name: 'App',
        components: {
            DndList
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
