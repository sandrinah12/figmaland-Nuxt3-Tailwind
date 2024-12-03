<template>
  <!-- Conteneur principal avec des marges verticales -->
  <div class="container py-16 pt-24">

      <!-- Section Titre -->
      <div class="text-center mb-12 order-1">
          <!-- Titre principal -->
          <h2 class="text-heading text-4xl h4-section font-normal mb-10">Contact Us</h2>
          <!-- Description sous le titre -->
          <p class="h4-section text-lg">
              Most calendars are designed for teams. Slate is designed for freelancers.
          </p>
      </div>

      <!-- Section Contenu principal organisé en grille -->
      <div class="grid grid-cols-1 lg:grid-cols-[2fr_4fr] gap-12 max-w-7xl mx-auto px-4">

          <!-- Formulaire de Contact -->
          <div class="bg-white p-8 border rounded-2xl shadow-lg md:order-2 order-3">
              <!-- Titre du formulaire -->
              <h3 class="text-heading text-xl text-center font-bold mb-8">Contact Us</h3>
              <!-- Formulaire avec des champs bien espacés -->
              <form class="space-y-8">
                  <!-- Champ Nom -->
                  <input
                      type="text"
                      placeholder="Your Name"
                      class="w-full px-4 py-3 border rounded-full bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-gray-100 text-xs placeholder:text-black"
                  />
                  <!-- Champ Email -->
                  <input
                      type="email"
                      placeholder="Your Email"
                      class="w-full px-4 py-3 border rounded-full bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-gray-100 text-xs placeholder:text-black"
                  />
                  <!-- Champ Message -->
                  <textarea
                      placeholder="Your Message"
                      rows="4"
                      class="w-full px-4 py-3 border bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-gray-100 text-xs placeholder:text-black"
                  ></textarea>
                  <!-- Bouton d'envoi -->
                  <button
                      type="submit"
                      class="float-left w-1/2 bg-blue-500 text-white px-4 py-1 pb-2 md:px-6 md:py-3 rounded-full hover:bg-blue-600"
                  >
                      Send
                  </button>
              </form>
          </div>

          <!-- Informations et Carte -->
          <div class="md:order-3 order-2">
              <!-- Informations de contact avec des icônes -->
              <div class="grid grid-cols-1 md:grid-cols-3 gap-2 mb-12">
                  <!-- Adresse -->
                  <div class="flex justify-start md:flex-col flex-row items-start md:gap-2 gap-1 md:items-center">
                      <Icon name="material-symbols:location-on-outline" style="color: #2091f9;" mode="svg" size="25" />
                      <p class="h4-section text-center w-9/12 md:w-auto">
                          6386 Spring St undefined Anchorage, Georgia 12473 United States
                      </p>
                  </div>
                  <!-- Téléphone -->
                  <div class="flex justify-start md:flex-col flex-row items-start md:gap-2 gap-1 md:items-center">
                      <Icon name="material-symbols:phone-android-rounded" style="color: #2091f9;" mode="svg" size="25" />
                      <p class="h4-section text-center">(843) 555-0130</p>
                  </div>
                  <!-- Email -->
                  <div class="flex justify-start md:flex-col flex-row items-start md:gap-2 gap-1 md:items-center">
                      <Icon name="material-symbols:mail-outline" style="color: #2091f9;" mode="svg" size="25" />
                      <p class="h4-section text-center">willie.jennings@example.com</p>
                  </div>
              </div>

              <!-- Image de la carte -->
              <div class="mb-10 hidden md:block">
                  <img
                      src="/map.png"
                      alt="Map"
                      class="md:w-3/6 m-auto object-cover rounded-lg shadow-lg"
                  />
              </div>

              <!-- Icônes des réseaux sociaux -->
              <ul class="hidden md:flex gap-8 text-sm ml-auto">
                  <li><Icon name="fa-twitter" style="color: #2091f9;" mode="svg" size="25"></Icon></li>
                  <li><Icon name="fa:facebook-official" style="color: #2091f9;" mode="svg" size="25"></Icon></li>
                  <li><Icon name="fa:linkedin-square" style="color: #2091f9;" mode="svg" size="25"></Icon></li>
              </ul>
          </div>
      </div>
  </div>
</template>
