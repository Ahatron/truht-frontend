<template>
  <v-container>
    <v-row no-gutters>
      <v-col v-for="item of finishedContent"
        :key="item.id"
        :cols="item.cols">
        <ImgItem v-if="item.value.type.startsWith('image/')"
          :src="item.src">
          <CloseBtn @click="content?.removeItem(item.value)" />
        </ImgItem>

        <video class="w-100 rounded">
          <source :src="item.src">

        </video>

      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import ImgItem from '@/components/ImgItem.vue';
import CloseBtn from '@/components/UI/CloseBtn.vue'
import { computed } from 'vue'

const props = defineProps({
  content: Object
});

const finishedContent = computed(() => {
  const content = props.content?.imagesAndVideos,
    colsVariants = [[12], [6, 6], [12, 6, 6], [6, 6, 6, 6], [12, 6, 6, 6, 6], [12, 6, 6, 4, 4, 4]];
  if (content) {
    return content?.map((item: any, index: number) => {
      const contentURL = window.URL.createObjectURL(item),
        colsVariant = colsVariants[content.length - 1]

      return { value: item, src: contentURL, cols: colsVariant[index], id: index }
    })
  }

  return [];
})



</script>