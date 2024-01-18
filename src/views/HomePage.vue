<template>
  <v-container color="background">
    <v-row>
      <v-spacer></v-spacer>
      <!-- вместо xs существует cols -->
      <v-col cols="12" sm="9" md="7" lg="5">
        <CreatePost />
        <PostListItem />
        <PostListItem />
        <PostListItem />
        <PostListItem />
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
import CreatePost from "@/components/CreatePost.vue";

import PostListItem from "@/components/PostListItem.vue";
</script>
