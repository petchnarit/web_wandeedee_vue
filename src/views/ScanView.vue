<template>
  <div class="bg-light min-vh-100">
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-8 text-center">
          <h1 class="display-4 mb-4">Face Scan</h1>
          <p class="lead">Upload a photo to find your best angles.</p>
          <div class="mt-5">
            <input type="file" class="form-control" accept="image/*">
            <button class="btn btn-primary mt-3">Upload</button>
          </div>
          <div class="mt-5">
            <img v-if="preview" :src="preview" class="img-fluid rounded" alt="Preview">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const preview = ref(null)
</script>
