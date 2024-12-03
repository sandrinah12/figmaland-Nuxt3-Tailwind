import VueGoogleMaps from "@fawmi/vue-google-maps";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGoogleMaps, {
    load: {
      key: "AIzaSyAtYWHVLHKVgK0jg8Qe89Tei8rvpuQ7dCk", // Remplacez par votre clé API
    },
  });
});
