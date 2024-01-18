<template>
  <v-dialog style="background-color: rgba(0, 0, 0, 0.5)" transition="dialog-transition">
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="12" sm="8" md="6" lg="4" class="pa-0">
        <v-card
          elevation="10"
          color="black"
          class="d-flex flex-column justify-space-between"
          style="height: 90vh"
        >
          <div class="d-flex align-center mt-8 px-2">
            <v-btn
              @click="watchMediaStore.isActive = false"
              color="white"
              variant="tonal"
              icon="mdi-arrow-left"
            ></v-btn>
            <v-card-title class="w-75">
              {{ watchMediaStore.selectedName }}
            </v-card-title>
          </div>
          <v-window
            show-arrows="hover"
            class="h-100"
            v-model="watchMediaStore.selectedId"
          >
            <v-window-item
              class="h-100"
              v-for="item of watchMediaStore.media"
              :key="item.id"
              :value="item.id"
            >
              <div class="d-flex align-center justify-center h-100">
                <img-item
                  v-if="item.value.type.startsWith('image/')"
                  class="h-50"
                  :src="item.src"
                />
                <video v-else controls class="h-50">
                  <source :src="item.src" />
                </video>
              </div>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-dialog>
</template>
<script setup lang="ts">
import ImgItem from "@/components/ImgItem.vue";
import useWatchMedia from "@/store/watch-media.store";

const watchMediaStore = useWatchMedia();
</script>
