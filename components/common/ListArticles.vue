<template>
    <div class="w-full">
        <div v-if="pending">
            <p>Loading</p>
        </div>
        <div 
            v-else
            class="">
            <template
                v-for="(item, index) in listArticle.data.articles" :key="index">
                <div class="border-t border-[lightgray] py-4">
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
                        <div class="flex items-center justify-center gap-1">
                            <template v-for="(tag, index) in item.tagList" :key="index">
                                <span class="text-[gray] px-1 border border-[gray] rounded-xl text-xs">
                                    {{ tag }}
                                </span>
                            </template>
                        </div>
                    </div>
                </div>                
            </template>
            <VPagination
                v-model="page"
                :pages="10"
                :range-size="1"
                :hideFirstButton="true"
                :hideLastButton="true"
                active-color=""
            />           
        </div>
    </div>
</template>

<script setup lang="ts">
const { $http } = useNuxtApp();
const dateFormat = useMoment();
const page = ref(1);

const { data: listArticle, pending } = await useLazyAsyncData(async () => {
    const data = await $http.getAllArticles({
        limit: 10,
        offset: 10 * page.value,
    });
    return data;
}, {
    watch: [page]
})
</script>

<style lang="scss" scoped>
:deep(.Pagination) {
    justify-content: center;
    padding: 30px 0px;
    li {       
        button {
            width: 30px !important;
            height: 30px !important;
            padding: 8px !important;
            border-radius: 8px !important;
            font-size: 16px;
            font-weight: bold;
            color: #5CB85C;            
        }
        .Page-active {
            background-color: #5CB85C;
            color: white;
        }
    }
}
</style>