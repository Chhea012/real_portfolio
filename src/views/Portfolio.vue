<script setup>
import { RouterLink } from 'vue-router';
import githubIcon from '@/assets/github.png';
import posImage from '@/assets/code.png';
import taskImage from '@/assets/code.png';
import scraperImage from '@/assets/code.png';
import bandImage from '@/assets/code.png';
import movieImage from '@/assets/code.png';

const projects = [
  {
    title: 'POS System - Virtual Company Project',
    description: 'Full-featured POS system with inventory management, financial tracking, barcode scanning, and Telegram chatbot integration. Led as Scrum Master from March 10th - April 30th, 2025.',
    technologies: ['PHP (MVC)', 'MySQL', 'Bootstrap', 'Chart.js'],
    github: 'https://github.com/Chhea012/VC1_POS_System', // Kept as VC1; verify if correct
    image: posImage,
  },
  {
    title: 'Task Management App',
    description: 'Task management app enabling users to create, organize, and track tasks by status with calendar integration. Built with Firebase for online access and localStorage for offline functionality.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Firebase'],
    github: 'https://github.com/Chhea012/Task-Management-App-B12',
    image: taskImage,
  },
  {
    title: 'Web Scraping Automation Tool',
    description: 'Web scraping tool with user-friendly GUI to efficiently collect and organize website data for analysis.',
    technologies: ['Python', 'Tkinter', 'BeautifulSoup', 'JSON'],
    github: 'https://github.com/Chhea012/webdata-scraper-project',
    image: scraperImage,
  },
  {
    title: 'Music Band Website',
    description: 'Developed a music band website to showcase band information, videos, and music for easy audience access.',
    technologies: ['HTML', 'CSS', 'SASS', 'Figma'],
    github: 'https://github.com/Chhea012/class_a_music_band',
    image: bandImage,
  },
  {
    title: 'Movie Booking System',
    description: 'A movie ticket booking system built using Object-Oriented Programming with TypeScript. Features include seat selection, movie scheduling, and user authentication for a seamless booking experience.',
    technologies: ['TypeScript', 'HTML', 'CSS', 'Node.js'],
    github: 'https://github.com/Chhea012/Movie-Booking-System-G01',
    image: movieImage,
  },
  {
    title: 'Portfolio Project',
    description: 'Personal portfolio website featuring my projects, skills, and journey as a web developer, built with Vue.js and Tailwind CSS for a modern and responsive design.',
    technologies: ['Vue.js', 'Tailwind CSS', 'JavaScript', 'HTML'],
    github: 'https://github.com/Chhea012/personal-portfolio', // Verify this link
    image: posImage, // Reuses posImage; consider a portfolio-specific image
  },
];
</script>

<template>
  <section class="container mx-auto px-4 py-16 bg-gradient-to-br from-white via-purple-50 to-purple-100 min-h-screen flex items-center justify-center">
    <div class="max-w-6xl w-full flex flex-col items-center">
      <!-- Header -->
      <h2 class="text-4xl font-bold text-center mb-6 text-purple-800 animate-fade-in">Featured Projects</h2>
      <p class="text-lg text-center mb-10 text-gray-600 animate-fade-in delay-200">A collection of projects that showcase my skills and passion for development</p>

      <!-- Project Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center w-full">
        <div v-for="project in projects" :key="project.title" class="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl max-w-sm">
          <!-- Project Image -->
          <div class="relative">
            <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <!-- Card Content -->
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2 text-gray-800">{{ project.title }}</h3>
            <p class="text-gray-600 mb-4 text-sm line-clamp-3">{{ project.description }}</p>
            <p class="text-sm mb-4"><strong class="text-purple-700">Technologies:</strong> {{ project.technologies.join(', ') }}</p>
            <div v-if="project.github" class="flex justify-end">
              <a :href="project.github" target="_blank" class="flex items-center px-4 py-2 text-gray-600 duration-300">
                <img :src="githubIcon" alt="GitHub" class="w-5 h-5 mr-2" />
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- View All Button -->
      <div class="text-center mt-10">
        <RouterLink to="/portfolio" class="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-300 font-medium">
          View All Projects
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Animation Keyframes */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Apply Animations */
.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
}

.animate-fade-in.delay-200 {
  animation-delay: 0.2s;
}

/* Line Clamp for Description */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .grid-cols-1 {
    grid-template-columns: 1fr;
  }
  .md:grid-cols-2 {
    grid-template-columns: 1fr;
  }
  .lg:grid-cols-3 {
    grid-template-columns: 1fr;
  }
  .w-5 {
    width: 1.25rem;
    height: 1.25rem;
  }
  .px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .h-48 {
    height: 12rem; /* Adjust image height on mobile */
  }
}

/* Smooth Transitions */
.transition-all {
  transition: all 0.3s ease;
}

.transition-shadow {
  transition: box-shadow 0.3s ease;
}

.transition-colors {
  transition: background-color 0.3s ease;
}

.transition-transform {
  transition: transform 0.3s ease;
}

.transition-opacity {
  transition: opacity 0.3s ease;
}
</style>