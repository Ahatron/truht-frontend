import { defineStore } from "pinia";
import { ref } from "vue";

const useGlobalStore = defineStore('global', () => {
  const drawerActive = ref(true),
    drawerRail = ref(true),
    snackbarMessage = ref('')

  return { drawerActive, drawerRail, snackbarMessage };
})

export default useGlobalStore;