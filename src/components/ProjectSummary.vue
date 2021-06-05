<template>
  <div class="grid grid-cols-2 content-center gap-8 p-8">
    <img class="w-full rounded-3xl" src="/src/assets/images/BuurtBox.png" />
    <div>
      <h3 class="font-header text-primary text-4xl font-black">{{ title }}</h3>
      <p class="font-body">{{ description }}</p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjectSummary",
  props: {
    title: String,
    description: String,
  },
});
</script>
