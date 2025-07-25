<template>
  <header class="container mb-2">
    <h1 class="text-center m-2">Header</h1>

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
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
              <router-link class="nav-link" aria-current="page" to="/"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'contact' }"
                >Contact us</router-link
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Product
              </a>
              <ul class="dropdown-menu">
                <li>
                  <router-link
                    class="dropdown-item"
                    :to="{ name: 'product-list' }"
                    >Product list</router-link
                  >
                </li>
                <li>
                  <router-link class="dropdown-item" to="/product/"
                    >Product detail</router-link
                  >
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <router-link
              class="nav-link"
              aria-disabled="true"
              :to="{ name: 'login' }"
              >Login</router-link
            >
          </form>
        </div>
      </div>
    </nav>
  </header>
</template>
