<template>
    <div>
        <p>This is index page</p>
        <div class="grid grid-cols-12">
            <div class="col-span-10">
                <ListArticles/>
            </div>
            <div class="col-span-2">

            </div>
        </div>
    </div>
</template>

<script setup>
import ListArticles from '@/components/common/ListArticles.vue';
import { ref, onMounted } from 'vue';
const { $http } = useNuxtApp();
const listArticle = ref([]);

// const { data } = useAsyncData(async () => {
//     const data = await $http.getAllArticles();
//     return await $http.getAllArticles();
// })

// onMounted(async () => {
//     const data = await $http.getAllArticles();
//     listArticle.value = data;
// })

</script>

<style>

</style>