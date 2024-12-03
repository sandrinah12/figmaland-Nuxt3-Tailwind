<template>
    <div class="container py-16 pt-24">
      <!-- Title Section -->
      <div class="text-center mb-12 order-1">
        <h2 class="text-heading text-4xl h4-section font-normal mb-10">Contact Us</h2>
        <p class="h4-section text-lg">
          Most calendars are designed for teams. Slate is designed for freelancers.
        </p>
      </div>
  
      <!-- Content Section -->
      <div class="grid grid-cols-1 lg:grid-cols-[2fr_4fr] gap-12 max-w-7xl mx-auto px-4">
        <!-- Form Section -->
        <div class="bg-white p-8 border rounded-2xl  shadow-lg md:order-2 order-3">
          <h3 class="text-heading text-xl text-center font-bold mb-8">Contact Us</h3>
          <form class="space-y-8">
            <input
              type="text"
              placeholder="Your Name"
              class="w-full px-4 py-3 border rounded-full bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-gray-100 text-xs placeholder:text-black "
            />
            <input
              type="email"
              placeholder="Your Email"
              class="w-full px-4 py-3 border rounded-full bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-gray-100 text-xs placeholder:text-black "
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              class="w-full px-4 py-3 border rounded-0 bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-gray-100 text-xs placeholder:text-black "
            ></textarea>
            <button
              type="submit"
              class=" float-left w-1/2 bg-blue-500 text-white px-4 py-1 pb-2 md:px-6 md:py-3 rounded-full hover:bg-blue-600"
            >
              Send
            </button>
          </form>
        </div>
  
        <!-- Info and Map Section -->
        <div class="md:order-3 order-2">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-2 mb-12" >
            <div class="flex justify-start md:flex-col flex-row items-start md:gap-2 gap-1 md:items-center">
              <Icon name="material-symbols:location-on-outline" style="color: #2091f9;" mode="svg" size="25"/>
              <p class="h4-section text-center w-9/12 md:w-auto">6386 Spring St undefined Anchorage, Georgia 12473 United States</p>
            </div>
            <div class="flex justify-start md:flex-col flex-row items-start md:gap-2 gap-1 md:items-center">
              <Icon name="material-symbols:phone-android-rounded" style="color: #2091f9;" mode="svg" size="25"/>
              <p class="h4-section text-center">(843) 555-0130</p>
            </div>
            <div class="flex justify-start md:flex-col flex-row items-start md:gap-2 gap-1 md:items-center">
              <Icon name="material-symbols:mail-outline" style="color: #2091f9;" mode="svg" size="25"/>
              <p class="h4-section text-center" >willie.jennings@example.com</p>
            </div>
          </div>
          <div class="mb-10 hidden md:block" >
            <img
              src="/map.png"
              alt="Map"
              class="md:w-3/6  m-auto object-cover rounded-lg shadow-lg"
            />
          </div>
          <ul class="hidden md:flex gap-8 text-sm ml-auto">
            <li><Icon name="fa-twitter" style="color: #2091f9;" mode="svg" size="25" ></Icon> </li>
            <li><Icon name="fa:facebook-official" style="color: #2091f9;" mode="svg" size="25"></Icon> </li>
            <li><Icon name="fa:linkedin-square" style="color: #2091f9;" mode="svg" size="25"></Icon></li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  /* Aucun JavaScript supplémentaire n'est nécessaire pour cette section */
  </script>
  
  <style scoped>
  /* Ajoutez des styles personnalisés si nécessaire */
  </style>
  