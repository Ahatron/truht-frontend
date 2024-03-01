<template>
  <v-container>
    <v-row>
      <v-col position="relative"
        v-for="item of finishedMedia"
        :key="item.id"
        :cols="item.cols"
        class="pa-1">
        <v-card color="black"
          class="d-flex"
          @click="watchMediaStore.showMedia(finishedMedia, item.id)">
          <v-responsive aspect-ratio="1.78">
            <img-item v-if="item.type.startsWith('image/')"
              :lazy-src="item.src"
              :src="item.src"
              cover />
            <div v-else
              class="d-flex align-center justify-center h-100 position-relative">
              <video class="w-100">
                <source :lazy-src="item.src"
                  :src="item.src" />
              </video>
              <v-btn color="primary"
                variant="flat"
                position="absolute"
                icon="mdi-play"
                :size="item.cols === 4 ? 30 : item.cols === 6 ? 40 : 50">
                <v-icon color="white" />
              </v-btn>
            </div>
          </v-responsive>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import ImgItem from "@/components/ImgItem.vue";
import useWatchMedia, { Media } from "@/store/watch-media.store";
import { onMounted, ref } from "vue";
import fileService from "@/services/file.service";


interface smallMedia {
  id: string;
  filename: string;
}

const props = defineProps<{ media: smallMedia[] }>(),
  watchMediaStore = useWatchMedia(),
  finishedMedia = ref<Media[]>([]),
  colsVariants = [
    [12],
    [6, 6],
    [12, 6, 6],
    [6, 6, 6, 6],
    [12, 6, 6, 6, 6],
    [12, 6, 6, 4, 4, 4],
  ];



async function handledMedia(media: smallMedia[]): Promise<Media[]> {
  console.log(media)
  if (media.length) {
    const result = [],
      colsVariant = colsVariants[media.length - 1];

    for (let i = 0; i < media.length; i++) {
      const { id, filename } = media[i],
        file: Blob = await fileService.getFile(id),
        mediaURL = URL.createObjectURL(file)

      console.log(file)
      result.push({ type: file.type, name: filename, src: mediaURL, id: i, cols: colsVariant[i], });
    }
    return result;
  }

  return [];
}

onMounted(() => {
  handledMedia(props.media).then(res => {
    finishedMedia.value = res;
    console.log(res)

  });
})
</script>
