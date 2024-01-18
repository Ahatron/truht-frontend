<template>
  <v-card class="pa-2 mb-3">
    <div class="d-flex align-center px-3 mt-1">
      <post-avatar />
      <v-card-title class="pa-0 mr-2">lester</v-card-title>
      <v-card-subtitle class="pa-0">Jan 1</v-card-subtitle>
    </div>
    <v-card-text class="pa-2 mb-1"
      >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus saepe magnam
      maxime? Consequatur labore praesentium, debitis pariatur consequuntur eligendi
      veritatis!</v-card-text
    >
    <media-grid v-if="media" />
    <v-divider class="my-2"></v-divider>
    <v-card-actions class="pa-0 justify-space-around">
      <v-btn prepend-icon="mdi-heart-outline" color="red">999</v-btn>
      <v-btn prepend-icon="mdi-comment-outline" color="primary">999</v-btn>
      <v-btn prepend-icon="mdi-repeat" color="primary">999</v-btn>
      <v-btn prepend-icon="mdi-eye" color="primary">999</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import PostAvatar from "@/components/PostAvatar.vue";
import MediaGrid from "@/components/MediaGrid.vue";
import { ref } from "vue";

const media = ref(null);
</script>
