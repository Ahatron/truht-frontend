<template>
  <v-tabs color="secondary"
    v-model:model-value="authStore.selectTab"
    :disabled="authStore.loading"
    class="mb-5"
    fixed-tabs>
    <v-tab value="1"
      @click="authStore.showNickname = false; authStore.loginErrorMessage = ''; authStore.selectTab = 0;">
      Login
    </v-tab>
    <v-tab value="2"
      @click="authStore.showNickname = true; authStore.loginErrorMessage = ''; authStore.selectTab = 1">
      Registration
    </v-tab>
  </v-tabs>
</template>

<script setup lang="ts">
import useAuthStore from '@/store/auth.store';

const authStore = useAuthStore();
</script>