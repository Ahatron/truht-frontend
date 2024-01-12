<script setup lang="ts">

import { nextTick, ref } from "vue";
import { useChatStore } from "@/store/chat";
import useUserStore from "@/store/user.store";
import { postMessage } from "@/services/chats";

const message = ref(''),
  rules = ref([
    (v: String) => v.length <= 1000 || 'Сообщение не должно превышать 1000 символов'
  ]),
  chatStore = useChatStore(),
  userStore = useUserStore()

function addMessage() {
  message.value.trim();

  const messageInfo = {
    chatId: chatStore.selectedId,
    message: {
      userAvatar: userStore.avatars[0],
      nickname: userStore.nickname,
      date: new Date().toJSON(),
      value: message.value,
      isUserOwn: true
    }
  }

  postMessage(messageInfo);

  chatStore.selectedChat?.messages.push(messageInfo.message)

  message.value = '';

  scrollEnd();
}

function scrollEnd() {
  const messageList = document.body.querySelector('.v-main > .v-list');

  nextTick(() => {
    if (messageList) {
      messageList.scrollTop = messageList.scrollHeight;
    }
  });
}
</script>

<template>
  <v-app-bar class="border-t"
    name="message-input"
    elevation="4"
    height="100"
    location="bottom"
    color="tertiary">
    <v-textarea v-model="message"
      :rules="rules"
      class="pa-0"
      no-resize
      rows="2"
      variant="solo"
      placeholder="Enter message"
      rounded="xl"
      :focused="true">
      <template v-slot:append>

        <v-btn :disabled="!message.trim()"
          @click="addMessage()"
          variant="tonal"
          icon="mdi-send"></v-btn>
      </template>
    </v-textarea>
  </v-app-bar>
</template>
