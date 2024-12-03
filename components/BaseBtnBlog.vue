<template>
    <NuxtLink :to = "to" > {{ label }} </NuxtLink>
</template>

<script setup lang="ts">
    // defineProps<{
    //     to?: string;
    //     label?: string
    // }>();

    defineProps({
        to: {
            type: String,
            required: true
        },
        label: {
            type: String,
            default: 'Link'
        }
    })
</script>

