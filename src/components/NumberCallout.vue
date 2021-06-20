<template>
    <div class="bg-white border-black border-4 rounded-3xl flex flex-col justify-center items-center py-8 px-2">
        <p class="font-header text-5xl font-black text-black">{{ number || 0}}</p>
        <p class="font-header text-xl font-black text-black pt-4">{{description || "description"}}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "NumberCallout",
    props: {
        number: Number,
        description: String
    }
})
</script>