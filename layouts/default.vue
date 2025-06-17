<script setup lang="ts">
// Không cần gì đặc biệt ở layout
</script>

<!-- layouts/default.vue -->
<template>
  <div class="layout-default">
    <header>🌐 Header chung</header>
    <main>
      <slot /> <!-- Trang sẽ được render ở đây -->
    </main>
    <footer>© 2025 Metawood</footer>
  </div>
</template>

<style scoped>
.layout-default {
  padding: 20px;
}
</style>
