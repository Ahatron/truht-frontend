<script setup lang="ts">
import ChatListItem from "@/components/ChatListItem.vue";

import { useChatStore } from "@/store/chat";

const chatsStore = useChatStore();


</script>

<template>
  <v-list class="h-100">
    <ChatListItem v-for="chat of chatsStore.chats"
      :key="chat.id"
      :chat="chat"></ChatListItem>
  </v-list>
</template>
