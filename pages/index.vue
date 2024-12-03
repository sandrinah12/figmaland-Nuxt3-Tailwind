<template>
    <!-- Conteneur principal pour toute la section -->
    <div class="container">

        <!-- Grid principale : utilisée pour organiser le contenu en lignes et colonnes -->
        <div class="grid grid-flow-row auto-rows-max md:pt-20">

            <!-- Section d'en-tête des "Features" -->
            <div class="text-center mb-10">
                <h2 class="text-4xl font-normal mb-4">Features</h2>
                <p class="text-lg text-gray-600">
                    Most calendars are designed for teams. Slate is designed for freelancers.
                </p>
            </div>

            <!-- Image responsive pour mobile uniquement -->
            <div class="md:hidden mb-10">
                <img src="/body-video-1.png" alt="">
            </div>

            <!-- Grille des fonctionnalités (Features Grid) -->
            <div class="grid md:grid-cols-3 gap-8 p-10">
                <!-- Fonctionnalité 1 -->
                <div class="text-center">
                    <div class="flex justify-center mb-1">
                        <!-- Icône représentant la fonctionnalité -->
                        <div class="text-blue-500 rounded-full p-3">
                            <Icon name="material-symbols:draw-abstract-sharp" mode="svg" size="50"></Icon>
                        </div>
                    </div>
                    <h3 class="text-lg font-bold mb-2 text-[#252B42]">OpenType features Variable fonts</h3>
                    <p class="text-gray-600">
                        Slate helps you see how many more days you need to work to reach your financial goal.
                    </p>
                </div>

                <!-- Fonctionnalité 2 -->
                <div class="text-center">
                    <div class="flex justify-center mb-1">
                        <div class="text-blue-500 rounded-full p-3">
                            <Icon name="material-symbols:draw" mode="svg" size="50"></Icon>
                        </div>
                    </div>
                    <h3 class="text-lg font-bold mb-2 text-[#252B42]">Design with real data</h3>
                    <p class="text-gray-600">
                        Slate helps you see how many more days you need to work to reach your financial goal.
                    </p>
                </div>

                <!-- Fonctionnalité 3 -->
                <div class="text-center">
                    <div class="flex justify-center mb-1">
                        <div class="text-blue-500 rounded-full p-3">
                            <Icon name="ic:baseline-brush" mode="svg" size="50"></Icon>
                        </div>
                    </div>
                    <h3 class="text-lg font-bold mb-2 text-[#252B42]">Fastest way to take action</h3>
                    <p class="text-gray-600">
                        Slate helps you see how many more days you need to work to reach your financial goal.
                    </p>
                </div>
            </div>

            <!-- Section vidéo pour les grands écrans -->
            <div class="mt-16 md:block hidden">
                <img src="/video-screen.png" alt="Video Thumbnail" class="rounded-lg">
            </div>
        </div>

        <!-- Section d'organisation rapide -->
        <div class="grid md:grid-cols-2 pt-20">
            <div class="md:text-left text-center md:w-1/2 w-4/5 m-auto md:m-0 mb-8">
                <h2 class="text-4xl font-normal text-[#252B42] mb-6">Fastest way to organize</h2>
                <p class="h4-section text-lg mb-10 md:mb-0">Most calendars are designed for teams.</p>
                <p class="mb-8 h4-section hidden md:block text-lg">Slate is designed for freelancers.</p>
                <!-- Bouton d'appel à l'action -->
                <Button text="Try for free" />
            </div>
            <div>
                <!-- Image d'accompagnement -->
                <img src="/img-ecran.png" alt="" class="md:h-3/4 h-auto">
            </div>
        </div>

        <!-- Section "At your fingertips" -->
        <div class="grid md:grid-cols-2 pt-20">
            <div class="md:order-1 order-2">
                <!-- Image pour les grands écrans -->
                <img src="/left-img.png" alt="" class="md:h-3/4 h-auto">
            </div>
            <div class="md:order-2 order-1 md:text-left text-center m-auto md:m-0">
                <div class="hidden md:block md:w-1/2 w-4/5">
                    <h3 class="text-heading text-sm font-bold mb-1">At your fingertips</h3>
                    <h2 class="text-heading text-4xl h4-section font-normal mb-6">Lighting fast prototyping</h2>
                </div>
                <div class="block md:hidden">
                    <h3 class="text-heading text-sm font-bold mb-1">At your fingertips</h3>
                    <h2 class="text-4xl font-normal text-heading mb-6">Newsletter</h2>
                    <p class="h4-section text-lg mb-10 md:mb-0">Most calendars are designed for teams.</p>
                    <p class="mb-8 h4-section hidden md:block text-lg">Slate is designed for freelancers.</p>
                </div>

                <!-- Formulaire d'inscription à la newsletter -->
                <div class="order-3 md:order-2 hidden md:block">
                    <p class="text-heading font-bold">Subscribe to our newsletters</p>
                    <p class="mb-8">Available exclusively on Figmaland</p>
                    <form action="#">
                        <div class="flex items-center justify-center gap-4">
                            <input
                                type="email"
                                placeholder="Your Email"
                                class="w-full px-4 py-3 border rounded-full bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-gray-100 text-xs placeholder:text-black"
                            />
                            <Button text="Subscribe" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Composants globaux inclus -->
    <Partner />
    <Testimonials />
    <Pricing />
    <ContactUs />
</template>

<script setup lang="ts">
    // Définition des métadonnées de la page
    definePageMeta({
        layout: "home", // Spécifie que cette page utilise le layout "home"
    });
</script>
