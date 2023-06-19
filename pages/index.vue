<template>
    <div>
        <p class="text-[#5CB85C] font-bold my-6 text-2xl">News Feed</p>
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
import { onMounted } from 'vue';
import { useQuery } from '@tanstack/vue-query';
import ListArticles from '@/components/common/ListArticles.vue';
import ListTags from '@/components/common/ListTags.vue';

onMounted(() => {
    const result = useQuery({
        queryKey: ['todos'],
        queryFn: () => {
            console.log("Refetch data");
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("foo");
                }, 100);
            });;
        },
        refetchInterval: 1000,
    })
})
</script>

<style>

</style>``