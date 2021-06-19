<template>
  <div class="flex flex-col justify-center items-center space-y-6 h-screen">
    <img class="w-96 object-cover" src="/src/assets/images/avatar.png" />
    <h1 class="font-header font-black text-primary text-6xl text-center">
      Sebastian Stoelen
    </h1>
    <div class="font-body text-center">
      UX Designer by heart ❤️ | Coder by trade 💼 | Deep sleeper by night 😴
    </div>
    <div class="pt-8 md:pt-16">
      <ArrowDownIcon class="h-5 w-5 animate-bounce"></ArrowDownIcon>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { ArrowDownIcon } from "@heroicons/vue/outline";

export default defineComponent({
  name: "Hello",
  components: {
    ArrowDownIcon
  }
});


</script>
