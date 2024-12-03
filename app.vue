<script setup lang="ts">
  // Déclaration d'une constante "version" avec une valeur numérique
  // Ce type de constante peut être utilisé pour gérer des versions de l'application,
  // des fonctionnalités, ou pour des métadonnées internes.
  const version = 4
</script>

<template>
  <!-- Conteneur principal de la structure de la page -->
  <div class="">
    <!-- NuxtLayout : Composant fourni par Nuxt.js pour gérer les layouts globaux -->
    <!-- Ce composant enveloppe la page actuelle avec un layout défini (par exemple, un header ou un footer partagé). -->
    <NuxtLayout>
      <!-- NuxtPage : Composant fourni par Nuxt.js pour afficher le contenu de la page actuelle -->
      <!-- Il rend le contenu spécifique à la route, tel que défini dans le dossier 'pages/'. -->
      <NuxtPage />  
    </NuxtLayout>
  </div>
</template>
