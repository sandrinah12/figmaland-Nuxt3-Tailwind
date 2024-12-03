<template>
    <button class="px-7 pb-2 py-1 lg:px-16 lg:py-2 lg:pb-4 text-white hover:bg-blue-700 transition rounded-full"
    :style="{backgroundColor: background, color:textColor, width:size, marginLeft:left}">
        {{ text }}
    </button>
</template>$

<script setup lang="ts">
    defineProps( {
        text: {
            type: String,
            default: 'Try For Free',
        },
        background: {
            type: String,
            default: '#2091f9',
        },
        textColor : {
            type: String,
            default: '#ffffff',
        },
        size: {
            type: String,
            default: 'lg',
        },
        left: {
            type: String,
            default: '0',
        }
    },)
</script>