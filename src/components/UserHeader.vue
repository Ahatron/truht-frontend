<script setup lang="ts">
defineProps({
  size: {
    type: Number,
    default: 40,
  },
  image: {
    type: String,
    default: '/aristotel.jpg',
  }
})
</script>

<template>
  <div class="w-100 bg-cyan rounded-b-xl"
    :style="{ height: `${size * 1.5}px`, 'margin-bottom': `${size}px` }">
    <v-img class="h-100 rounded-b-xl"
      :height="size"
      :cover="true"
      :src="image">
    </v-img>
    <slot></slot>
  </div>
</template>
