<template>
  <div>
    <!-- Header -->
    <div class="bg-light">
      <div class="container text-center py-5 py-lg-6">
        <div class="col-lg-12">
          <h1 class="display-3 text-black mb-6">Gallery</h1>
        </div>
      </div>
    </div>

    <!-- Articles -->
    <div class="bg-white text-black pb-5 pb-lg-6">
      <div class="container py-2">
        <div class="row mt-n6">
          <div v-for="item in items" :key="item.id" class="col-6 col-md-6 col-lg-4 col-xl-3 p-2">
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

        <!-- Pagination -->
        <nav class="mt-4 d-flex justify-content-center" aria-label="Pagination">
          <ul class="pagination">
            <li class="page-item" :class="{ disabled: currentPage === 1 }">
              <button class="page-link" @click="prevPage">Previous</button>
            </li>
            <li v-for="page in totalPages" :key="page" class="page-item" :class="{ active: currentPage === page }">
              <button class="page-link" @click="goToPage(page)">{{ page }}</button>
            </li>
            <li class="page-item" :class="{ disabled: currentPage === totalPages }">
              <button class="page-link" @click="nextPage">Next</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const itemsPerPage = 20
const totalItems = ref(100) // mock total
const currentPage = ref(1)

// Mock data generator
const generateItems = (page) => {
  const items = []
  const start = (page - 1) * itemsPerPage
  for (let i = 0; i < itemsPerPage; i++) {
    const idx = start + i + 1
    items.push({
      id: idx,
      folder: String(idx).padStart(3, '0'),
      name: `Album ${idx}`,
      tag: 'Photography',
      location: 'Ayutthaya',
      date: '2025-03-15',
      count: Math.floor(Math.random() * 100) + 20,
      views: Math.floor(Math.random() * 5000) + 100,
      cover: '/assets/img/logo/logo.webp'
    })
  }
  return items
}

const items = ref([])
const totalPages = computed(() => Math.ceil(totalItems.value / itemsPerPage))

const loadPage = (page) => {
  currentPage.value = page
  items.value = generateItems(page)
  router.replace({ query: { page } })
}

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) loadPage(page)
}

const prevPage = () => {
  if (currentPage.value > 1) loadPage(currentPage.value - 1)
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) loadPage(currentPage.value + 1)
}

const formatDate = (dateStr) => {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

onMounted(() => {
  const page = parseInt(route.query.page) || 1
  loadPage(page)
})
</script>
