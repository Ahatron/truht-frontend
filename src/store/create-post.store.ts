import { defineStore } from "pinia";
import { computed, ref, watch } from 'vue'
import { useDisplay } from 'vuetify/lib/framework.mjs';


const useCreatePost = defineStore('crate-store', () => {
  const btnSize = ref(40),
    selectedFiles = ref<File[]>([]),
    { mobile } = useDisplay()

  watch(mobile, (_, current) => {
    if (!current) {
      btnSize.value = 30;
    } else btnSize.value = 40;
  })


  function openFileInput(fileInput: HTMLInputElement | undefined) {
    if (fileInput) {
      fileInput.click()
    }
  }

  function handleFileChange(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    const files = fileInput.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        selectedFiles.value.push(files[i]);
      }
    }
  }

  const imagesAndVideos = computed(() => {
    return selectedFiles.value.filter(({ type }) =>
      type.startsWith('image/') || type.startsWith('video/'))
  })

  function removeItem(itemForRemove: File) {
    selectedFiles.value = selectedFiles.value.filter((item: File) => item !== itemForRemove)
  }

  return {
    btnSize, selectedFiles, openFileInput, handleFileChange, removeItem, imagesAndVideos
  }
})

export default useCreatePost;