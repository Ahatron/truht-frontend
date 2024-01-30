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
          @click="openMedia(item.id)">
          <img-item v-if="item.value.type.startsWith('image/')"
            :src="item.src"
            cover />
          <div v-else
            class="d-flex align-center justify-center h-100 position-relative">
            <video class="w-100">
              <source :src="item.src" />
            </video>
            <v-btn color="primary"
              variant="flat"
              position="absolute"
              icon="mdi-play"
              :size="item.cols === 4 ? 30 : item.cols === 6 ? 40 : 50">
              <v-icon color="white" />
            </v-btn>
          </div>
          <close-btn v-if="mediaStore"
            @click.stop="mediaStore.removeItem(item.value)"
            class="ma-1"
            position="absolute"
            :size="item.cols === 4 ? 30 : item.cols === 6 ? 40 : 50"
            style=" right: 0; z-index: 9999;" />
        </v-card>

      </v-col>
    </v-row>
  </v-container>

  <watch-media v-model="watchMediaStore.isActive" />
</template>

<script setup lang="ts">
import ImgItem from "@/components/ImgItem.vue";
import CloseBtn from "@/components/UI/CloseBtn.vue";
import WatchMedia from "@/components/WatchMedia.vue";
import useWatchMedia, { Media } from "@/store/watch-media.store";
import { computed } from "vue";

const props = defineProps(['mediaStore', 'media']),
  watchMediaStore = useWatchMedia()

function openMedia(itemId: number) {
  watchMediaStore.isActive = true;
  watchMediaStore.media = finishedMedia.value;
  watchMediaStore.selectedId = itemId;
}


const finishedMedia = computed((): Media[] => {
  const media = props.media || props.mediaStore?.imagesAndVideos,
    colsVariants = [
      [12],
      [6, 6],
      [12, 6, 6],
      [6, 6, 6, 6],
      [12, 6, 6, 6, 6],
      [12, 6, 6, 4, 4, 4],
    ];
  console.log(media)

  if (media) {
    return media?.map((item: any, index: number) => {
      const mediaURL = window.URL.createObjectURL(item),
        colsVariant = colsVariants[media.length - 1];

      return { value: item, src: mediaURL, cols: colsVariant[index], id: index };
    });
  }

  return [];
});
</script>
