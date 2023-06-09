<template>
    <div>
        <p>This is index page</p>
        <p class="text-[red]">{{ listArticle }}</p>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const { $http } = useNuxtApp();
const listArticle = ref([]);

useAsyncData(async () => {
    console.log("$http: ", await $http.getAllArticles());
})

onMounted(async () => {
    const data = await $http.getAllArticles();
    listArticle.value = data;
})

</script>

<style>

</style>