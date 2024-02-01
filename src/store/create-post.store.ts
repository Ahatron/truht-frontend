import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";
import { useDisplay } from "vuetify/lib/framework.mjs";
import postService from '@/services/post.service'
import usePostStore from "./post.store";

const useCreatePost = defineStore("crate-post", () => {
  const btnSize = ref(40),
    text = ref(''),
    files = ref<File[]>([]),
    mediaCount = 6,
    snackbar = ref(false),
    { mobile } = useDisplay(),
    postStore = usePostStore();

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

  function removeItem(itemName: string) {
    files.value = files.value.filter(
      ({ name }) => name !== itemName
    );
  }


  async function post() {
    console.log(files.value)
    await postService.post({ text: text.value, files: files.value })
    files.value = [];
    text.value = '';
    postStore.getPosts();
  }

  return {
    btnSize,
    files,
    openFileInput,
    removeItem,
    post,
    text,
    snackbar,
    imagesAndVideos,
  };
});

export default useCreatePost;
