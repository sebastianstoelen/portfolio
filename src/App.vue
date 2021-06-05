<template>
  <div class="container mx-auto h-screen p-16">
    <Hello class="h-screen"></Hello>
    <h3 class="font-header text-primary text-4xl font-black">Projects</h3>
    <div class="space-y-16 pt-16">
      <ProjectSummary
        imageSrc="/src/assets/images/BuurtBox.png"
        title="BuurtBox: Ecological food made easy"
        :description="buurtBoxDescription"
      ></ProjectSummary>
      <ProjectSummary
        imageSrc="/src/assets/images/Chillzz.png"
        title="Chillzz: Motivating a healthy work-life balance"
        :description="chillzDescription"
      ></ProjectSummary>
    </div>
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
  data: function() {
    return {
      buurtBoxDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nisl laoreet purus, amet, dolor id. Diam imperdiet leo tincidunt mi. Imperdiet velit vivamus interdum pharetra ultricies nulla. Sed placerat amet, eu et. Justo sodales sagittis placerat urna. Pulvinar aenean etiam enim, sed et. Neque sollicitudin velit integer interdum ut maecenas.",
      chillzDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nisl laoreet purus, amet, dolor id. Diam imperdiet leo tincidunt mi. Imperdiet velit vivamus interdum pharetra ultricies nulla. Sed placerat amet, eu et. Justo sodales sagittis placerat urna. Pulvinar aenean etiam enim, sed et. Neque sollicitudin velit integer interdum ut maecenas.",
    };
  },
});
</script>

<style>
body {
  @apply min-h-screen bg-background;
}
</style>
