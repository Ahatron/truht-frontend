<script setup lang="ts">
import MsgListItem from "@/components/MsgListItem.vue";
import { useChatStore } from "@/store/chat";
import { ref, watchEffect } from "vue";

const chatStore = useChatStore(),
  messageList = ref(null);

watchEffect(() => {
  // const list = messageList.value;
  // if (list) {

  // }
});
</script>

<template>
  <v-list class="d-flex flex-column pa-2 h-100"
    ref="messageList">
    <v-spacer></v-spacer>
    <MsgListItem class="w-75"
      v-for="message of chatStore.selectedChat?.messages"
      :message="message"
      :key="message.date" />
  </v-list>
</template>

