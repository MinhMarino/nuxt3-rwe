<template>
    <div>
        <p>This is profile page</p>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})
</script>

<style scoped>

</style>