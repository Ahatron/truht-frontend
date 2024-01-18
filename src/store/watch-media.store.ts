import { defineStore } from "pinia";
import { computed, ref } from "vue";

const useWatchMedia = defineStore("watch-media", () => {
  const isActive = ref(false),
    media = ref<Media[]>([{value: {name: '', type: ''}, id: 0, src: ''}]),
    selectedId = ref(0);
  
  const selectedName = computed(() => {
    return media.value[selectedId.value].value.name;
  })

  return { isActive, media, selectedId, selectedName };
});

export default useWatchMedia;



interface Media {
  value: File | {name: string, type: string};
  id: number;
  src: string;
  cols?: number;
}

export { Media };
