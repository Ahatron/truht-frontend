<template>
  <v-card color="grey-lighten-3"
    class="pa-2 mb-3">
    <div class="d-flex mx-3 mt-1">
      <post-avatar />
      <v-textarea v-model="createPostStore.text"
        variant="outlined"
        class="flex-column pt-0"
        counter
        elevation="0"
        placeholder="What is happening?!"
        :no-resize="true"
        auto-grow
        rows="1"></v-textarea>
    </div>
    <create-post-media-grid v-if="createPostStore.imagesAndVideos.length"
      v-model:imgsAndVideos="createPostStore.files" />
    <v-divider class="my-2"></v-divider>
    <create-post-actions />
    <v-snackbar variant="flat"
      color="red"
      v-model="createPostStore.snackbar"
      :timeout="3000">No more than six files</v-snackbar>

  </v-card>
</template>
<script setup lang="ts">
import PostAvatar from "@/components/PostAvatar.vue";
import CreatePostMediaGrid from "@/components/CreatePostMediaGrid.vue";
import CreatePostActions from "@/components/CreatePostActions.vue";
import useCreatePost from "@/store/create-post.store";

const createPostStore = useCreatePost()

console.log(createPostStore.imagesAndVideos);
</script>
