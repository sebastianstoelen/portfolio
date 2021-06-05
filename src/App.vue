<template>
  <Hello></Hello>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Hello from "./components/Hello.vue";

export default defineComponent({
  name: "App",
  components: {
    Hello,
  },
});
</script>

<style>
body {
  @apply min-h-screen bg-background;
}
</style>
