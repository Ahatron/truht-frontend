<template>
  <v-app>
    <BottomNav v-if="chatStore.drawerActive && mobile"></BottomNav>
    <NavDrawer v-if="!mobile"></NavDrawer>
    <v-main>
      <router-view class=""></router-view>

    </v-main>
    <v-footer class="d-none"
      color="primary">
      All rights is protected
    </v-footer>
    <watch-media v-model="watchMediaStore.isActive" />

  </v-app>
</template>

<script setup lang="ts">
// import AppBar from '@/components/AppBar.vue';
import BottomNav from "@/components/BottomNav.vue";
import { useChatStore } from "@/store/chat";
import { useDisplay } from "vuetify";
import NavDrawer from "@/components/NavDrawer.vue";
// import useUserStore from "@/store/user.store"
import { onBeforeMount } from "vue";
import router from '@/router';
import WatchMedia from "@/components/WatchMedia.vue";
import useWatchMedia from "@/store/watch-media.store";

const watchMediaStore = useWatchMedia()



const
  // userStore = useUserStore(),
  chatStore = useChatStore(),
  { mobile } = useDisplay();


onBeforeMount(() => {
  // userStore.checkUserInSystem()
  console.info('current route is:', router.currentRoute.value.path)

})

</script>

<style >
/* Общие стили для элемента прокрутки */
body::-webkit-scrollbar {
  width: 12px;

  /* Ширина элемента прокрутки */
}

/* Стили ползунка (бегунка) */
body::-webkit-scrollbar-thumb {
  background-color: #888;
  /* Цвет ползунка */
  border-radius: 6px;
  /* Скругление углов ползунка */
}

/* Стили фона элемента прокрутки */
body::-webkit-scrollbar-track {
  background-color: #e0e0e0;
  /* Цвет фона элемента прокрутки */
  /* Скругление углов фона элемента прокрутки */
}

/* Стили ползунка (бегунка) при наведении */
body::-webkit-scrollbar-thumb:hover {
  background-color: #555;
  /* Цвет ползунка при наведении */
}

/* Стили фона элемента прокрутки при наведении */
body::-webkit-scrollbar-track:hover {
  background-color: #ccc;
  /* Цвет фона элемента прокрутки при наведении */
}
</style>

