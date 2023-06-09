<template>
    <div class="w-full">
        <div 
            v-if="!pending" 
            class="">
            <template
                v-for="(item, index) in listArticle.articles" :key="index">
                <div>
                    <div class="flex items-center justify-between mb-1">
                        <div class="flex items-center gap-2">
                            <div class="w-[32px] h-[32px] overflow-hidden rounded-full">
                                <img class="" :src="item?.author?.image ?? ''" alt="">
                            </div>
                            <div class="max-w-[2000px] overflow-hidden">
                                <p class="text-[#5CB85C] text-sm hover:underline">{{ item?.author?.username ?? '' }}</p>
                                <p class="text-[#C8C8C8] text-xs">{{ dateFormat(item?.createdAt, 'LL') }}</p>
                            </div>
                        </div>
                        <div class="rounded-md border border-[#5CB85C] min-w-[60px] min-h-[26px] flex items-center justify-center gap-2 px-1">
                            <img class="w-[15px] h-[15px]" src="@/assets/images/svg/heart.svg" alt="" srcset="">
                            <p class="text-[#5CB85C] text-sm">{{ item?.favoritesCount }}</p>
                        </div>
                    </div>
                    <p class="text-lg font-bold mb-1">{{ item?.title }}</p>
                    <p class="text-base mb-1 text-[gray]">{{ item?.description }}</p>
                    <div class="flex items-center justify-between">
                        <p class="text-[gray] text-sm">Read more</p>
                        <div class="flex items-center justify-center">
                            <template v-for="(tag, index) in item.tagList">
                                <span>

                                </span>
                            </template>
                        </div>
                    </div>
                </div>                
            </template>            
        </div>
    </div>
</template>

<script setup lang="ts">
const { $http } = useNuxtApp();
const dateFormat = useMoment();

const { data: listArticle, pending } = await useLazyAsyncData(async () => {
    const data = await $http.getAllArticles();
    return data.data;
})
</script>

<style scoped>

</style>