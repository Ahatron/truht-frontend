import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";
import { useDisplay } from "vuetify/lib/framework.mjs";
import postService from '@/services/post.service'

const useCreatePost = defineStore("crate-post", () => {
  const btnSize = ref(40),
    text = ref(''),
    files = ref<File[]>([]),
    mediaCount = 6,
    snackbar = ref(false),
    { mobile } = useDisplay()

  watch(mobile, (_, current) => {
    if (!current) {
      btnSize.value = 30;
    } else btnSize.value = 40;
  });

  watch(() => files.value.length, (length: number) => {
    if (length > mediaCount) {
      snackbar.value = true;
      files.value = files.value.slice(0, mediaCount);
    } else snackbar.value = false;
  })


  function openFileInput(fileInput: HTMLInputElement | undefined) {
    if (fileInput) {
      fileInput.click();
    }
  }


  const imagesAndVideos = computed((): File[] => {
    return files.value.filter(
      ({ type }) => type.startsWith("image/") || type.startsWith("video/")
    ).slice(0, 6)
  });

  function removeItem(itemForRemove: File) {
    files.value = files.value.filter(
      (item: File) => item !== itemForRemove
    );
  }

  function reset() {
    files.value = []
  }

  async function post() {
    await postService.post({ text: text.value, files: files.value })
  }

  return {
    btnSize,
    files,
    openFileInput,
    removeItem,
    reset,
    post,
    text,
    snackbar,
    imagesAndVideos,
  };
});

export default useCreatePost;
