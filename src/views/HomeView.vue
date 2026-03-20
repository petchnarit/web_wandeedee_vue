<template>
  <div>
    <!-- Header -->
    <div class="bg-light">
      <div class="container text-center py-5 py-lg-6">
        <div class="col-lg-10 col-xxl-8 mx-auto">
          <img src="/assets/img/logo/logo.webp" alt="วันดีดี ช่างภาพอ่างทอง ช่างภาพอยุธยา" class="img-fluid mb-3" width="200" height="200">
          <p class="lead text-dark mb-0">"Give your important moments Save memories by wandeedee"</p>
          <p class="lead text-dark mb-0">"ให้ช่วงเวลาสำคัญของคุณ เก็บบันทึกความทรงจำ โดย วันดีดี"</p>
          <h1 class="visually-hidden">วันดีดี ช่างภาพอ่างทอง ช่างภาพอยุธยา</h1>
        </div>
      </div>
    </div>

    <!-- Projects -->
    <div class="bg-white text-black pb-5 pb-lg-6">
      <div class="container pt-5">
        <div class="row g-3">
          <div v-for="item in items" :key="item.id" class="col-6 col-md-6 col-lg-4 col-xl-3">
            <div class="card bg-white border-0 h-100">
              <img :src="item.cover" :alt="item.name" class="card-img-top img-fluid lazyload" width="300" height="200" loading="lazy">
              <div class="card-body px-0">
                <div class="small text-secondary mb-0">{{ item.count }} pictures | {{ item.views }} views</div>
                <div class="text-secondary text-uppercase mb-0">{{ item.tag }}</div>
                <h2 class="card-title h3 mb-0">
                  <router-link :to="'/gallery/' + item.folder" class="text-decoration-none text-dark stretched-link">
                    {{ item.name }}
                  </router-link>
                </h2>
                <div class="small text-secondary mb-0">{{ formatDate(item.date) }}</div>
                <div class="small text-secondary mb-3">{{ item.location }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center py-4">
        <router-link to="/gallery" class="btn btn-outline-dark">View all</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Mock data - in real app, fetch from API
const items = ref([
  {
    id: 1,
    folder: '001',
    name: 'Wedding Photoshoot',
    tag: 'Wedding',
    location: 'Ayutthaya',
    date: '2025-03-15',
    count: 120,
    views: 3450,
    cover: '/assets/img/logo/logo.webp' // placeholder
  },
  {
    id: 2,
    folder: '002',
    name: 'Pre-Wedding',
    tag: 'Pre-Wedding',
    location: 'Ang Thong',
    date: '2025-03-10',
    count: 85,
    views: 2100,
    cover: '/assets/img/logo/logo.webp'
  },
  {
    id: 3,
    folder: '003',
    name: 'Family Portrait',
    tag: 'Family',
    location: 'Bangkok',
    date: '2025-03-05',
    count: 60,
    views: 1800,
    cover: '/assets/img/logo/logo.webp'
  },
  {
    id: 4,
    folder: '004',
    name: 'Fashion Shoot',
    tag: 'Fashion',
    location: 'Chiang Mai',
    date: '2025-02-20',
    count: 45,
    views: 1200,
    cover: '/assets/img/logo/logo.webp'
  }
])

const formatDate = (dateStr) => {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}
</script>
