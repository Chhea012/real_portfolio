<script setup>
import { RouterLink } from 'vue-router';
import aboutImage from '@/assets/code.png';
</script>

<template>
  <section class="min-h-screen bg-gradient-to-br from-white via-purple-50 to-purple-100 text-gray-800 py-12 px-4 flex items-center justify-center">
    <div class="max-w-4xl w-full">
      <!-- Header with Animation -->
      <h1 class="text-4xl font-bold text-center mb-6 text-purple-700 animate-fade-in">About Me</h1>
      <p class="text-center text-lg text-gray-600 mb-10 animate-fade-in delay-200">Passionate about creating digital experiences that make a difference</p>

      <!-- Main Content -->
      <div class="flex flex-col md:flex-row items-center gap-10">
        <!-- Text Section -->
        <div class="md:w-1/2">
          <h2 class="text-2xl font-semibold text-purple-600 mb-4 animate-slide-up">📖 My Learning Journey</h2>
          <p class="text-gray-700 mb-4 animate-slide-up delay-100">
            I'm Chhea Chhouy, a second-year Web Programming student at Passerelles Numériques Cambodia, pursuing an Associate Degree. Born on April 12, 2004, in Siem Reap, Cambodia, I have developed strong technical skills and leadership experience.
          </p>
          <p class="text-gray-700 mb-4 animate-slide-up delay-200">
            I specialize in full-stack development with PHP (MVC), MySQL, JavaScript, HTML, CSS, Bootstrap, and TypeScript (OOP). I also work with modern frameworks like Vue.js, Laravel, and have experience with AWS, Firebase, and data analytics using Power BI.
          </p>
          <p class="text-gray-700 mb-4 animate-slide-up delay-300">
            As a team leader and Scrum Master, I've successfully managed multiple projects including POS systems, task management applications, and web scraping tools. I'm passionate about learning new technologies and helping others grow.
          </p>
          <!-- Roles with Hover Effect -->
          <div class="flex gap-4 mt-4">
            <span class="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm hover:bg-purple-200 transition-colors duration-300 cursor-pointer">
              <span class="mr-1"></span> Team Leader
            </span>
            <span class="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm hover:bg-purple-200 transition-colors duration-300 cursor-pointer">
              <span class="mr-1"></span> Scrum Master
            </span>
          </div>
        </div>

        <!-- Image Section with Hover Effect -->
        <div class="md:w-1/2 flex justify-center">
          <img :src="aboutImage" alt="Chhea Chhouy" class="w-96 h-96 object-cover rounded-lg shadow-lg border-2 border-purple-200 hover:scale-105 transition-transform duration-300" />
        </div>
      </div>

      <!-- Interest Cards with Creative Design -->
      <div class="mt-10 flex justify-around items-center flex-wrap gap-6">
        <div class="bg-white p-6 rounded-xl shadow-md border border-purple-200 hover:shadow-lg transition-shadow duration-300 w-64 text-center card transform hover:-translate-y-2">
          <div class="text-4xl font-bold text-purple-600 mb-2">💻</div>
          <h3 class="text-xl font-semibold text-gray-800 mb-2">Coding</h3>
          <p class="text-gray-600">I enjoy exploring new programming languages and frameworks to build innovative solutions.</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-md border border-purple-200 hover:shadow-lg transition-shadow duration-300 w-64 text-center card transform hover:-translate-y-2">
          <div class="text-4xl font-bold text-purple-600 mb-2">👥</div>
          <h3 class="text-xl font-semibold text-gray-800 mb-2">Leadership</h3>
          <p class="text-gray-600">I love leading teams and mentoring others to achieve their goals together.</p>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
/* Animation Keyframes */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

/* Apply Animations */
.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
}

.animate-slide-up {
  animation: slideUp 0.6s ease-out;
}

.animate-slide-up.delay-100 {
  animation-delay: 0.1s;
}

.animate-slide-up.delay-200 {
  animation-delay: 0.2s;
}

.animate-slide-up.delay-300 {
  animation-delay: 0.3s;
}

/* Card and Hover Effects */
.card {
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.card:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

img:hover {
  transform: scale(1.05);
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .md:flex-row {
    flex-direction: column;
  }
  .w-96 {
    width: 100%;
    height: auto;
  }
  .w-64 {
    width: 100%;
  }
}

/* Ensure smooth transitions */
.transition-colors {
  transition: background-color 0.3s ease;
}

.transition-transform {
  transition: transform 0.3s ease;
}
</style>