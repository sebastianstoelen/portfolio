<template>
  <div class="grid md:grid-cols-2 align-middle gap-8 cursor-pointer" @click="goToPage">
    <img
      class="
        col-auto
        w-full
        object-cover
        rounded-3xl
        border-4 border-black
        transition
        duration-500
        ease-in-out
        transform
      "
      :src="imageSrc"
    />
    <div class="col-auto flex flex-col justify-center">
      <h3 class="font-header text-primary text-4xl font-black">{{ title }}</h3>
      <p class="font-body mt-4">{{ description }}</p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjectSummary",
  props: {
    imageSrc: String,
    title: String,
    description: String,
    targetPage: String
  },
  methods: {
    goToPage: function() {
      this.$router.push({path: this.targetPage || '/'})
    }
  }
});
</script>
