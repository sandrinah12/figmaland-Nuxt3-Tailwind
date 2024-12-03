<template>
    <div class="grid shadow bg-gray-40 pt-20 text-center">
        <img src="https://via.placeholder.com/600x400" alt="" class=" rounded-full"/>
        <ul>
            <li class=" text-xs font-normal">{{ user.name }}</li>
            <li class=" text-xs font-normal">{{ user.username }}</li>
            <li class=" text-sm font-bold">{{ user.email }}</li>
            <li class=" text-sm font-bold">{{ user.phone }}</li>
            <a :href="getFullUrl(user.website)" target="_blank" rel="noopener noreferrer">Site web</a>
        </ul>
    </div>
    <div class="container">
        <h1 class="text-2xl font-bold mb-4">Adresse</h1>
        <p>{{ user.address.street }}, {{ user.address.suite }}</p>
        <p>{{ user.address.city }}, {{ user.address.zipcode }}</p>

        <!-- Carte Google -->
        <GMapMap
        :center="{ lat: parseFloat(user.address.geo.lat), lng: parseFloat(user.address.geo.lng) }"
        :zoom="15"
        style="width: 100%; height: 400px"
        >
            <GMapMarker
                :position="{ lat: parseFloat(user.address.geo.lat), lng: parseFloat(user.address.geo.lng) }"
            />
        </GMapMap>
    </div>



</template>

<script setup>
const route = useRoute()
const {data:user} = useFetch(() => "https://jsonplaceholder.typicode.com/users/"+route.params.id)

function getFullUrl(website) {
    if (!website.startsWith('http://') &&!website.startsWith('https://')) {
        return `http://${website}`;
    }
    return website;
}

</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
}
</style>