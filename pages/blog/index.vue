<template>
    <h1>
        Blog
    </h1>
    <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 shadow mx-4 my-4" >
        <div  v-for="per in pers" :key="per.id" class="px-4 py-4 bg-slate-500 text-white rounded ">
            <!-- <NuxtLink :to="/blog/+ per.id"> -->
                <h2>{{ per.name }}</h2>
                <p>{{ per.email }}</p>
                <p>{{ per.address.street }}</p>
                <p>{{ per.address.city }}</p>
                <p>{{ per.address.zipcode }}</p>
                <p>{{ per.phone }}</p>
                <p>{{ per.website }}</p>
                <p>{{ per.company.name }}</p>
                <p>{{ per.company.catchPhrase }}</p>
                <p>{{ per.company.bs }}</p>
            <!-- </NuxtLink>     -->
            <!-- <NuxtLink :to="`/blog/${per.id}`">Voir</NuxtLink> -->
             <BaseBtnBlog :to="`/blog/${per.id}`" label ="Voir"  />
        </div>
    </div>
    </div>
    
</template>

<script setup>

const {data:pers} = useFetch('https://jsonplaceholder.typicode.com/users')

</script>