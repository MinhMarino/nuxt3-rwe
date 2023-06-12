<template>
    <div class="bg-[#F3F3F3] p-3 rounded-lg">
        <p class="text-sm mb-1">Popular Tags</p>
        <div class="flex flex-wrap gap-1">
            <template v-for="(tag, index) in listTags.data.tags" :key="index">
                <span class="text-[gray] px-1 border border-[gray] rounded-xl text-xs cursor-pointer">
                    {{ tag }}
                </span>
            </template>
        </div>
    </div>
</template>

<script setup>
const { $http } = useNuxtApp();

const { data: listTags, pending } = await useLazyAsyncData(async () => {
    const data = await $http.getAllTags();
    return data;
});
</script>

<style>

</style>