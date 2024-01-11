<template>
  <div>
    <v-expand-transition>
      <MyInput required
        counter="32"
        v-model.trim="nickname"
        v-if="showNickname"
        label="Nickname" />
    </v-expand-transition>

    <MyInput @blur="showNickname && authStore.checkLogin()"
      @focus="loginErrorMessage = ''"
      :error-messages="loginErrorMessage"
      update:error=""
      :disabled="loginLoading"
      required
      counter="32"
      v-model.trim="userLogin"
      label="Login"
      aria-autocomplete="both" />

    <MyInput required
      counter="32"
      v-model.trim="password"
      :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
      :type="showPassword ? 'text' : 'password'"
      placeholder="Enter your password"
      prepend-inner-icon="mdi-lock-outline"
      @click:append-inner="showPassword = !showPassword" />

    <v-expand-transition>
      <MyInput required
        counter="32"
        v-if="showNickname"
        v-model.trim="passwordRepeat"
        :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
        :type="showPassword ? 'text' : 'password'"
        placeholder="Retry your password please"
        prepend-inner-icon="mdi-lock-outline"
        :rules="[() => password === passwordRepeat || 'Passwords don\'t match']"
        @click:append-inner="showPassword = !showPassword" />
    </v-expand-transition>
  </div>
</template>

<script setup lang="ts">
import useAuthStore from '@/store/auth.store';
import { storeToRefs } from 'pinia';
import MyInput from '@/components/UI/MyInput.vue';


const authStore = useAuthStore(),
  {
    showPassword,
    showNickname,
    nickname,
    userLogin,
    password,
    passwordRepeat,
    loginLoading,
    loginErrorMessage
  } = storeToRefs(authStore);
</script>