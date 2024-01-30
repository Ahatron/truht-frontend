import { defineStore } from "pinia";
import AuthService, { userAuth } from '@/services/auth.service';
import router from "@/router";
import useUserStore from "@/store/user.store";
import { ref } from "vue";
import useGlobalStore from "@/store/global";


const useAuthStore = defineStore('auth', () => {
  const showPassword = ref(false),
    showNickname = ref(false),
    loading = ref(false),
    errorMessage = ref(''),
    nickname = ref(''),
    userLogin = ref(''),
    password = ref(''),
    passwordRepeat = ref(''),
    selectTab = ref(0),
    loginLoading = ref(false),
    loginErrorMessage = ref('')

  const globalStore = useGlobalStore(),
    userStore = useUserStore()

  function reset() {
    showNickname.value = false;
    selectTab.value = 0;
    userLogin.value = '';
    password.value = '';
  }

  async function checkLogin() {
    loginLoading.value = true;
    const res = await AuthService.checkLogin({ userLogin: userLogin.value })

    if (res?.status === 409) {
      loginErrorMessage.value = res.data.message;
    }
    loginLoading.value = false;
  }



  async function register(userInput: userAuth) {
    await AuthService.register(userInput).then((res: any) => {
      if (res?.status >= 400) {
        errorMessage.value = res.data.message;
      } else {
        reset();
      }
    })
  }

  async function login(userInput: userAuth) {
    await AuthService.login(userInput).then((res: any) => {
      if (res?.status >= 400) {
        errorMessage.value = res.data.message;
      } else {
        console.log(res)
        userStore.setValues(res.data);

        router.replace('/home');
        globalStore.drawerActive = true;
      }
    })
  }

  function auth() {
    const userInput = {
      nickname: nickname.value,
      userLogin: userLogin.value,
      password: password.value,
    }
    console.log(userInput)
    loading.value = true;
    if (showNickname.value) {
      register(userInput);
    } else {
      login(userInput)
    }
    loading.value = false;
  }

  return {
    showPassword,
    showNickname,
    loading,
    errorMessage,
    nickname,
    userLogin,
    password,
    passwordRepeat,
    selectTab,
    loginLoading,
    loginErrorMessage,
    checkLogin,
    auth
  }
})

export default useAuthStore;