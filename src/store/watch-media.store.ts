import { defineStore } from "pinia";
import { computed, ref } from "vue";

const useWatchMedia = defineStore("watch-media", () => {
  const isActive = ref(false),
    media = ref<Media[]>([]),
    selectedId = ref(0);

  const selectedName = computed((): string => {
    return media.value[selectedId.value]?.name || '';
  })

  function showMedia(mediaData: any, mediaId: number) {
    isActive.value = true;
    media.value = mediaData;
    selectedId.value = mediaId;
  }
  return { isActive, media, selectedId, selectedName, showMedia };
});

export default useWatchMedia;



interface Media {
  type: string,
  name: string,
  src: string,
  id: number,
  cols?: number
}

export { Media };
