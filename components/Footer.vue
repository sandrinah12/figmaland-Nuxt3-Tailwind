<template>
  <!-- Footer principal -->
  <!-- Utilisation de `sticky` pour garder le footer en bas de la page -->
  <footer class="sticky bg-[#252B42] text-white py-12">
      <!-- Conteneur principal du footer avec une grille -->
      <!-- `grid-cols-[2fr_2fr_2fr_4fr]` : Répartition personnalisée des colonnes -->
      <div class="container md:px-4 grid grid-cols-1 md:grid-cols-[2fr_2fr_2fr_4fr] gap-8">

          <!-- Section Pages -->
          <div class="flex flex-col items-center">
              <!-- Titre de la section -->
              <h3 class="text-lg font-bold mb-4">Pages</h3>
              <!-- Liste des liens des pages principales -->
              <ul class="space-y-2 text-gray-300 text-center md:text-left">
                  <li><a href="#" class="hover:text-white">Home</a></li>
                  <li><a href="#" class="hover:text-white">Product</a></li>
                  <li><a href="#" class="hover:text-white">Pricing</a></li>
                  <li><a href="#" class="hover:text-white">About</a></li>
                  <li><a href="#" class="hover:text-white">Contact</a></li>
              </ul>
          </div>

          <!-- Section Tomothy -->
          <div class="flex flex-col items-center">
              <!-- Titre de la section -->
              <h3 class="text-lg font-bold mb-4 md:mr-[50px]">Tomothy</h3>
              <!-- Liste des noms associés -->
              <ul class="space-y-2 text-gray-300 text-center md:text-left">
                  <li>Eleanor Edwards</li>
                  <li>Ted Robertson</li>
                  <li>Annette Russell</li>
                  <li>Jennie McKinney</li>
                  <li>Gloria Richards</li>
              </ul>
          </div>

          <!-- Section Jane Black -->
          <div class="flex flex-col items-center">
              <!-- Titre de la section -->
              <h3 class="text-lg font-bold mb-4 md:mr-[30px]">Jane Black</h3>
              <!-- Liste des noms associés -->
              <ul class="space-y-2 text-gray-300 text-center md:text-left">
                  <li>Philip Jones</li>
                  <li>Product</li>
                  <li>Colleen Russell</li>
                  <li>Marvin Hawkins</li>
                  <li>Bruce Simmons</li>
              </ul>
          </div>

          <!-- Section Contact -->
          <div class="flex flex-col md:items-baseline items-center">
              <!-- Liste des informations de contact -->
              <ul class="space-y-4 text-gray-300 text-center md:text-left mb-8">
                  <li class="flex items-start gap-4">
                      <!-- Icône d'adresse -->
                      <Icon name="material-symbols:location-on-outline" style="color: #fff;" mode="svg" size="25" />
                      7480 Mockingbird Hill undefined
                  </li>
                  <li class="flex items-start gap-4">
                      <!-- Icône de téléphone -->
                      <Icon name="material-symbols:phone-android-rounded" style="color: #fff;" mode="svg" size="25" />
                      (239) 555-0108
                  </li>
              </ul>

              <!-- Réseaux sociaux -->
              <ul class="flex gap-8 text-sm">
                  <li><Icon name="fa-twitter" style="color: #fff;" mode="svg" size="25"></Icon></li>
                  <li><Icon name="fa:facebook-official" style="color: #fff;" mode="svg" size="25"></Icon></li>
                  <li><Icon name="fa:linkedin-square" style="color: #fff;" mode="svg" size="25"></Icon></li>
              </ul>
          </div>
      </div>
  </footer>
</template>

<script setup>
/* Aucun JavaScript supplémentaire nécessaire */
</script>

<style scoped>
/* Ajoutez des styles personnalisés si nécessaire */
</style>
