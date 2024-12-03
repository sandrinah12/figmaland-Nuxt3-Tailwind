<template>
    <!-- Composant Header : Affiche l'en-tête du site -->
    <!-- Généralement, ce composant contient la navigation principale (menu, logo, etc.). -->
    <Header />

    <!-- Balise <main> : Conteneur principal pour le contenu de la page -->
    <!-- Utilisation de <slot> : Permet d'insérer dynamiquement du contenu dans cette section -->
    <!-- Les composants ou éléments enfants injectés dans ce layout apparaîtront ici. -->
    <main>
        <slot />
    </main>

    <!-- Composant Footer : Affiche le pied de page du site -->
    <!-- Contient souvent des informations complémentaires (liens, copyright, contacts, etc.). -->
    <Footer />
</template>
