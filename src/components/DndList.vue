<template>
    <div>
        <div class="body-face"></div>
        <Plusbox v-if="showbox" :showbox="showbox" :list_preview="list_preview" @get_list="get_list"
                 @get_show="get_show"></Plusbox>
        <div class="dndList-list-view">
            <h3 class="h-view">布置区</h3>
            <draggable :list="list_view" :options="{group:'article', disabled: disabled}"
                       @start="start22"
                       @end="end22"
                       class="dragArea-view">
                <div v-for="(element, index) in list_view" :key="element.id" class="list-complete-item">
                    <div class="list-complete-item-handle">
                        <TextCom v-if="element.isText"></TextCom>
                        <PicCom v-else-if="element.isPic"></PicCom>
                        <Comments v-else-if="element.isCom"></Comments>
                        <Piccard v-else-if="element.isPiccard"></Piccard>
                        <i class="fa fa-times-circle-o" aria-hidden="true" @click="handleDel(index, element.id)"></i>
                    </div>
                </div>
            </draggable>
        </div>
        <div class="dndList-list-preview">
            <h3 style="margin: 30px 0 50px 0">组件</h3>
            <draggable :list="list_preview"
                       :options="{group:{name: falgs,pull:'clone'},filter: '.undraggable', sort: false}"
                       @end="end"
                       class="dragArea-preview">
                <div class="list-complete-item-preview" v-for="(element) in list_preview" :key="element.id">
                    <i class="fa"
                       :class="{'fa-align-justify':element.isText,'fa-picture-o':element.isPic,'fa-comments':element.isCom}"
                       aria-hidden="true"></i>
                    <i v-if="element.isSelf">S</i>
                </div>
            </draggable>
            <div class="list-complete-item-preview">
                <i class="fa fa-plus-square-o" aria-hidden="true" @click="showbox_func"></i>
            </div>
        </div>
    </div>
</template>
<script>
    import draggable from "vuedraggable";
    import TextCom from "@/components/TextCom";
    import PicCom from "@/components/PicCom";
    import Comments from "@/components/Comments";
    import Plusbox from "@/components/Plusbox";
    export default {
        name: 'DndList',
        components: {draggable, TextCom, PicCom, Comments, Plusbox},
        watch: {},
        data() {
            return {
                falgs: 'article',
                disabled: false,
                list_view: [],
                list_preview: [
                    {id: 1, isText: true},
                    {id: 2, isCom: true},
                    {id: 3, isPic: true}
                ],
                showbox: false
            }
        },
        computed: {},
        methods: {
            get_show(data) {
                this.showbox = data;
            },
            get_list(data) {
                console.log(data);
                this.list_preview = data;
            },
            end(ev) {
                if (ev.to.className === 'dragArea-view') {
                    this.$set(this.list_preview[ev.oldIndex], 'flag', true)
                }
            },
            start22() {
                this.falgs = '222222'
            },
            end22() {
                this.falgs = 'article'
            },
            showbox_func() {
                this.showbox = !this.showbox;
            },
            handleDel(index, id) {
                this.list_view.splice(index, 1)
                let q = this.list_preview.find((value) => {
                    return value.id === id
                });
                this.$set(q, 'flag', false)
            }

        }
    }
</script>

<style rel="stylesheet">
    * {
        padding: 0;
        margin: 0;
        color: white;
        cursor: default;
    }

    .fa-times-circle-o {
        color: #7a7a7a;
        position: absolute;
        top: 5px;
        right: 5px;
    }

    .fa-times-circle-o:before {
        font-size: 20px;
    }

    .h-view {
        z-index: 100;
        width: 120px;
        height: 35px;
        line-height: 35px;
        border-radius: 20px;
        backdrop-filter: blur(8px);
        position: fixed;
        top: 20px;
        margin-left: 43vw;
        color: white;
    }

    .dndList-list-view {
        display: flex;
        flex-direction: column;
    }

    .dndList-list-preview {
        width: 5vw;
        right: 0;
        height: 100vh;
        backdrop-filter: blur(5px);
        top: 0;
        position: fixed;;
    }

    .list-complete-item-preview {
        cursor: pointer;
        font-size: 14px;
        height: 40px;
        width: 100%;
        transition: all 1s;
    }

    .list-complete-item.sortable-chosen {
        background: #4AB7BD;
    }

    .dragArea-preview {
        display: flex;
        flex-direction: column;
    }

    .body-face {
        position: fixed;
        left: 18vw;
        width: 60vw;
        height: 100vh;
        backdrop-filter: blur(50px);
    }

    .dragArea-view {
        position: absolute;
        left: 18vw;
        width: 60vw;
        height: 100%;
        min-height: 100vh;
    }

    .list-complete-item.sortable-ghost {
        background: #30B08F;
    }


    .list-complete-enter,
    .list-complete-leave-active {
        opacity: 0;
    }

    body {
        background-image: url("../assets/background.jpg");
        background-size: cover;
        background-attachment: fixed;
    }

</style>
