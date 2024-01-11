<script setup lang="ts">
//
import ChatList from "@/components/ChatList.vue";
</script>

<template>
  <v-navigation-drawer elevation="2"
    :permanent="true"
    :touchless="false">
    <ChatList></ChatList>
  </v-navigation-drawer>
</template>

