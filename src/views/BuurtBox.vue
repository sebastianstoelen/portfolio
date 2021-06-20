<template>
  <Header></Header>
  <img
    class="w-full h-full object-cover rounded-3xl border-4 border-black"
    :src="buurtBoxWide"
  />
  <div class="p-4 md:p-16">
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
      <h1
        class="
          w-full
          md:w-2/3
          font-header
          text-3xl
          md:text-5xl
          font-black
          text-center
        "
      >
        A platform connecting consumers with local shopkeepers selling
        sustainable foods.
      </h1>
    </div>
    <div class="pt-16">
      <h2 class="font-header text-3xl md:text-5xl font-black">Challenge</h2>
      <p class="font-body mt-8">
        BuurtBox was a project within the Experience Architect postgraduate
        education at Artevelde Hogeschool in Gent, Belgium. Over the course of a
        year, the goal was to apply different aspects of Service Design and UX
        Design to a case.
      </p>
      <br />
      <p class="font-body">
        BuurtBox started in a very wide problem space: sustainability. To come
        to a well-defined challenge statement desk research was carried out to
        explore the problem space and find opportunities for innovative
        solutions. One of opportunities spaces is our food consumption. This led
        me to following challenge statement:
      </p>
      <div class="flex justify-center pt-8">
        <h3 class="w-full md:w-2/3 font-header italic text-center text-2xl md:text-3xl font-black">
          “How might we encourage a more sustainable shopping habit in
          consumers in their twenties and thirties shopping for food?”
        </h3>
      </div>
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
