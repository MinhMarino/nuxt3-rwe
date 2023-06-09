<template>
  <div>
    <ClientOnly>
      <Header/>
    </ClientOnly>
    <slot />
    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/main/Header.vue';
import Footer from '~/components/main/Footer.vue';
</script>
