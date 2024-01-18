import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";
import { useDisplay } from "vuetify/lib/framework.mjs";

const useCreatePost = defineStore("crate-post", () => {
  const btnSize = ref(40),
    selectedFiles = ref<File[]>([]),
    mediaCount = 6,
    snackbar = ref(false),
    { mobile } = useDisplay()

  watch(mobile, (_, current) => {
    if (!current) {
      btnSize.value = 30;
    } else btnSize.value = 40;
  });


  function openFileInput(fileInput: HTMLInputElement | undefined) {
    if (fileInput) {
      fileInput.click();
    }
  }

  function handleFileChange(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    const files = fileInput.files;

    if (files) {
      console.log(files)
      if (files?.length > mediaCount || selectedFiles.value.length >= 6) {
        snackbar.value = true;
      } else {
        for (let i = 0; i < files.length; i++) {
          selectedFiles.value.push(files[i]);
        }
        snackbar.value = false
      }
    }

  }

  const imagesAndVideos = computed((): File[] => {
    return selectedFiles.value.filter(
      ({ type }) => type.startsWith("image/") || type.startsWith("video/")
    )
  });

  function removeItem(itemForRemove: File) {
    selectedFiles.value = selectedFiles.value.filter(
      (item: File) => item !== itemForRemove
    );
  }

  function reset() {
    selectedFiles.value = []
  }

  return {
    btnSize,
    selectedFiles,
    openFileInput,
    handleFileChange,
    removeItem,
    reset,
    snackbar,
    imagesAndVideos,
  };
});

export default useCreatePost;
