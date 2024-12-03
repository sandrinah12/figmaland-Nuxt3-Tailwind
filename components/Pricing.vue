<template>
    <!-- Section principale avec un fond sombre et du texte blanc -->
    <div class="bg-[#252B42] text-white py-16">
        <!-- Conteneur central pour gérer la largeur et aligner le contenu -->
        <div class="container">

            <!-- Section Titre -->
            <div class="text-center mb-12">
                <!-- Titre principal de la section -->
                <h2 class="text-white text-4xl font-normal mb-10">Pricing</h2>
                <!-- Description sous le titre -->
                <p class="text-gray-300 text-lg">
                    Most calendars are designed for teams. Slate is designed for freelancers.
                </p>
            </div>

            <!-- Cartes de tarification -->
            <!-- Grille responsive pour organiser les cartes en une colonne sur mobile et trois colonnes sur écran moyen ou plus -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

                <!-- Plan Gratuit -->
                <div class="bg-white text-black p-8 rounded-lg shadow-lg text-center">
                    <!-- Nom du plan -->
                    <h3 class="text-xl font-bold mb-4">FREE</h3>
                    <!-- Description courte -->
                    <p class="text-gray-600 mb-6">Organize across all apps by hand</p>
                    <!-- Prix -->
                    <p class="text-5xl font-bold mb-4">0 <span class="text-lg">$</span></p>
                    <!-- Fréquence de facturation -->
                    <p class="text-gray-600 mb-6">Per Month</p>
                    <!-- Liste des fonctionnalités -->
                    <ul class="mb-6 space-y-2">
                        <li>Pricing Feature</li>
                        <li>Pricing Feature</li>
                        <li>Pricing Feature</li>
                        <li>Pricing Feature</li>
                        <li>Pricing Feature</li>
                    </ul>
                    <!-- Bouton d'action pour commander ce plan -->
                    <Button text="Order Now" />
                </div>

                <!-- Plan Standard -->
                <!-- Ajout d'un style spécial pour mettre en avant ce plan (fond bleu, texte blanc et effet d'agrandissement) -->
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
                    <!-- Bouton avec style personnalisé (fond blanc et texte bleu) -->
                    <Button text="Order Now" background="#fff" textColor="#2091F9" />
                </div>

                <!-- Plan Business -->
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
                    <Button text="Order Now" />
                </div>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
//  Aucune logique dans ce fichier, car la mise en page est statique. 
</script>

<style scoped>
/* Style personnalisé optionnel, peut être utilisé pour ajouter ou ajuster les éléments. */
</style>
