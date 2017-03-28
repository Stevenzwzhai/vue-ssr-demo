<template>
    <div class="content">
        <h1>this is index</h1>
        <!--<course-cover :class-data="classData[0]"></course-cover>-->
        <!--<article-items :article-items="articleItems"></article-items>-->
    </div>
</template>
<script>
//    import courseCover from '../components/courseCover.vue';
//    import articleItems from '../components/articleItems';

    export default {
        computed: {
            classData() {
                return this.$store.state.courseListItems;
            },
            articleItems() {
                return this.$store.state.articleItems;
            }
        },
        components: {
//            courseCover,
//            articleItems
        },
        // 服务端获取数据，暴露出的方法，通过vm.fnName调用
        fetchServerData ({ state, dispatch, commit }) {
            //state和route???
            let alias = state.route.params.alias;

            return Promise.all([
                dispatch('FETCH_ZT', { alias })
            ])
        },
        // 客户端获取数据
        beforeMount() {
            return this.$store.dispatch('FETCH_COURSE_ITEMS');
        }
    }
</script>
<style scoped>

</style>