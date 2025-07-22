<template>
  <div class="bg-info rounded p-2 m-1">
    <h1>Contact us</h1>
    <div class="row">
      <div class="col-9">
        <p>Email: {{ email }}</p>
        <p>Name: {{ name }}</p>
        <p>Phone: {{ phone }}</p>
      </div>

      <div class="col-3">
        <button
          @click="toggleFavorite(phone)"
          :class="[
            isFavorite ? 'btn-warning' : 'btn-success',
            'btn form-control',
          ]"
        >
          {{ isFavorite ? "Remove it from " : "Add to " }} favorite
        </button>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <LuckyNumber />
      </div>
    </div>

    <p class="text-center small" v-if="ownerName != ''">
      *This contact information belongs to {{ ownerName }}
    </p>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import LuckyNumber from "./LuckyNumber.vue";

const emit = defineEmits(["favoriteToggled"]);
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  ownerName: {
    type: String,
    required: false,
    default: "",
  },
  isFavorite: {
    type: Boolean,
    required: false,
    default: false,
  }
});
const email = ref("my-email@google.com");
const toggleFavorite = (phone) => {
  emit("favoriteToggled", { isFavorite: !props.isFavorite, phone });
};
</script>

<style scoped></style>
