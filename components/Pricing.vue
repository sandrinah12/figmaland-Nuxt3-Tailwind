<template>
    <div class="bg-[#252B42] text-white py-16">
      <div class="container">
        <!-- Section Title -->
        <div class="text-center mb-12">
            <h2 class="text-white text-4xl font-normal mb-10">Pricing</h2>
            <p class="text-gray-300 text-lg">
            Most calendars are designed for teams. Slate is designed for freelancers.
            </p>
        </div>
    
        <!-- Pricing Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <!-- Free Plan -->
            <div class="bg-white text-black p-8 rounded-lg shadow-lg text-center">
            <h3 class="text-xl font-bold mb-4">FREE</h3>
            <p class="text-gray-600 mb-6">Organize across all apps by hand</p>
            <p class="text-5xl font-bold mb-4">0 <span class="text-lg">$</span></p>
            <p class="text-gray-600 mb-6">Per Month</p>
            <ul class="mb-6 space-y-2">
                <li>Pricing Feature</li>
                <li>Pricing Feature</li>
                <li>Pricing Feature</li>
                <li>Pricing Feature</li>
                <li>Pricing Feature</li>
            </ul>
            <Button text="Order Now"/>
            </div>
    
            <!-- Standard Plan -->
            <div class="bg-blue-500 text-white p-8 rounded-lg shadow-lg text-center transform scale-105">
            <h3 class="text-xl font-bold mb-4">STANDARD</h3>
            <p class="text-gray-300 mb-6">Organize across all apps by hand</p>
            <p class="text-5xl font-bold mb-4">10 <span class="text-lg">$</span></p>
            <p class="text-gray-300 mb-6">Per Month</p>
            <ul class="mb-6 space-y-2">
                <li>Pricing Feature</li>
                <li>Pricing Feature</li>
                <li>Pricing Feature</li>
                <li>Pricing Feature</li>
                <li>Pricing Feature</li>
            </ul>
            <Button text="Order Now" background="#fff" textColor="#2091F9"/>
            </div>
    
            <!-- Business Plan -->
            <div class="bg-white text-black p-8 rounded-lg shadow-lg text-center">
            <h3 class="text-xl font-bold mb-4">BUSINESS</h3>
            <p class="text-gray-600 mb-6">Organize across all apps by hand</p>
            <p class="text-5xl font-bold mb-4">99 <span class="text-lg">$</span></p>
            <p class="text-gray-600 mb-6">Per Month</p>
            <ul class="mb-6 space-y-2">
                <li>Pricing Feature</li>
                <li>Pricing Feature</li>
                <li>Pricing Feature</li>
                <li>Pricing Feature</li>
                <li>Pricing Feature</li>
            </ul>
            <Button text="Order Now"/>
            </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  </script>
  
  <style scoped>
  /* Style personnalisé optionnel */
  </style>
  