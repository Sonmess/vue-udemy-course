<template>
  <NewCounter />

  <div class="container bg-black text pt-3">
    <h1>Hello world</h1>
    <div>{{ message }}</div>
    <hr />

    <LuckyNumberForm>
      <p class="pt-2">We have two versions for picking lucky number</p>
      <p>Click the button to toggle between the two versions</p>
      <hr />
      <template v-slot:learnSlot>
        <button @click="showMessage">What will we learn ?</button>
        <h4 class="text-success">{{ slotMessage }}</h4>
      </template>
    </LuckyNumberForm>

    <hr />

    <AddContact @contact-added="addNewContact($event)" />
    <div class="row">
      <div class="col-6">
        <label>Contact owner name</label>
        <input type="text" v-model="contactsOwner" />
        <br />
      </div>

      <div class="col-6">
        <label>Max lucky number</label>
        <input type="number" v-model.number="maxNumber" />
      </div>
    </div>
    <LuckyNumber />
    <div class="row">
      <div class="col-12" v-for="contact in contacts" :key="contact.name">
        <BaseContact
          :name="contact.name"
          :phone="contact.phone"
          :owner-name="contact.ownerName"
          :isFavorite="contact.isFavorite"
          @favorite-toggled="contact.isFavorite = toggleFavorite($event)"
        />
      </div>
    </div>
    <BaseContact name="Matej" :phone="123456" />
    <BaseContact name="Figliar" :phone="666777" :owner-name="contactsOwner" />
    <button-counter />
  </div>
</template>

<script>
import { reactive, ref, provide, onMounted, onUpdated } from "vue";
import BaseContact from "./components/BaseContact.vue";
import ButtonCounter from "./components/ButtonCounter.vue";
import AddContact from "./components/AddContact.vue";
import LuckyNumber from "./components/LuckyNumber.vue";
import LuckyNumberV2 from "./components/LuckyNumberV2.vue";
import LuckyNumberForm from "./components/LuckyNumberForm.vue";
import NewCounter from "./components/NewCounter.vue";

export default {
  components: {
    BaseContact,
    ButtonCounter,
    AddContact,
    LuckyNumber,
    LuckyNumberV2,
    LuckyNumberForm,
    NewCounter,
  },
  setup() {
    const message = "Hello vue";
    const contactsOwner = ref("Kekuan");
    const maxNumber = ref(100);
    provide("maxLuckyNumber", maxNumber);
    const slotMessage = ref("");

    const contacts = reactive([
      {
        name: "Matej",
        phone: 123456,
        ownerName: contactsOwner.value,
        isFavorite: false,
      },
      {
        name: "Kekuan",
        phone: 666777,
        ownerName: "",
        isFavorite: true,
      },
      {
        name: "Fero",
        phone: 876,
        ownerName: contactsOwner.value,
        isFavorite: false,
      },
    ]);

    const toggleFavorite = (e) => {
      console.log(e);
      return e.isFavorite;
    };

    const addNewContact = (newContact) => {
      contacts.push({
        ...newContact,
        ownerName: contactsOwner.value,
        isFavorite: false,
      });
    };

    const showMessage = () => {
      slotMessage.value = "We will learn how to use slots!";
    };

    onMounted(() => {
      console.log("onMounted - App.vue");
    });

    onUpdated(() => {
      console.log("onUpdated - ButtonCounter.vue");
    });

    return {
      message,
      contactsOwner,
      contacts,
      toggleFavorite,
      addNewContact,
      maxNumber,
      slotMessage,
      showMessage,
    };
  },
};
</script>
