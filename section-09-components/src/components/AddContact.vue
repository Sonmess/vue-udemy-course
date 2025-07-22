<template>
  <div class="container border rounded m-2 p-2">
    <div class="text-center text-white">Add new contact</div>
    <form @submit.prevent="addContact">
      <div class="row">
        <div class="col-4">
          <input
            type="text"
            class="form-control"
            v-model="contact.name"
            placeholder="Enter name"
          />
        </div>

        <div class="col-4">
          <input
            type="text"
            class="form-control"
            v-model.number="contact.phone"
            placeholder="Enter phone"
          />
        </div>

        <div class="col-4">
          <input
            type="text"
            class="form-control"
            v-model="contact.email"
            placeholder="Enter email"
          />
        </div>
      </div>

      <div class="row">
        <div class="col-6 offset-3 p-2">
          <button type="submit" class="btn btn-secondary w-100">
            Add contact
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive, defineEmits } from "vue";

const contact = reactive({
  name: "",
  phone: "",
  email: "",
});

const emit = defineEmits(["contact-added"]);

const addContact = () => {
  console.log(contact);
  emit("contact-added", contact);
  contact.name = "";
  contact.phone = "";
  contact.email = "";
};
</script>
