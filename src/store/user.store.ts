import { defineStore } from 'pinia';
import { ref } from "vue";
import userService from '@/services/user.service';
import router from '@/router';

interface UserData {
  nickname: string,
  userLogin: string,
  avatars: string[],
  userId: number,
  createdAt: string,
  updatedAt: string,
  lastLogin: string,
  lastLogout: string,
}

const useUserStore = defineStore('user', () => {
  const nickname = ref(''),
    userLogin = ref(''),
    avatars = ref(['/aristotel.jpg']),
    userId = ref(0),
    createdAt = ref(''),
    lastLogin = ref('');

  function setValues(res: UserData) {
    nickname.value = res.nickname;
    userLogin.value = res.userLogin;
    userId.value = res.userId;
    createdAt.value = res.createdAt;
    lastLogin.value = res.lastLogin;
    avatars.value = res.avatars ? res.avatars : ['/aristotel.jpg'];
  }

  function clear() {
    nickname.value = '';
    userLogin.value = '';
    userId.value = 0;
    createdAt.value = '';
    lastLogin.value = '';
  }

  async function getUserData() {

    const res = await userService.getUserData()

    setValues(res);
  }


  async function checkUserInSystem() {
    try {
      await userService.checkUserInSystem();
      router.replace('/home')
    } catch (e) {
      router.replace('/auth')
    }

  }

  return {
    nickname,
    userLogin,
    avatars,
    userId,
    createdAt,
    lastLogin,
    getUserData,
    setValues,
    checkUserInSystem,
    clear
  };
});

export default useUserStore;