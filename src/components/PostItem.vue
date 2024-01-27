<template>
  <v-card color="grey-lighten-3"
    v-for="post of postStore.posts"
    :key="post.id"
    class="pa-2 mb-3">

    <div class="d-flex align-center px-3 mt-1">
      <post-avatar :avatar="post.User.avatar" />
      <v-card-title class="pa-0 mr-2">{{ post.User.nickname }}</v-card-title>
      <v-card-subtitle class="pa-0">{{ post.createdAt }}</v-card-subtitle>
    </div>

    <v-card-text class="pa-2 my-1 mx-2">{{ post.text }}</v-card-text>

    <media-grid v-if="post.Files.length" />

    <v-divider class="my-2"></v-divider>

    <v-card-actions class="pa-0 justify-space-between">
      <v-btn prepend-icon="mdi-heart-outline"
        color="red">{{ post.likes }}</v-btn>
      <v-btn prepend-icon="mdi-comment-outline"
        color="primary">{{ post.comments }}</v-btn>
      <v-btn prepend-icon="mdi-repeat"
        color="green">{{ post.reposts }}</v-btn>
      <v-btn prepend-icon="mdi-eye"
        color="primary">{{ post.views }}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import PostAvatar from "@/components/PostAvatar.vue";
import MediaGrid from "@/components/MediaGrid.vue";
import usePostStore from "@/store/post.store";
import { onBeforeMount } from "vue";

const postStore = usePostStore();

onBeforeMount(() => {
  postStore.getPosts()
})
</script>
