<script setup></script>

<template>
  <section class="container mx-auto px-4 py-16 bg-gray-50 min-h-screen flex items-center justify-center">
    <div class="max-w-6xl w-full flex flex-col items-center">
      <!-- Header -->
      <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">Get In Touch</h2>
      <p class="text-lg md:text-xl text-gray-600 mb-10 text-center">Have a project in mind? Let's discuss how we can work together to bring your ideas to life.</p>

      <!-- Contact Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <!-- Let's Connect Column -->
        <div class=" p-6 ">
          <h3 class="text-xl font-semibold mb-4 text-gray-800">Let's Connect</h3>
          <div class="space-y-4">
            <p class="flex items-center"><span class="w-5 h-5 mr-2 text-blue-600"></span> <strong>Email:</strong> chhea.chhouy@student.passerellesnumeriques.org</p>
            <p class="flex items-center"><span class="w-5 h-5 mr-2 text-blue-600"></span> <strong>Phone:</strong> +855 67 408 241</p>
            <p class="flex items-center"><span class="w-5 h-5 mr-2 text-blue-600"></span> <strong>Location:</strong> St. 371, Phum Tropeang Chhuk, Phnom Penh, Cambodia</p>
          </div>
          <div class="mt-6">
            <h4 class="font-semibold mb-2 text-gray-800">Follow Me</h4>
            <div class="flex space-x-4">
              <a href="https://github.com/Chhea012" target="_blank" class="text-blue-600 hover:underline">
                <span class="w-5 h-5 mr-2 text-blue-600"></span> GitHub
              </a>
              <a href="#" target="_blank" class="text-blue-600 hover:underline">
                <span class="w-5 h-5 mr-2 text-blue-600"></span> Twitter
              </a>
              <a href="#" target="_blank" class="text-blue-600 hover:underline">
                <span class="w-5 h-5 mr-2 text-blue-600"></span> LinkedIn
              </a>
              <a href="#" target="_blank" class="text-blue-600 hover:underline">
                <span class="w-5 h-5 mr-2 text-blue-600"></span> Website
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Form Column -->
        <div class="bg-white] p-6 rounded-lg shadow-lg">
          <h3 class="text-xl font-semibold mb-4 text-gray-800">Contact Form</h3>
          <div class="space-y-4">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
              <input id="name" type="text" placeholder="Your full name" class="w-full p-2 border rounded-md" />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email Address</label>
              <input id="email" type="email" placeholder="your.email@sample.com" class="w-full p-2 border rounded-md" />
            </div>
            <div>
              <label for="subject" class="block text-sm font-medium text-gray-700">Subject</label>
              <input id="subject" type="text" placeholder="Project discussion" class="w-full p-2 border rounded-md" />
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" placeholder="Tell me about your project..." class="w-full p-2 border rounded-md" rows="4" ></textarea>
            </div>
            <button class="w-full bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 disabled:bg-blue-400" >Send Message</button>
          </div>
          <p class="mt-4 text-sm text-gray-600">Note: Form is disabled. Please contact me directly via email or phone.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* No additional styles needed; Tailwind handles layout and responsiveness */
</style>