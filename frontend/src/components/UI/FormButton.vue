<template>
  <div class="d-flex w-100 justify-end mt-3">
    <v-btn color="accent"
      :loading="authStore.loading"
      @click="authStore.auth"
      size="large">{{ !authStore.showNickname ? 'Login' : 'Submit' }}
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import useAuthStore from '@/store/auth.store';

const authStore = useAuthStore();
</script>
