<template>
    <div>
        <p>This is index page</p>        
    </div>
</template>

<script setup>
definePageMeta({
  layout: "main",
});
const nuxtApp = useNuxtApp();
onMounted(() => {
  console.log('nuxtApp: ', nuxtApp);
});
</script>

<style>

</style>