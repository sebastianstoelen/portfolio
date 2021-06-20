<template>
  <div>
    <p class="text-3xl">{{ emoji }}</p>
    <h5 class="text-3xl font-header font-black text-black pt-2">{{ title }}</h5>
    <p class="font-body pt-4">
      {{ description }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EmojiTextBlock",
  props: {
    emoji: String,
    title: String,
    description: String,
  },
});
</script>
