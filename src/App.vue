<template>
  <div class="container mx-auto h-screen p-4 md:p-16">
    <Hello class="h-screen"></Hello>
    <h3 class="font-header text-primary text-4xl font-black">Projects</h3>
    <div class="space-y-16 py-16">
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
        "BuurtBox is a platform stimulating a more sustainable shopping habit in consumers shopping for food. BuurtBox aims to provide consumers a more user-friendly and online shopping experience, while still stimulating a more sustainable shopping habit by connecting local dealers of sustainale foord to local shoppers. BuurtBox is making the easy choice the sustainable choice.",
      chillzDescription:
        "Now the corona pandemic is slowly subsiding (at least in Belgium, knock on wood 🤞) we’re moving into a more hybrid way of working. Research suggest working from home makes it harder for people to make a clear distinction between their work an private life, potentially having a negative effect on their work balance. It’s even shown that working from home can increase burnouts. Chillz aims to encourage workers to take some time off during the day by encouraging planning of personal time and providing incentives to take up this personal time."
    };
  },
});
</script>

<style>
body {
  @apply min-h-screen bg-background;
}
</style>
