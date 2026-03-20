<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <!-- Navbar brand with responsive variants -->
        <router-link class="navbar-brand d-inline-flex text-uppercase hidden-xs-down" to="/">
          วันดีดี - WANDEEDEE
        </router-link>
        <router-link class="navbar-brand d-inline-flex text-uppercase hidden-sm-up" to="/">
          WANDEEDEE
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

    <!-- Footer -->
    <footer class="text-bg-light">
      <div class="container py-5 py-lg-6 text-center">
        <img src="/assets/img/logo/logo.webp" class="" width="100" height="100" alt="วันดีดี ช่างภาพอ่างทอง ช่างภาพอยุธยา">
        <div class="row justify-content-md-between">
          <div class="col-md-12">
            <ul class="list-inline mt-3 mb-0 text-center">
              <li class="list-inline-item">
                <a class="btn btn-white btn-lg px-0 py-2 text-facebook" href="https://www.facebook.com/wandeedee.co" target="_blank" aria-label="facebook">
                  <i class="bi bi-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="btn btn-white btn-lg px-0 py-2 text-facebook" href="https://m.me/wandeedee.co" target="_blank" aria-label="messenger">
                  <i class="bi bi-messenger" aria-hidden="true"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a class="btn btn-white btn-lg px-0 py-2 text-whatsapp" href="#" aria-label="line">
                  <i class="bi bi-line" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
            <div class="text-secondary text-center mt-3">
              Copyrights ©2026
              <router-link to="/" class="text-secondary"> wandeedee </router-link>
            </div>
          </div>
        </div>
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
