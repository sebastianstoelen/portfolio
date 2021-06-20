<template>
  <Hello></Hello>
  <h3 class="font-header text-primary text-4xl font-black">Projects</h3>
  <div class="space-y-16 py-16">
    <ProjectSummary
      :imageSrc="buurtBoxImage"
      title="BuurtBox: Sustainable food made easy"
      :description="buurtBoxDescription"
      targetPage="/buurtbox"
    ></ProjectSummary>
    <ProjectSummary
      :imageSrc="chillzImage"
      title="Chillzz: Motivating a healthy work-life balance"
      :description="chillzDescription"
      targetPage="/chillz"
    ></ProjectSummary>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Hello from "@/components/Hello.vue";
import ProjectSummary from "@/components/ProjectSummary.vue";
import chillzImage from "@/assets/images/Chillz.jpg";
import buurtBoxImage from "@/assets/images/buurtbox/BuurtBox.jpg";

export default defineComponent({
  name: "Home",
  components: {
    Hello,
    ProjectSummary,
  },
  data: function () {
    return {
      buurtBoxDescription:
        "BuurtBox is a platform stimulating a more sustainable shopping habit in consumers shopping for food. BuurtBox aims to provide consumers a more user-friendly and online shopping experience, while still stimulating a more sustainable shopping habit by connecting local dealers of sustainale foord to local shoppers. BuurtBox is making the easy choice the sustainable choice.",
      chillzDescription:
        "Now the corona pandemic is slowly subsiding (at least in Belgium, knock on wood 🤞) we’re moving into a more hybrid way of working. Research suggest working from home makes it harder for people to make a clear distinction between their work an private life, potentially having a negative effect on their work balance. It’s even shown that working from home can increase burnouts. Chillz aims to encourage workers to take some time off during the day by encouraging planning of personal time and providing incentives to take up this personal time.",
      chillzImage: chillzImage,
      buurtBoxImage: buurtBoxImage,
    };
  },
});
</script>

<style></style>
