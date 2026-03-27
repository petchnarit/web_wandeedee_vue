import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GalleryView from '../views/GalleryView.vue'
import AlbumView from '../views/AlbumView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import PackageView from '../views/PackageView.vue'
import ScanView from '../views/ScanView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/gallery', name: 'Gallery', component: GalleryView },
  { path: '/gallery/:id', name: 'Album', component: AlbumView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/contact', name: 'Contact', component: ContactView },
  { path: '/package', name: 'Package', component: PackageView },
  { path: '/scan', name: 'Scan', component: ScanView },
  { path: '/scan/:mode', name: 'ScanMode', component: ScanView }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
