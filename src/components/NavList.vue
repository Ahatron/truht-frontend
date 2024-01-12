<script setup lang="ts">
import authService from "@/services/auth.service";
import router from "@/router";
import useUserStore from "@/store/user.store";
import useGlobalStore from "@/store/global";
import { useTheme } from "vuetify";
import { onBeforeMount } from "vue";
import NavListItem from '@/components/NavListItem.vue'

const userStore = useUserStore(),
  theme = useTheme(),
  globalStore = useGlobalStore();

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

function onLogout() {
  authService.logout().then(() => {
    router.replace('auth');
    userStore.clear();
  })
}

onBeforeMount(() => {
  userStore.getUserData()
})
</script>

<template>
  <v-list>
    <v-list-item class="pl-1">
      <template v-slot:append>
        <v-btn class="mr-6"
          @click.stop="toggleTheme"
          variant="text"
          icon="mdi-theme-light-dark"></v-btn>
        <v-btn variant="text"
          icon="mdi-chevron-left"
          @click.stop="globalStore.drawerRail = !globalStore.drawerRail"></v-btn>
      </template>
    </v-list-item>
    <NavListItem to="/user"
      class="py-3"
      :prepend-avatar="userStore.avatars[0]"
      color="primary"
      :rounded="true"
      :link="true">
      <v-list-item-title><b>{{ userStore.nickname }}</b></v-list-item-title>

    </NavListItem>

    <v-divider class=""></v-divider>

    <NavListItem to="/home"
      prepend-icon="mdi-home-circle"
      title="Home"
      color="primary"
      class="rounded-xl">

    </NavListItem>
    <NavListItem to="/search"
      prepend-icon="mdi-magnify"
      title="Search"
      color="primary">

    </NavListItem>
    <NavListItem to="/chats"
      prepend-icon="mdi-chat"
      title="Chat"
      color="primary">

    </NavListItem>

    <v-divider></v-divider>

    <v-list-item>
      <template v-slot:append>
        <v-btn class="ml-10"
          @click="onLogout(); globalStore.drawerActive = false"
          to="/auth"
          color="error"
          variant="tonal"
          append-icon="mdi-rotate-180 mdi-logout">Log out
        </v-btn>
      </template>
    </v-list-item>
  </v-list>
</template>