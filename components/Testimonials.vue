<template>
    <div class="container">
        <div class="pt-20 text-center mb-20">
            <!-- Title -->
            <h2 class="text-heading text-4xl h4-section font-normal mb-10">Testimonials</h2>
            <div class="mb-8">
                <img src="/logos_ibm.png" alt="" class="m-auto">
            </div>
            <p class="h4-section mb-8 md:w-1/2 w-full m-auto text-lg">
                Most calendars are designed for teams. Slate is designed for freelancers 
                who want a simple way to plan their schedule.
            </p>
            <!-- <div class="m-auto mb-10 grid gap-4 grid-cols-2"> -->
            <div class="mb-10 flex justify-center space-x-4">
                <img src="/person-testimonial.png" alt="" class="w-auto" />
                <!-- <div class="">
                    <img src="/person-testimonial.png" alt="" class="w-auto ml-auto" />
                </div> -->
                <!-- Partners -->
                <div class="text-left">
                    <h3>Organize across</h3>
                    <h4>Ui designer</h4>
                </div>
            </div>
            <!-- CTA -->
            <Button text="More testimonials"/>
        </div>
    </div>
  </template>
  
  <script setup>
  const partners = [
    { name: "Google", logo: "/partner/partner-1.png" },
    { name: "Amazon", logo: "/partner/partner-2.png" },
    { name: "Microsoft", logo: "/partner/partner-3.png" },
    { name: "Uber", logo: "/partner/partner-4.png" },
    { name: "Dropbox", logo: "/partner/partner-5.png" },
    { name: "Google2", logo: "/partner/partner-6.png" },
    { name: "Uber2", logo: "/partner/partner-7.png" },
    { name: "Amazon2", logo: "/partner/partner-8.png" },
  ];
  </script>
  
  <style scoped>
  /* Ajout optionnel pour plus de style */
  </style>
  