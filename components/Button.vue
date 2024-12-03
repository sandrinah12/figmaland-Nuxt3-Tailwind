<template>
    <!-- Bouton principal avec des classes utilitaires pour le style par défaut -->
    <!-- `:style` permet de passer des styles dynamiques définis par les props -->
    <button
        class="px-7 pb-2 py-1 lg:px-16 lg:py-2 lg:pb-4 text-white hover:bg-blue-700 transition rounded-full"
        :style="{ backgroundColor: background, color: textColor, width: size, marginLeft: left }"
    >
        <!-- Affichage du texte du bouton passé en prop -->
        {{ text }}
    </button>
</template>

<script setup lang="ts">
    // Définition des props du composant
    defineProps({
        // Texte du bouton, par défaut "Try For Free"
        text: {
            type: String,
            default: 'Try For Free',
        },
        // Couleur d'arrière-plan du bouton, par défaut bleu (#2091f9)
        background: {
            type: String,
            default: '#2091f9',
        },
        // Couleur du texte du bouton, par défaut blanc (#ffffff)
        textColor: {
            type: String,
            default: '#ffffff',
        },
        // Taille (largeur) du bouton, par défaut "lg" (taille adaptative via CSS)
        size: {
            type: String,
            default: 'lg',
        },
        // Espacement à gauche (margin-left), par défaut 0
        left: {
            type: String,
            default: '0',
        },
    });
</script>
