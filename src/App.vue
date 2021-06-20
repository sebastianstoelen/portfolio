<template>
  <div class="container mx-auto mt-32 p-4 md:p-16">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
});
</script>

<style>
body {
  @apply min-h-screen bg-background;
}
</style>
