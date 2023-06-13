<template>
    <div>
        <p class="text-[#5CB85C] font-bold my-6 text-2xl">News Feed</p>
        <p>{{ userStore.getterCount }}</p>
        <button @click="increment">Bầm vào đây</button>
        <div class="grid grid-cols-12 gap-4">
            <div class="col-span-9">
                <ListArticles/>
            </div>
            <div class="col-span-3">
                <ListTags/>
            </div>
        </div>
    </div>
</template>

<script setup>
import useUserStore from '~/store/user';
import ListArticles from '@/components/common/ListArticles.vue';
import ListTags from '@/components/common/ListTags.vue';

const { $pinia } = useNuxtApp();
const userStore = useUserStore($pinia);

function increment() {
    userStore.increment();
}
</script>

<style>

</style>