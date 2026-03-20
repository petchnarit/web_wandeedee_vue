<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <router-link class="navbar-brand" to="/">
          <img src="/assets/img/logo/logo.webp" alt="วันดีดี" width="40" height="40" class="d-inline-block align-text-top">
           วันดีดี
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/gallery">Gallery</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/about">About</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/contact">Contact</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/package">Package</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/scan">Scan</router-link></li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <footer class="bg-dark text-white py-4 mt-5">
      <div class="container text-center">
        <p class="mb-0">&copy; 2025 งานศูนย์คอมพิวเตอร์</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
