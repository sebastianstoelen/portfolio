<template>

</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ImageCollage",
  props: {
    image1: String,
    image1Descr: String,
    image2: String,
    image2Descr: String,
    image3: String,
    image3Descr: String,
  },
});
</script>
