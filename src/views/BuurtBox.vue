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

    <!-- Challenge -->
    <div class="pt-32">
      <h2 class="font-header text-3xl md:text-5xl font-black">Challenge</h2>
      <p class="font-body pt-4">
        BuurtBox was a project within the Experience Architect postgraduate
        education at Artevelde Hogeschool in Gent, Belgium. Over the course of a
        year, the goal was to apply different aspects of Service Design and UX
        Design to a case.
      </p>
      <p class="font-body pt-4">
        BuurtBox started in a very wide problem space: sustainability. To come
        to a well-defined challenge statement desk research was carried out to
        explore the problem space and find opportunities for innovative
        solutions. One of opportunities spaces is our food consumption. This led
        me to following challenge statement:
      </p>
      <div class="flex justify-center pt-16">
        <h3
          class="
            w-full
            md:w-2/3
            font-header
            italic
            text-center text-2xl
            md:text-3xl
            font-black
          "
        >
          “How might we encourage a more sustainable shopping habit in consumers
          in their twenties and thirties shopping for food?”
        </h3>
      </div>
    </div>

    <!-- Discovery -->
    <div class="pt-32">
      <h2 class="font-header text-3xl md:text-5xl font-black">Discovery</h2>
      <div class="flex flex-wrap justify-center pt-16 space-x-24">
        <NumberCallout
          class="w-56 flex-none"
          number="6"
          description="User Interviews"
        ></NumberCallout>
        <NumberCallout
          class="w-56 flex-none"
          number="3"
          description="Personas"
        ></NumberCallout>
        <NumberCallout
          class="w-56 flex-none"
          number="1"
          description="Customer Journey"
        ></NumberCallout>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 pt-16">
        <EmojiTextBlock
          emoji="💡"
          title="Insight: Sustainability is not a main concern for most consumers."
          description="While most people interviewed stated they find sustainability important and would like to increase their efforts to shop sustainably, they also state that they believe it very hard to make sustainable choices and are not willing to sacrifice their current habits in favor of a more sustainable shopping habit."
        ></EmojiTextBlock>
        <EmojiTextBlock
          emoji="💡"
          title="Insight: Consumers spend a lot of time preparing grocery shopping."
          description="In a co-creative workshop a customer journey  was created. One of the main conclusions from this customer journey was that consumers spend a lot of time preparing their grocery shopping. This includes looking for inspiration and recepies, as wel as planning their visit to the store."
        ></EmojiTextBlock>
      </div>
      <div class="pt-16">
        <h3 class="font-header text-2xl md:text-3xl font-black">Conclusion</h3>
        <p class="font-body pt-4">
          To encourage consumers to adopt a more sustainable shopping habit, any
          potential solution must also offer considerable benefits with regards
          to convience or price compared to the current way consumers do their
          grocery shopping. The amout of effort consumer put in preparing their
          grocery shopping could provide such an opportunity for improvement.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UnderConstruction from "@/components/errors/UnderConstruction.vue";
import Header from "@/components/Header.vue";
import NumberCallout from "@/components/NumberCallout.vue";
import EmojiTextBlock from "@/components/EmojiTextBlock.vue";
import buurtBoxWide from "@/assets/images/BuurtBox-wide.jpg";
import { UserIcon, CalendarIcon, TerminalIcon } from "@heroicons/vue/outline";

export default defineComponent({
  name: "BuurtBox",
  components: {
    UnderConstruction,
    Header,
    NumberCallout,
    EmojiTextBlock,
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
