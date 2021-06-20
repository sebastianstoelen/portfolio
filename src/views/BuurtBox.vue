<template>
  <Header></Header>
  <img
    class="w-full h-full object-cover rounded-3xl border-4 border-black"
    :src="buurtBoxWide"
  />

  <div class="p-4 md:p-16">
    <div class="flex flex-wrap w-full justify-center gap-x-8 gap-y-4">
      <div class="no-flex flex space-x-2">
        <CalendarIcon class="h-5 w-5"></CalendarIcon>
        <p class="font-body">October 2020 - May 2021</p>
      </div>
      <div class="no-flex flex space-x-2">
        <UserIcon class="h-5 w-5"></UserIcon>
        <p class="font-body">UX Researcher, Designer</p>
      </div>
      <div class="no-flex flex space-x-2">
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
      <p class="font-body pt-4">
        To get more insight into the problem space, qaulitative research was
        done. More in partiucular, I conducted in-depth interviews with 6 end
        users. The results from these interviews were aggregated into three
        different personas. In addition to this research, I orgnaised a
        co-creative workshop to build out the customer journey of going grocery
        shopping.
      </p>
      <div class="flex flex-wrap justify-center pt-16 gap-x-24 gap-y-8">
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
      <!-- Discovery collage -->
      <div class="pt-16">
        <div class="grid grid-cols-1 -mx-4 md:-mx-16 gap-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="flex flex-col items-center">
              <img
                class="
                  w-full
                  h-full
                  object-scale-down
                  bg-white
                  rounded-3xl
                  border-4 border-black
                "
                :src="personas"
              />
              <p class="font-body text-gray-500 pt-2 px-8 text-center">
                An overview of the three personas, and how they score on
                different axes
              </p>
            </div>
            <div class="flex flex-col items-center">
              <img
                class="w-full object-cover rounded-3xl border-4 border-black"
                :src="persona"
              />
              <p class="font-body text-gray-500 pt-2">
                One persona worked out in more detail. This is the persona the
                rest of the project is focused around.
              </p>
            </div>
          </div>
          <div class="flex flex-col items-center">
            <img
              class="
                w-full
                h-full
                object-cover
                rounded-3xl
                border-4 border-black
              "
              :src="journey"
            />
            <p class="font-body text-gray-500 pt-2">
              The customer journey of Sofie
            </p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 pt-16 gap-8">
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

    <!-- Ideation and prototyping -->
    <div class="pt-32">
      <h2 class="font-header text-3xl md:text-5xl font-black">
        Ideation & Prototyping
      </h2>
      <p class="font-body pt-4">
        Starting off with multiple ideation sessions, one of them a
        collaborative workshop with 4 end users, I ended up with more than a 100
        different ideas on how to encourage a more sustainable shopping habit.
        The three ideas with the most potential were evaluated using a value
        proposition canvas. One of them provided the best answer to the double
        problem stated above: BuurtBox.
      </p>
      <p class="font-body pt-4">
        To evaluate the viability of this idea, multiple hypotheses were formed,
        each of them evaluated by building a corresponding prototype.
      </p>

      <!-- Prototype collage -->
      <div class="pt-16">
        <div class="grid grid-cols-1 md:grid-cols-2 -mx-4 md:-mx-16 gap-8">
          <div class="flex flex-col items-center">
            <img
              class="
                w-full
                h-full
                object-cover
                rounded-3xl
                border-4 border-black
              "
              :src="buurtBoxWide"
            />
            <p class="font-body text-gray-500 pt-2">Some description</p>
          </div>
          <div class="grid grid-cols-1 gap-8">
            <div class="flex flex-col items-center">
              <img
                class="w-full object-cover rounded-3xl border-4 border-black"
                :src="buurtBoxWide"
              />
              <p class="font-body text-gray-500 pt-2">Some description</p>
            </div>
            <div class="flex flex-col items-center">
              <img
                class="w-full object-cover rounded-3xl border-4 border-black"
                :src="buurtBoxWide"
              />
              <p class="font-body text-gray-500 pt-2">Some description</p>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 pt-16 gap-8">
        <EmojiTextBlock
          emoji="🔬"
          title="Hypothesis: Consumers care about BuurtBox as a platform."
          description="To validate this idea I tested a “paper” prototype (I used my iPad and Figma 🤫) with 3 end users. User were very enthousiastic about the idea and offered multiple suggestions to improve the product, like for example adding in bike delivery and providing more insight into why certain products are sustainable."
        ></EmojiTextBlock>
        <EmojiTextBlock
          emoji="🔬"
          title="Hypothesis: Consumers will download the application."
          description="To test whether consumers would also commit to downloading the application. A fake landing page was created, including a button to download the application. Analysing the trafic on this webiste I could conclude that consumers were indeed willing to download the application."
        ></EmojiTextBlock>
        <EmojiTextBlock
          emoji="🔬"
          title="Hypothesis: Shopkeepers care about BuurtBox a a platform."
          description="A part of the fake landing page was dedicated to shopkeepers. I tried to generate trafic to this webiste by flyering and talking to shopkeepers at a local market. Unfortunately, not enough traffic was generated to conclude anything meaningful."
        ></EmojiTextBlock>
      </div>
      <div class="pt-16">
        <h3 class="font-header text-2xl md:text-3xl font-black">Conclusion</h3>
        <p class="font-body pt-4">
          Using the different protoypes, I was able to confirm most of the
          hypotheses. One of the biggest oversights however was the lack of
          involvement of shopkeepers up until this point. I tried to correct
          this by gauging shopkeeper intereset using a fake landing page, but it
          proved a lot harder than expected to generate traffic to this site.
        </p>
      </div>
      <!-- Prototyping end collage -->
      <div class="pt-16">
        <div class="grid grid-cols-1 md:grid-cols-2 -mx-4 md:-mx-16 gap-8">
          <div class="flex flex-col items-center">
            <img
              class="
                w-full
                h-full
                object-cover
                rounded-3xl
                border-4 border-black
              "
              :src="buurtBoxWide"
            />
            <p class="font-body text-gray-500 pt-2">Some description</p>
          </div>
          <div class="flex flex-col items-center">
            <img
              class="
                w-full
                h-full
                object-cover
                rounded-3xl
                border-4 border-black
              "
              :src="buurtBoxWide"
            />
            <p class="font-body text-gray-500 pt-2">Some description</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Parting Thoughts -->
    <div class="pt-32">
      <h2 class="font-header text-3xl md:text-5xl font-black">
        Parting Thougths
      </h2>
      <div class="font-body">
        <p class="pt-4">
          As mentioned above, BuurtBox was created within the context of a
          Postgraduate education. As such, it was in no way the goal of this
          project to finsh with a finished product. The main goal of this
          project was to have a taste of the different steps involved in
          creating a new digital product.
        </p>
        <p class="pt-4">
          There is still a lot of work to be done to validate BuurtBox as a
          product, most of which relating to the shopkeeper-side of the product.
          I would need to take a step back to user research to interview some
          shopkeepers, get a grip on their customer journey and validate whether
          my assumption that local shop owners would like to increase their
          online presence is correct.
        </p>
        <p class="pt-4">
          The show must go on however, and the curriculum continued with
          defining the business model canvas, creating a roadmap and defining a
          communications and data & analytics stragegy.
        </p>
        <p class="pt-4">
          To conclude this case study. I would like to detail some key
          learnings.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 pt-16 gap-8">
        <EmojiTextBlock
          emoji="📚"
          title="Learning: Sometimes, the best way to go forward is to go back."
          description="The structure of this course was fairly linear, but in reality, I would have needed much more back-and-forth between research, prototyping and validation to iron out all the kinks in my vision of this product."
        ></EmojiTextBlock>
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
import ImageCollage from "@/components/ImageCollage.vue";
import buurtBoxWide from "@/assets/images/buurtbox/BuurtBox-wide.jpg";
import personas from "@/assets/images/buurtbox/personas.png";
import persona from "@/assets/images/buurtbox/persona.png";
import journey from "@/assets/images/buurtbox/journey.png";
import { UserIcon, CalendarIcon, TerminalIcon } from "@heroicons/vue/outline";

export default defineComponent({
  name: "BuurtBox",
  components: {
    UnderConstruction,
    Header,
    NumberCallout,
    EmojiTextBlock,
    ImageCollage,
    UserIcon,
    CalendarIcon,
    TerminalIcon,
  },
  data: function () {
    return {
      buurtBoxWide: buurtBoxWide,
      personas: personas,
      persona: persona,
      journey: journey,
    };
  },
});
</script>
