<script setup>
import { RouterLink } from 'vue-router';
import profileImage from '@/assets/portfolio.png';
import portfolioPDF from '@/assets/Porfolio.pdf'; 
</script>

<template>
  <section
    class="min-h-screen bg-gradient-to-b from-purple-800 via-purple-600 to-purple-400 text-white flex items-center justify-center relative overflow-hidden">
    <!-- Animated Decorative Circles -->
    <div class="absolute w-64 h-64 bg-purple-300 rounded-full opacity-20 animate-circle1"></div>
    <div class="absolute w-48 h-48 bg-yellow-300 rounded-full opacity-20 animate-circle2"></div>
    <div class="absolute w-56 h-56 bg-purple-200 rounded-full opacity-20 animate-circle3"></div>
    <div class="absolute w-40 h-40 bg-yellow-200 rounded-full opacity-20 animate-circle4"></div>

    <!-- Main Content with Text Next to Image -->
    <div class="text-center z-10 max-w-5xl w-full">
      <div class="flex justify-center items-center flex-wrap gap-12 mb-10">
        <div class="text-left max-w-md">
          <h2 class="text-5xl font-bold mb-4">Hello, I'm Chhea</h2>
          <h3 class="text-3xl mb-6 font-semibold text-yellow-300">
            <span class="typing">Future Full-Stack Developer</span>
          </h3>
          <p class="mb-6 text-lg">
            I'm learning to craft beautiful, functional web applications at Passerelles Numériques Cambodia. Currently
            mastering modern technologies and building practical projects to solve real-world problems.
          </p>
        </div>
        <div class="flex-shrink-0 relative">
          <img :src="profileImage" alt="Chhea Chhouy"
            class="w-80 h-80 rounded-full border-4 border-yellow-300 object-cover shadow-lg" />
          <!-- Orbiting Circles -->
          <div class="absolute w-8 h-8 bg-yellow-300 rounded-full opacity-50 animate-orbit1"></div>
          <div class="absolute w-6 h-6 bg-purple-300 rounded-full opacity-50 animate-orbit2"></div>
          <div class="absolute w-10 h-10 bg-yellow-200 rounded-full opacity-50 animate-orbit3"></div>
        </div>
      </div>

      <!-- Buttons Section Below -->
      <div class="mt-8">
        <div class="space-x-4">
          <RouterLink to="/portfolio" class="btn btn-primary">
            <span class="mr-2">📁</span>View My Work
          </RouterLink>
          <a href="/assets/Portfolio.pdf" download class="btn btn-secondary">
            <span class="mr-2">📄</span>Download Resume
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes circleMove1 {
  0% {
    transform: translate(-20%, -20%) scale(1);
    opacity: 0.2;
  }

  50% {
    transform: translate(20%, 20%) scale(1.2);
    opacity: 0.4;
  }

  100% {
    transform: translate(-20%, -20%) scale(1);
    opacity: 0.2;
  }
}

@keyframes circleMove2 {
  0% {
    transform: translate(20%, 20%) scale(1);
    opacity: 0.2;
  }

  50% {
    transform: translate(-20%, -20%) scale(1.3);
    opacity: 0.5;
  }

  100% {
    transform: translate(20%, 20%) scale(1);
    opacity: 0.2;
  }
}

@keyframes circleMove3 {
  0% {
    transform: translate(-30%, 30%) scale(1);
    opacity: 0.2;
  }

  50% {
    transform: translate(30%, -30%) scale(1.1);
    opacity: 0.3;
  }

  100% {
    transform: translate(-30%, 30%) scale(1);
    opacity: 0.2;
  }
}

@keyframes circleMove4 {
  0% {
    transform: translate(30%, -30%) scale(1);
    opacity: 0.2;
  }

  50% {
    transform: translate(-30%, 30%) scale(1.2);
    opacity: 0.4;
  }

  100% {
    transform: translate(30%, -30%) scale(1);
    opacity: 0.2;
  }
}

.animate-circle1 {
  animation: circleMove1 10s infinite ease-in-out;
  top: -20%;
  left: -20%;
}

.animate-circle2 {
  animation: circleMove2 12s infinite ease-in-out;
  bottom: -16%;
  right: -16%;
}

.animate-circle3 {
  animation: circleMove3 15s infinite ease-in-out;
  top: 20%;
  left: 20%;
}

.animate-circle4 {
  animation: circleMove4 8s infinite ease-in-out;
  bottom: 20%;
  right: 20%;
}

@keyframes orbit1 {
  0% {
    transform: rotate(0deg) translateX(120px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(120px) rotate(-360deg);
  }
}

@keyframes orbit2 {
  0% {
    transform: rotate(120deg) translateX(100px) rotate(0deg);
  }
  100% {
    transform: rotate(480deg) translateX(100px) rotate(-360deg);
  }
}

@keyframes orbit3 {
  0% {
    transform: rotate(240deg) translateX(110px) rotate(0deg);
  }
  100% {
    transform: rotate(600deg) translateX(110px) rotate(-360deg);
  }
}

.animate-orbit1 {
  animation: orbit1 8s infinite linear;
  top: 50%;
  left: 50%;
  transform-origin: center;
}

.animate-orbit2 {
  animation: orbit2 6s infinite linear;
  top: 50%;
  left: 50%;
  transform-origin: center;
}

.animate-orbit3 {
  animation: orbit3 10s infinite linear;
  top: 50%;
  left: 50%;
  transform-origin: center;
}

@keyframes typing {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}

.typing {
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid transparent;
  animation: typing 2s steps(24) infinite, blink 0.5s step-end infinite;
  display: inline-block;
}

@keyframes blink {
  50% {
    border-right-color: #fff;
  }

  100% {
    border-right-color: transparent;
  }
}

/* Button Styles */
.btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 12px 24px;
  font-size: 1.1rem;
  font-weight: 500;
  text-decoration: none;
  color: #fff;
  border-radius: 8px;
  overflow: hidden;
  z-index: 1;
  transition: color 0.4s ease;
}

.btn-primary {
  background: #6B46C1; /* Purple-700 */
}

.btn-secondary {
  background: #6b7280; /* Gray-500 */
}

/* Color Walk to Right Effect */
.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  transform: translateX(-100%);
  z-index: -1;
  transition: transform 0.4s ease;
}

.btn-primary::before {
  background: #7C3AED; /* Purple-800 */
}

.btn-secondary::before {
  background: #4B5563; /* Gray-600 */
}

.btn:hover::before {
  transform: translateX(0);
}

.btn:hover {
  color: #fefcbf; /* Yellow-100 for contrast */
}

/* Responsive Adjustments */
@media (max-width: 640px) {
  .btn {
    padding: 10px 18px;
    font-size: 1rem;
  }
}
</style>