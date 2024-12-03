<template>
    <!-- Conteneur principal de la section des partenaires -->
    <div class="container">
        <!-- Section titre et description -->
        <div class="md:pt-8 pt-20 text-center mb-8">
            <!-- Titre principal de la section -->
            <h2 class="text-heading text-4xl h4-section font-normal mb-6">Partners</h2>
            <!-- Description en dessous du titre -->
            <p class="h4-section mb-4 text-lg">
                Most calendars are designed for teams. Slate is designed for freelancers.
            </p>

            <!-- Grille des partenaires -->
            <div class="grid grid-cols-1 sm:grid-cols-4 gap-0 py-10">
                <!-- Boucle pour afficher les logos des partenaires sur les écrans moyens et plus -->
                <div 
                    v-for="(partner, index) in partners" 
                    :key="index" 
                    class="hidden md:block p-4 md:p-0">
                    <!-- Image du logo -->
                    <img 
                        :src="partner.logo" 
                        :alt="partner.name" 
                        class="h-full object-fill" />
                </div>

                <!-- Boucle alternative pour afficher un sous-ensemble des partenaires sur les petits écrans -->
                <div 
                    v-for="(partner, index) in partners.slice(0,3)" 
                    :key="index" 
                    class="block md:hidden p-4 md:p-0">
                    <img 
                        :src="partner.logo" 
                        :alt="partner.name" 
                        class="h-full object-fill" />
                </div>
            </div>

            <!-- Bouton d'appel à l'action -->
            <Button text="Try for free" />
        </div>
    </div>
</template>

<script setup>
    // Tableau contenant les informations sur les partenaires
    // Chaque objet représente un partenaire avec son nom et le chemin de son logo
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
/* Style supplémentaire (optionnel) pour affiner l'apparence */
</style>
