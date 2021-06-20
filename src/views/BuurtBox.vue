<template>
    <Header></Header>
    <UnderConstruction />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UnderConstruction from "@/components/errors/UnderConstruction.vue"
import Header from "@/components/Header.vue";

export default defineComponent({
    name: "BuurtBox",
    components: {
        UnderConstruction,
        Header
    }
})
</script>