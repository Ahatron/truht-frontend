import { defineStore } from "pinia";
import { ref } from "vue";

const useGlobalStore = defineStore('global', () => {
  const drawerActive = ref(true),
    drawerRail = ref(true);

  return { drawerActive, drawerRail };
})

export default useGlobalStore;