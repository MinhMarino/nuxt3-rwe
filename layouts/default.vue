<template>
  <div>
    <ClientOnly>
      <Header/>
    </ClientOnly>
    <div class="max-w-[1160px] mx-auto">
      <slot class="max-w-[1160px]"/>

    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/main/Header.vue';
import Footer from '~/components/main/Footer.vue';
</script>
