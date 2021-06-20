<template>
    <Header></Header>
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
    
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UnderConstruction from "@/components/errors/UnderConstruction.vue"
import Header from "@/components/Header.vue";
import buurtBoxWide from "@/assets/images/BuurtBox-wide.jpg";

export default defineComponent({
    name: "BuurtBox",
    components: {
        UnderConstruction,
        Header
    },
    data: function () {
        return {
            buurtBoxWide: buurtBoxWide
        }
    }
})
</script>