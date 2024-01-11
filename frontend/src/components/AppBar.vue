<template>
  <v-app-bar :elevation="3"
    color="primary"
    class="px-2">
    <v-btn class="px-0 mr-5 ml-0"
      v-if="mobile && !chats.drawerActive"
      @click="chats.drawerActive = true"
      width="40px"
      height="40px"
      icon="mdi-arrow-bottom-left mdi-rotate-45">
    </v-btn>

    <v-avatar class="mr-3"
      color="black">
      <v-img v-if="true"
        :src="chats.selectedChat?.image"
        alt="chat image" />
      <v-icon v-else>mdi-chat</v-icon>
    </v-avatar>

    <p class="text-no-wrap w-66 overflow-hidden"
      style="text-overflow: ellipsis">{{ chats.selectedChat?.title }}</p>

  </v-app-bar>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify';
import { useChatStore } from "@/store/chat";

const chats = useChatStore(),
  { mobile } = useDisplay();


</script>