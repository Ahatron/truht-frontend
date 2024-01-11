<template>
  <v-card class="pa-2 mb-3">
    <div class="d-flex mx-3 mt-1">
      <PostAvatar />
      <v-textarea class="flex-column pt-0"
        counter
        elevation="0"
        placeholder="What is happening?!"
        :no-resize="true"
        auto-grow
        rows='1'></v-textarea>

    </div>
    <ImgAndVideoGalery v-model:content="createPostStore" />
    <v-divider class="my-2"></v-divider>
    <CreatePostActions />
  </v-card>
</template>
<script setup lang="ts">
import PostAvatar from '@/components/PostAvatar.vue';
import ImgAndVideoGalery from './ImgAndVideoGalery.vue';
import CreatePostActions from "@/components/CreatePostActions.vue"
import useCreatePost from '@/store/create-post.store';

const createPostStore = useCreatePost()
</script>