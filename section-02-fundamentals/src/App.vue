<template>
  <div class="bg-info p-3 rounded m-3">
    <h1 class="h1 text-center">Vue.js - MovieOPedia</h1>
    <hr />

    <div>
      <ul>
        <li v-for="error in errorList" class="text-danger">{{ error }}</li>
      </ul>
    </div>

    <form v-on:submit.prevent="handleSubmit">
      <div class="input-group mb-3">
        <span class="input-group-text">Email</span>
        <input type="text" class="form-control" v-model.trim="formObj.email" />
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text">Name</span>
        <input type="text" class="form-control" v-model.trim="formObj.name" v-on:blur="validateName()" />
        <div v-if="!validateObj.isNameValid" class="text-danger mt-3">Name should be atleast 3 characters long!</div>
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text">Phone</span>
        <input type="number" class="form-control" v-model.number="formObj.phone" />
      </div>

      <div class="border p-1">
        <label class="form-label">Gender</label><br/>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" v-model="formObj.gender" value="male" name="inlineRadioOptions">Male</input>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" v-model="formObj.gender" value="female" name="inlineRadioOptions">Female</input>
        </div>

        <br/>
        <hr/>

        <select id="gender" v-model="formObj.gender" class="form-select">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div class="input-group mb-3">
        <input
          id="subscribe"
          name="subscribe"
          type="checkbox"
          class="form-check-input"
          v-model="formObj.subscribe"
        />
        <label for="subscribe" class="form-check-label"> &nbsp; Subscribe to newsletter</label>
      </div>

      <div class="text-center pb-3">
        <button class="btn btn-secondary m-2 w-50">Submit</button>
      </div>

      <div class="border rounded p-3 w-100 mx-auto">
        <div class="text-center">
          <h4 class="text-center">Movie list</h4>
          <hr />
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, computed, watch, reactive } from 'vue'

const formObj = reactive({
  email: '',
  name: '',
  phone: '',
  subscribe: false,
  gender: '',
})

const validateObj = reactive({
  isNameValid: true
});

const errorList = reactive([]);

const handleSubmit = () => {
  errorList.length = 0;
  if (formObj.name.length < 3) {
    errorList.push('Name should be at least 3 characters long');
  }
  if (formObj.email.length === 0) {
    errorList.push('Email is required');
  }
  if (!formObj.subscribe) {
    errorList.push("Please subscribe to newsletter");
  }
  if (errorList.length === 0) {
    alert('Form submitted successfully');
  }
}

const validateName = () => {
  if (formObj.name.length < 3) {
    validateObj.isNameValid = false;
  } else {
    validateObj.isNameValid = true;
  }
}
</script>
