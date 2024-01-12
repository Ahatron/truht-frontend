<template>
  <v-navigation-drawer v-model="globalStore.drawerActive"
    :permanent="true"
    :rail="globalStore.drawerRail"
    @click="globalStore.drawerRail = false">
    <NavList></NavList>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import useGlobalStore from "@/store/global";
import NavList from "@/components/NavList.vue";

const globalStore = useGlobalStore();
</script>

