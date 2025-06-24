<template>
  <section class="container mx-auto px-4 py-16 bg-gradient-to-b from-gray-50 to-white">
    <h2 class="text-4xl font-extrabold text-gray-800 mb-6 animate-fade-in">Skills & Technologies</h2>
    <p class="text-lg text-gray-600 mb-8 animate-fade-in delay-100">Here are the technologies I work with to bring ideas to life</p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div v-for="(techs, category) in skills" :key="category" class="card bg-white rounded-xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in-up">
        <h3 :data-icon="getIcon(category)" class="text-xl font-semibold text-blue-600 flex items-center mb-4">
          {{ category }}
        </h3>
        <ul class="space-y-2">
          <li v-for="tech in filterLanguages(techs)" :key="tech" class="flex items-center bg-gradient-to-r from-blue-50 to-white text-gray-700 px-4 py-2 rounded-full animate-fade-in-right delay-200">
            <span class="text-green-500 mr-2">✔</span>
            {{ tech }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const skills = {
  Frontend: ['HTML', 'CSS', 'SASS', 'Bootstrap', 'Tailwind CSS', 'JavaScript', 'Vue.js'],
  Backend: ['PHP (MVC)', 'MySQL', 'Laravel', 'Node.js', 'Firebase'],
  'Tools & DevOps': ['Git', 'GitHub', 'Jira', 'AWS EC2', 'Linux', 'Postman', 'Figma', 'Lucidchart', 'Netlify/Vercel'],
  'Programming & Analytics': ['Python', 'TypeScript', 'Data Analytics', 'Power BI', 'Algorithm Design'],
};

const showLanguages = ref(false);

const getIcon = (category) => {
  const icons = {
    Frontend: '',
    Backend: '',
    'Tools & DevOps': '',
    'Programming & Analytics': ''
  };
  return icons[category] || '';
};

const filterLanguages = (techs) => {
  if (!showLanguages.value) return techs;
  return techs.filter(tech => ['Python', 'JavaScript', 'TypeScript', 'PHP (MVC)'].includes(tech));
};
</script>

<style scoped>
h3::before {
  content: attr(data-icon);
  margin-right: 0.5rem;
  font-size: 1.25rem;
}

/* Custom animations */
.animate-fade-in {
  animation: fadeIn 0.5s ease-in;
}
.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-in;
}
.animate-fade-in-right {
  animation: fadeInRight 0.7s ease-in;
}
.animate-bounce {
  animation: bounce 1s infinite;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes fadeInRight {
  from { opacity: 0; transform: translateX(20px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}
</style>