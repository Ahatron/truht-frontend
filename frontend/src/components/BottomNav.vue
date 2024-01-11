<script setup lang="ts">
import { ref } from "vue";
import NavDrawer from "@/components/NavDrawer.vue";

const drawer = ref(false)
</script>

<template>
  <v-bottom-navigation class="">
    <v-btn to="/home"
      icon="mdi-home">
    </v-btn>
    <v-btn to="/search"
      icon="mdi-magnify">
    </v-btn>
    <v-btn to="/chats"
      icon="mdi-chat"></v-btn>
    <v-btn @click="drawer = !drawer"
      icon="mdi-dots-horizontal">
    </v-btn>
    <v-btn icon="mdi-home-account">
    </v-btn>
  </v-bottom-navigation>
  <NavDrawer class="py-2"
    v-model="drawer"
    temporary />
</template>
