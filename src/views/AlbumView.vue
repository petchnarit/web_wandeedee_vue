<template>
  <div>
    <!-- Header -->
    <div class="bg-light text-black text-sm-center">
      <div class="container py-5 pt-lg-6" v-if="album">
        <h1 class="display-4 mb-4">{{ album.name }}</h1>
        <dl class="row justify-content-center mb-5">
          <div class="col-sm-3">
            <dt class="fw-light text-secondary">Job</dt>
            <dd>{{ album.tag }}</dd>
          </div>
          <div class="col-sm-3">
            <dt class="fw-light text-secondary">Date</dt>
            <dd>{{ formatDate(album.date) }}</dd>
          </div>
          <div class="col-sm-3">
            <dt class="fw-light text-secondary">Location</dt>
            <dd>{{ album.location }}</dd>
          </div>
          <div class="col-sm-3">
            <dt class="fw-light text-secondary">Photographer</dt>
            <dd>{{ album.photographer }}</dd>
          </div>
        </dl>
      </div>
    </div>

    <!-- Articles -->
    <div class="bg-white text-black pb-5 pb-lg-6">
      <div class="container py-2" v-if="album">
        <div class="row mt-n6">
          <div v-for="(img, idx) in album.images" :key="idx" class="col-6 col-md-6 col-lg-4 col-xl-3 p-2">
            <div class="card bg-white border-0 h-100">
              <a :href="img.url" class="glightbox" @click.prevent="openLightbox(idx)">
                <img :src="img.thumb" :alt="album.name" class="card-img-top img-fluid" loading="lazy">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <div v-if="lightboxOpen" class="position-fixed top-0 start-0 w-100 h-100 bg-black bg-opacity-75 d-flex align-items-center justify-content-center z-index-1050" @click.self="closeLightbox">
      <button class="btn btn-light position-absolute top-0 end-0 m-3" @click="closeLightbox">×</button>
      <button class="btn btn-light position-absolute start-0 top-50 translate-middle-y ms-3" @click.stop="prevImage">‹</button>
      <img :src="currentImage.url" :alt="album.name" class="img-fluid max-h-100 max-w-100">
      <button class="btn btn-light position-absolute end-0 top-50 translate-middle-y me-3" @click.stop="nextImage">›</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Mock album data
const album = ref(null)
const lightboxOpen = ref(false)
const currentIndex = ref(0)

const mockAlbums = {
  '001': {
    id: '001',
    name: 'Wedding Photoshoot',
    tag: 'Wedding',
    location: 'Ayutthaya',
    photographer: ' tahun',
    date: '2025-03-15',
    images: Array.from({ length: 12 }, (_, i) => ({
      url: '/assets/img/logo/logo.webp', // demo
      thumb: '/assets/img/logo/logo.webp'
    }))
  },
  '002': {
    id: '002',
    name: 'Pre-Wedding',
    tag: 'Pre-Wedding',
    location: 'Ang Thong',
    photographer: ' years',
    date: '2025-03-10',
    images: Array.from({ length: 10 }, (_, i) => ({
      url: '/assets/img/logo/logo.webp',
      thumb: '/assets/img/logo/logo.webp'
    }))
  }
}

onMounted(() => {
  const id = route.params.id
  album.value = mockAlbums[id] || mockAlbums['001']
})

const currentImage = computed(() => {
  if (!album.value) return { url: '', thumb: '' }
  return album.value.images[currentIndex.value] || { url: '', thumb: '' }
})

const openLightbox = (idx) => {
  currentIndex.value = idx
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}

const prevImage = () => {
  if (!album.value) return
  currentIndex.value = (currentIndex.value - 1 + album.value.images.length) % album.value.images.length
}

const nextImage = () => {
  if (!album.value) return
  currentIndex.value = (currentIndex.value + 1) % album.value.images.length
}

const formatDate = (dateStr) => {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}
</script>

<style scoped>
.max-h-100 {
  max-height: 90vh;
}
.max-w-100 {
  max-width: 90vw;
}
.z-index-1050 {
  z-index: 1050;
}
</style>
