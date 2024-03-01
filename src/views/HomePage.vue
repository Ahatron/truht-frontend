<template>
  <v-container color="background"
    class="">
    <v-row>
      <v-spacer></v-spacer>
      <!-- вместо xs существует cols -->
      <v-col class="pa-0"
        cols="12"
        sm="9"
        md="7"
        lg="5">
        <CreatePost />
        <PostItem v-for="post of postStore.posts"
          :key="post.id"
          :post="post" />
      </v-col>
      <v-spacer></v-spacer>
    </v-row>

  </v-container>
</template>
<script setup lang="ts">
import CreatePost from "@/components/CreatePost.vue";
import PostItem from "@/components/PostItem.vue";
import usePostStore from "@/store/post.store";
import { onMounted } from "vue";

const postStore = usePostStore();

onMounted(async () => {
  await postStore.getPosts();
})
</script>
