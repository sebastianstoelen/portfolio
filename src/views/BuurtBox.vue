<template>
  <Header></Header>
  <img
    class="w-full h-full object-cover rounded-3xl border-4 border-black"
    :src="buurtBoxWide"
  />
  <div class="p-8">
    <div class="flex w-full justify-center space-x-8">
      <div class="flex space-x-2">
        <CalendarIcon class="h-5 w-5"></CalendarIcon>
        <p class="font-body">October 2020 - May 2021</p>
      </div>
      <div class="flex space-x-2">
        <UserIcon class="h-5 w-5"></UserIcon>
        <p class="font-body">UX Researcher, Designer</p>
      </div>
      <div class="flex space-x-2">
        <TerminalIcon class="h-5 w-5"></TerminalIcon>
        <p class="font-body">Figma, Miro, SquareSpace</p>
      </div>
    </div>
    <div class="flex justify-center pt-16">
      <h1 class="w-2/3 font-header text-5xl font-black text-center">
        A platform connecting consumers with local shopkeepers selling
        sustainable foods.
      </h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UnderConstruction from "@/components/errors/UnderConstruction.vue";
import Header from "@/components/Header.vue";
import buurtBoxWide from "@/assets/images/BuurtBox-wide.jpg";
import { UserIcon, CalendarIcon, TerminalIcon } from "@heroicons/vue/outline";

export default defineComponent({
  name: "BuurtBox",
  components: {
    UnderConstruction,
    Header,
    UserIcon,
    CalendarIcon,
    TerminalIcon,
  },
  data: function () {
    return {
      buurtBoxWide: buurtBoxWide,
    };
  },
});
</script>
