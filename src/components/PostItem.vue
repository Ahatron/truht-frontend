<template>
  <v-card color="grey-lighten-3"
    class="pt-1 px-2 mb-3">

    <div class="d-flex align-center pl-4 mt-1 mb-3 ">
      <div class="d-flex align-center mt-3">
        <post-avatar :avatar="post.User.avatar" />
        <v-card-title class="pa-0 mr-3">{{ post.User.nickname }}</v-card-title>
        <v-card-subtitle class="pa-0">{{ getFriendlyDate(post.createdAt) }}</v-card-subtitle>
      </div>

      <v-btn class="ml-auto"
        icon="mdi-dots-vertical"
        variant="text"></v-btn>
    </div>

    <v-divider v-if="post?.text"
      class="my-1"></v-divider>

    <v-card-text v-if="post?.text"
      class="pa-2 mb-1 mx-2">{{ post.text }}</v-card-text>

    <v-divider v-if="post.Files.length"
      class="my-1"></v-divider>

    <media-grid v-if="post.Files.length"
      :media="post.Files" />

    <v-divider class="my-1"></v-divider>

    <v-card-actions class="pa-0 justify-space-between">
      <v-btn @click="postService.likeToggle(post.id)"
        prepend-icon="mdi-heart-outline"
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
import getFriendlyDate from "@/utils/frendlyDate";
import postService from "@/services/post.service";
import { Post } from "@/store/post.store";

defineProps<{ post: Post }>()
</script>
