<template>
  <div class="d-flex flex-column align-center">
    <v-avatar name="avatar"
      :style="styles"
      class="mb-2"
      :size="size"
      color="black">
      <v-img v-if="true"
        :src="userStore.avatars[0]"
        alt="user avatar image"
        :cover="true" />
      <v-icon :size="size"
        v-else>mdi-account
      </v-icon>
    </v-avatar>
    <p :class="header">{{ userStore.nickname }}</p>
  </div>
</template>

<script setup lang="ts">
import useUserStore from "@/store/user.store";
import { onBeforeMount } from "vue";

defineProps({ size: Number, header: String, styles: Object });

const userStore = useUserStore();

onBeforeMount(() => {
  userStore.getUserData()
})
</script>

