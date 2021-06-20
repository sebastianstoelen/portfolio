<template>
  <div class="fixed w-screen top-0 left-0 bg-background z-50">
    <div class="flex items-center px-4 md:px-16 py-4">
      <img
        class="w-16 object-cover m-1 mr-4 cursor-pointer"
        :src="avatar"
        @click="navigateHome"
      />
      <div class="-mt-2">
        <h3 class="text-primary font-header text-3xl font-black">
          Sebastian Stoelen
        </h3>
        <p class="font-body text-xs">
          UX Designer by heart ❤️ | Coder by trade 💼 | Deep sleeper by night 😴
        </p>
      </div>
    </div>
    <div class="bg-primary h-0.5 w-full"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import avatar from "@/assets/images/avatar.png";

export default defineComponent({
  name: "Header",
  data: function () {
    return {
      avatar: avatar,
    };
  },
  methods: {
    navigateHome: function () {
      this.$router.push({ path: "/" });
    },
  },
});
</script>
