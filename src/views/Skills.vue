<script setup>
import skill1 from '@/assets/image1.png';
import skill2 from '@/assets/image2.png';
import skill3 from '@/assets/image3.png';
import skill4 from '@/assets/image4.png';
import skill5 from '@/assets/image5.png';
import skill6 from '@/assets/image6.png';
import skill7 from '@/assets/image7.png';
import skill8 from '@/assets/image8.png';
import skill9 from '@/assets/image9.png';
import skill10 from '@/assets/image10.png';
import skill11 from '@/assets/image11.png';
import skill12 from '@/assets/image12.png';
import skill13 from '@/assets/image13.png';
import skill14 from '@/assets/image14.png';
import skill15 from '@/assets/image15.png';
import skill16 from '@/assets/image16.png';
import skill17 from '@/assets/image17.png';
import skill18 from '@/assets/image18.png';
import skill19 from '@/assets/image19.png';
import skill20 from '@/assets/image20.png';

const skills = [
  skill1, skill2, skill3, skill4, skill5,
  skill6, skill7, skill8, skill9, skill10,
  skill11, skill12, skill13, skill14, skill15,
  skill16, skill17, skill18, skill19, skill20
];
</script>

<template>
  <section class="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center relative overflow-hidden">
    <!-- Title -->
    <h1 class="mt-8 text-2xl font-semibold z-10">Technologies and Tools:</h1>

    <!-- Skill Icons Grid -->
    <div class="grid grid-cols-5 gap-6 p-8 max-w-4xl z-10">
      <div v-for="(skill, index) in skills" :key="index" class="flex items-center justify-center">
        <div class="border-4 border-gradient rounded-xl p-2 transition-all duration-300 hover:scale-110">
          <img :src="skill" alt="Skill Icon" class="icon-size object-contain glow-effect" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Custom icon size */
.icon-size {
  width: 6rem;  /* 96px */
  height: 6rem;
}

@media (max-width: 640px) {
  .icon-size {
    width: 4.5rem; /* 72px */
    height: 4.5rem;
  }
}

/* Glowing Effect for Icons */
.glow-effect {
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));
  transition: filter 0.3s ease;
}

.glow-effect:hover {
  filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.8));
}

/* Custom Gradient Border */
.border-gradient {
  border-image: linear-gradient(45deg, #6B46C1, #ED64A6, #FDBA74) 1;
  animation: borderGlow 4s infinite alternate;
}

/* Border Glow Animation */
@keyframes borderGlow {
  0% {
    box-shadow: 0 0 5px rgba(107, 70, 193, 0.5), 0 0 10px rgba(237, 100, 166, 0.3);
  }
  100% {
    box-shadow: 0 0 10px rgba(107, 70, 193, 0.8), 0 0 15px rgba(237, 100, 166, 0.6);
  }
}

/* Background Animations */
.bg-gray-900::before {
  content: '';
  position: absolute;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
  animation: float 15s infinite ease-in-out;
  top: -100px;
  left: -100px;
}

.bg-gray-900::after {
  content: '';
  position: absolute;
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, rgba(255, 165, 0, 0.1) 0%, transparent 70%);
  animation: float 12s infinite ease-in-out reverse;
  bottom: -75px;
  right: -75px;
}

@keyframes float {
  0% { transform: translate(0, 0); }
  50% { transform: translate(20px, 20px); }
  100% { transform: translate(0, 0); }
}

/* Responsive Grid Columns */
@media (max-width: 1024px) {
  .grid-cols-5 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .grid-cols-5 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
