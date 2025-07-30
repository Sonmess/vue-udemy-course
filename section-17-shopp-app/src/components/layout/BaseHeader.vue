<template>
  <header class="container">
    <h2 class="text-center">Header</h2>

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <img class="mx-3" src="../../assets/img/logo.png" alt="Logo" style="width: 40px" />
        <!-- <a class="navbar-brand" href="#">Navbar</a> -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link
                class="nav-link active"
                aria-current="page"
                :to="{ name: APP_ROUTE_NAMES.HOME }"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: APP_ROUTE_NAMES.CONTACT_US }"
                >Contact us</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: APP_ROUTE_NAMES.PRODUCT_LIST }"
                >Product list</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: APP_ROUTE_NAMES.PRODUCT_CREATE }"
                >Product create</router-link
              >
            </li>
          </ul>

          <ul class="d-flex navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="bi bi-laptop"></i>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <button class="dropdown-item" @click="themeStore.setTheme('light')">
                    <i class="bi bi-sun"></i>&nbsp;Light
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" @click="themeStore.setTheme('dark')">
                    <i class="bi bi-moon-stars-fill"></i>&nbsp;Dark
                  </button>
                </li>
              </ul>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: APP_ROUTE_NAMES.SIGN_IN }"
                >Sign In</router-link
              >
            </li>

            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: APP_ROUTE_NAMES.SIGN_UP }"
                >Sign Up</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { APP_ROUTE_NAMES } from '@/constants/routeNames'
import { useThemeStore } from '@/store/themeStore'

const router = useRouter()
const themeStore = useThemeStore()
</script>
