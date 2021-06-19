<template>
    <UnderConstruction />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UnderConstruction from "@/components/errors/UnderConstruction.vue"

export default defineComponent({
    name: "BuurtBox",
    components: {
        UnderConstruction
    }
})
</script>