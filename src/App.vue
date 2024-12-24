<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <header>
    <NavBar />
    <div class="wrapper">
      <nav>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
