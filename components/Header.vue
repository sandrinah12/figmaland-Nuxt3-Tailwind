<template>
  <!-- Section principale avec un fond d'image en couverture -->
  <!-- Utilisation de l'attribut `:style` pour définir dynamiquement l'image de fond -->
  <div class="bg-cover bg-center" :style="{ backgroundImage: 'url(/bg-image-header.png)' }">
      <!-- En-tête principal -->
      <header class="text-white">
          <!-- Barre de navigation -->
          <nav class="container mx-auto flex items-center justify-between py-4">
              <!-- Menu de navigation pour les écrans de taille moyenne et plus -->
              <ul class="hidden md:flex gap-8 text-sm">
                  <!-- Liens vers différentes pages -->
                  <li><NuxtLink class="hover:text-gray-300" to="/">Accueil</NuxtLink></li>
                  <li><NuxtLink class="hover:text-gray-300" to="/">Product</NuxtLink></li>
                  <li><NuxtLink class="hover:text-gray-300" to="/">Pricing</NuxtLink></li>
                  <li><NuxtLink class="hover:text-gray-300" to="/">Blog</NuxtLink></li>
                  <li><NuxtLink class="hover:text-gray-300" to="/">Contact</NuxtLink></li>
              </ul>

              <!-- Logo centré ou aligné à gauche selon la taille de l'écran -->
              <div class="flex items-center md:m-auto mr-auto">
                  <img class="!w-4/5" src="/Figma Land.png" alt="Logo">
              </div>

              <!-- Icônes des réseaux sociaux visibles sur les écrans moyens et plus -->
              <ul class="hidden md:flex gap-8 text-sm ml-auto">
                  <li><Icon name="fa-twitter" mode="svg" size="25"></Icon></li>
                  <li><Icon name="fa:facebook-official" mode="svg" size="25"></Icon></li>
                  <li><Icon name="fa:linkedin-square" mode="svg" size="25"></Icon></li>
              </ul>

              <!-- Bouton pour ouvrir le menu mobile -->
              <div class="md:hidden ml-auto">
                  <button @click="toggleMenu" class="text-white focus:outline-none">
                      <Icon name="fa6-solid:bars-staggered" mode="svg" size="25" />
                  </button>
              </div>
          </nav>

          <!-- Menu déroulant pour mobile -->
          <div :class="isMenuOpen ? 'block bg-gray-700' : 'hidden'">
              <!-- Liste des liens dans le menu mobile -->
              <ul class="flex flex-col gap-4 py-4 px-6 text-sm">
                  <li><NuxtLink class="hover:text-gray-300" to="/">Accueil</NuxtLink></li>
                  <li><NuxtLink class="hover:text-gray-300" to="/">Product</NuxtLink></li>
                  <li><NuxtLink class="hover:text-gray-300" to="/">Pricing</NuxtLink></li>
                  <li><NuxtLink class="hover:text-gray-300" to="/">Blog</NuxtLink></li>
                  <li><NuxtLink class="hover:text-gray-300" to="/">Contact</NuxtLink></li>
              </ul>
          </div>
      </header>

      <!-- Contenu principal -->
      <div class="flex flex-col items-center justify-center text-center text-white mb-4">
          <!-- Titre principal -->
          <h1 class="text-4xl md:text-4xl lg:text-6xl font-bold mt-20 lg:w-1/2 md:w-full w-4/5">
              The best products start with Figma
          </h1>
          <!-- Texte descriptif -->
          <p class="text-lg md:text-2xl md:w-1/2 w-4/5 mb-20 mt-6">
              Most calendars are designed for teams. Slate is designed for freelancers.
          </p>
          <!-- Bouton d'appel à l'action -->
          <button class="px-16 py-3 text-white hover:bg-blue-700 transition rounded-full bg-[#2091f9] mb-56">
              Try For Free
          </button>
      </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  // Déclaration d'une variable réactive pour gérer l'état d'ouverture du menu mobile
  const isMenuOpen = ref(false);

  // Fonction pour basculer l'état d'ouverture/fermeture du menu mobile
  const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
  };
</script>
