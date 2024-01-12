<template>
  <v-list-item @click="chatStore.selectedId = chat.id;
  chatStore.drawerActive = false"
    :to="{ name: 'chat', params: { id: chat.id } }"
    color="primary"
    class="d-flex py-3 px-3 py-0"
    :prepend-avatar="chat.image"
    :title="chat.title">
  </v-list-item>
  <v-divider></v-divider>
</template>
<script setup lang='ts'>

import { useChatStore, Chat } from "@/store/chat";

const chatStore = useChatStore()
defineProps<{ chat: Chat }>();
</script>
