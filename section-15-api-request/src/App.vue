<template>
  <h1 class="text-center">Hello world</h1>

  <Loader v-if="destinationObj.isLoading" />
  <div class="container p-4">
    <div><h2 class="text-success text-center">Travel destinations</h2></div>
    <hr />
    <table class="table table-striped table-light">
      <thead>
        <tr>
          <th>Name</th>
          <th>Days</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="table-light"
          v-for="destination in destinationObj.destinationList"
          :key="destination.id"
        >
          <td>{{ destination.name }}</td>
          <td>{{ destination.days }}</td>
          <td>{{ destination.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <hr />
  <br />
  <br />

  <div class="container">
    <div v-for="user in userObj.users" :key="user.id">
      <h2>{{ user.name }}</h2>
      <p>{{ user.email }}</p>
      <hr />
    </div>
  </div>

  <div class="container color-blue">
    <div v-for="post in userObj.posts" :key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, reactive } from "vue";

const destinationUrl = "http://localhost:3000/destination";

const destinationObj = reactive({
  destinationList: [],
  isLoading: true,
});

const userObj = reactive({
  users: [],
  posts: [],
});

onMounted(() => {
  loadDestination();
  loadPlaceHolder();
});

function loadDestination() {
  axios.get(destinationUrl).then((response) => {
    new Promise((resolve) => {
      setTimeout(resolve, 1400);
    }).then(() => {
      destinationObj.destinationList = response.data;
      destinationObj.isLoading = false;
    });
  });
}

function loadPlaceHolder() {
  axios.get("https://jsonplaceholder.typicode.com/users/").then((response) => {
    userObj.users = response.data;
  });

  fetch("https://jsonplaceholder.typicode.com/posts/")
    .then((response) => response.json())
    .then((data) => {
      userObj.posts = data;
    });
}
</script>
