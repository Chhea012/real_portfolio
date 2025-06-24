<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <header class="bg-blue-900 text-white sticky top-0 z-50">
    <div class="wrapper container mx-auto px-4 py-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold">Chhea</h1>
      <nav class="space-x-4">
        <RouterLink to="/" class="nav-link hover:text-blue-300" active-class="active">Home</RouterLink>
        <RouterLink to="/about" class="nav-link hover:text-blue-300" active-class="active">About</RouterLink>
        <RouterLink to="/portfolio" class="nav-link hover:text-blue-300" active-class="active">Portfolio</RouterLink>
        <RouterLink to="/skills" class="nav-link hover:text-blue-300" active-class="active">Skills</RouterLink>
        <RouterLink to="/contact" class="nav-link hover:text-blue-300" active-class="active">Contact</RouterLink>
      </nav>
    </div>
  </header>


</template>

<style scoped>
.nav-link {
  position: relative;
  padding-bottom: 2px;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #1e90ff; /* Deeper blue for a more interesting hover */
}

.nav-link:hover::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #1e90ff;
  animation: lineExtend 0.3s forwards ease-out;
}

.nav-link:hover::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #1e90ff;
  animation: none;
}

@keyframes lineExtend {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

.active {
  color: #ffffff; /* Same deeper blue for active state */
}

.active::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #1e90ff;
}
</style>