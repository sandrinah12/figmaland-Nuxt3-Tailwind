<template>
    <div class=" bg-cover bg-center" :style="{ backgroundImage: 'url(/bg-image-header.png)' }">
      <header class=" text-white">
        <!-- Navbar -->
        <nav class="container mx-auto flex items-center justify-between py-4">
          <!-- Desktop Menu -->
          <ul class="hidden md:flex gap-8 text-sm">
            <li><NuxtLink class="hover:text-gray-300" to="/">Accueil</NuxtLink></li>
            <li><NuxtLink class="hover:text-gray-300" to="/">Product</NuxtLink></li>
            <li><NuxtLink class="hover:text-gray-300" to="/">Pricing</NuxtLink></li>
            <li><NuxtLink class="hover:text-gray-300" to="/blog">Blog</NuxtLink></li>
            <li><NuxtLink class="hover:text-gray-300" to="/">Contact</NuxtLink></li>
          </ul>
          <!-- Logo -->
          <div class="flex items-center md:m-auto mr-auto">
            <img class=" !w-4/5" src="/Figma Land.png" alt="">
          </div>

          <ul class="hidden md:flex gap-8 text-sm ml-auto">
            <li><Icon name="fa-twitter" mode="svg" size="25"></Icon> </li>
            <li><Icon name="fa:facebook-official" mode="svg" size="25"></Icon> </li>
            <li><Icon name="fa:linkedin-square" mode="svg" size="25"></Icon></li>
          </ul>


          <!-- Mobile Menu Icon -->
          <div class="md:hidden ml-auto">
            <button @click="toggleMenu" class="text-white focus:outline-none">
              <Icon name="fa6-solid:bars-staggered" mode="svg" size="25"/>
            </button>
          </div>
          
        </nav>

        <!-- Mobile Dropdown Menu -->
        <div :class="isMenuOpen ? 'block bg-gray-700' : 'hidden' ">
          <ul class="flex flex-col gap-4 py-4 px-6 text-sm">
            <li><NuxtLink class="hover:text-gray-300" to="/">Accueil</NuxtLink></li>
            <li><NuxtLink class="hover:text-gray-300" to="/">Product</NuxtLink></li>
            <li><NuxtLink class="hover:text-gray-300" to="/">Pricing</NuxtLink></li>
            <li><NuxtLink class="hover:text-gray-300" to="/blog">Blog</NuxtLink></li>
            <li><NuxtLink class="hover:text-gray-300" to="/">Contact</NuxtLink></li>
          </ul>
        </div>
      </header>
 
  
      <!-- Main Content -->
      <div class="flex flex-col items-center justify-center text-center text-white mb-4">
        <h1 class="text-4xl md:text-4xl lg:text-6xl font-bold mt-20 lg:w-1/2 md:w-full w-4/5">
          The best products start with Figma
        </h1>
        <p class="text-lg md:text-2xl md:w-1/2 w-4/5 mb-20 mt-6">
          Most calendars are designed for teams. Slate is designed for freelancers.
        </p>
        <button class="px-16 py-3 text-white hover:bg-blue-700 transition rounded-full bg-[#2091f9] mb-56">
          Try For Free
        </button>
      </div>
    </div>
  </template>

  
<script setup >
  import { ref } from 'vue';
  // Variable réactive pour gérer l'état du menu mobile
  const isMenuOpen = ref(false);
  console.log(isMenuOpen);

  // Fonction pour basculer l'état du menu
  const toggleMenu = () => {
    console.log(isMenuOpen);
    isMenuOpen.value = !isMenuOpen.value;
  };
</script>