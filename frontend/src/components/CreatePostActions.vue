<template>
  <v-card-actions class="pa-0 mr-2">
    <input @change="createPostStore.handleFileChange"
      ref="fileInput"
      class="d-none"
      type="file"
      multiple>
    <v-btn @click="createPostStore.openFileInput(fileInput)"
      :size="btnSize"
      icon="mdi-paperclip"></v-btn>
    <v-btn :size="btnSize"
      icon="mdi-ballot"></v-btn>
    <v-btn :size="btnSize"
      icon="mdi-emoticon"></v-btn>
    <v-btn :size="btnSize"
      icon="mdi-calendar-clock"></v-btn>
    <v-btn :size="btnSize"
      icon="mdi-map-marker"
      class="mr-auto"></v-btn>
    <v-btn variant="flat"
      color="accent">Post</v-btn>
  </v-card-actions>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import useCreatePost from '@/store/create-post.store';

const createPostStore = useCreatePost(),
  fileInput = ref<HTMLInputElement>(),
  { btnSize } = storeToRefs(createPostStore);


</script>