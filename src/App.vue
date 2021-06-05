<template>
  <div class="container mx-auto h-screen">
    <Hello></Hello>
    <h3 class="font-header text-primary text-4xl font-black">Projects</h3>
    <ProjectSummary
      title="Test title"
      description="Some test description which will be a bit longer that the title itself"
    ></ProjectSummary>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Hello from "./components/Hello.vue";
import ProjectSummary from "./components/ProjectSummary.vue";

export default defineComponent({
  name: "App",
  components: {
    Hello,
    ProjectSummary,
  },
});
</script>

<style>
body {
  @apply min-h-screen bg-background;
}
</style>
