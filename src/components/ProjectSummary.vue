<template>
  <div class="grid md:grid-cols-2 align-middle gap-8">
    <img
      class="
        col-auto
        w-full
        object-cover
        rounded-3xl
        border-4 border-black
        cursor-pointer
      "
      :src="imageSrc"
      @click="goToPage"
    />
    <div class="col-auto flex flex-col justify-center">
      <h3 class="font-header text-primary text-4xl font-black">{{ title }}</h3>
      <p class="font-body mt-4">{{ description }}</p>
      <div class="flex content-center mt-12 cursor-pointer" @click="goToPage">
        <p class="font-body underline">Learn more</p>
        <ArrowRightIcon class="h-5 w-5 ml-2 pt"></ArrowRightIcon>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { ArrowRightIcon } from "@heroicons/vue/outline";

export default defineComponent({
  name: "ProjectSummary",
  components: {
    ArrowRightIcon,
  },
  props: {
    imageSrc: String,
    title: String,
    description: String,
    targetPage: String,
  },
  methods: {
    goToPage: function () {
      this.$router.push({ path: this.targetPage || "/" });
    },
  },
});
</script>
