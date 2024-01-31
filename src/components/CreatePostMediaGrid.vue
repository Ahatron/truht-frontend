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
          <img-item v-if="item.type.startsWith('image/')"
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
          <close-btn @click.stop="createPostStore.removeItem(item.name)"
            class="ma-1"
            position="absolute"
            :size="item.cols === 4 ? 30 : item.cols === 6 ? 40 : 50"
            style=" right: 0; z-index: 9999;" />
        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import ImgItem from "@/components/ImgItem.vue";
import CloseBtn from "@/components/UI/CloseBtn.vue";
import useWatchMedia, { Media } from "@/store/watch-media.store";
import useCreatePost from "@/store/create-post.store"
import { computed } from "vue";

const watchMediaStore = useWatchMedia(),
  createPostStore = useCreatePost(),
  colsVariants = [
    [12],
    [6, 6],
    [12, 6, 6],
    [6, 6, 6, 6],
    [12, 6, 6, 6, 6],
    [12, 6, 6, 4, 4, 4],
  ];

const finishedMedia = computed((): Media[] => {
  const media = createPostStore.files;

  if (media?.length) {
    return media?.map((item: any, index: number) => {
      const mediaURL = URL.createObjectURL(item),
        colsVariant = colsVariants[media.length - 1];

      return { name: item.name, type: item.type, src: mediaURL, cols: colsVariant[index], id: index };
    });
  }

  return [];
});
</script>
