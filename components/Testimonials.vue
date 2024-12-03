<template>
    <!-- Conteneur principal : Regroupe toute la section des témoignages -->
    <div class="container">

        <!-- Section centrale : Structure et contenu des témoignages -->
        <div class="pt-20 text-center mb-20">
            <!-- Titre principal de la section -->
            <!-- Utilisation de classes utilitaires pour le style et la mise en forme -->
            <h2 class="text-heading text-4xl h4-section font-normal mb-10">Testimonials</h2>

            <!-- Logo d'une entreprise associée aux témoignages -->
            <!-- Centré horizontalement grâce à `m-auto` -->
            <div class="mb-8">
                <img src="/logos_ibm.png" alt="IBM Logo" class="m-auto">
            </div>

            <!-- Texte descriptif : Explique le contexte ou l'objectif des témoignages -->
            <!-- Responsive : Largeur limitée à 50% sur les écrans moyens et au-delà -->
            <p class="h4-section mb-8 md:w-1/2 w-full m-auto text-lg">
                Most calendars are designed for teams. Slate is designed for freelancers 
                who want a simple way to plan their schedule.
            </p>

            <!-- Bloc contenant une image et des informations sur l'auteur du témoignage -->
            <div class="mb-10 flex justify-center space-x-4">
                <!-- Image de la personne qui donne le témoignage -->
                <!-- Dimension ajustée automatiquement grâce à `w-auto` -->
                <img src="/person-testimonial.png" alt="Testimonial Author" class="w-auto" />

                <!-- Détails textuels sur l'auteur du témoignage -->
                <!-- Positionnés à gauche grâce à `text-left` -->
                <div class="text-left">
                    <h3 class="text-lg font-bold">Organize across</h3>
                    <h4 class="text-gray-600">UI Designer</h4>
                </div>
            </div>

            <!-- Bouton d'appel à l'action (CTA) -->
            <!-- Invité l'utilisateur à voir davantage de témoignages -->
            <Button text="More testimonials" />
        </div>
    </div>
</template>


