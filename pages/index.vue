<template>
    <div class="container">
        <div class="grid grid-flow-row auto-rows-max md:pt-20">
            <div class="text-center mb-10">
                <h2 class="text-4xl font-normal mb-4">Features</h2>
                <p class="text-lg text-gray-600">
                    Most calendars are designed for teams. Slate is designed for freelancers.
                </p>
            </div>

            <div class="md:hidden mb-10 ">
                <img src="/body-video-1.png" alt="">
            </div>

            <!-- Features Grid -->
            <div class="grid md:grid-cols-3 gap-8 p-10 ">
            <!-- Feature 1 -->
            <div class="text-center">
                <div class="flex justify-center mb-1">
                    <div class="text-blue-500  rounded-full p-3">
                        <!-- Icon 3 (Placeholder SVG) -->
                        <Icon name="material-symbols:draw-abstract-sharp" mode="svg" size="50" ></Icon>
                    </div>
                </div>
                <h3 class="text-lg font-bold mb-2 text-[#252B42]">OpenType features Variable fonts</h3>
                <p class="text-gray-600">
                Slate helps you see how many more days you need to work to reach your financial goal.
                </p>
            </div>

            <!-- Feature 2 -->
            <div class="text-center">
                <div class="flex justify-center mb-1">
                    <div class="text-blue-500  rounded-full p-3">
                        <!-- Icon 3 (Placeholder SVG) -->
                        <Icon name="material-symbols:draw" mode="svg" size="50" ></Icon>
                    </div>
                </div>
                <h3 class="text-lg font-bold mb-2 text-[#252B42]">Design with real data</h3>
                <p class="text-gray-600">
                Slate helps you see how many more days you need to work to reach your financial goal.
                </p>
            </div>

            <!-- Feature 3 -->
            <div class="text-center">
                <div class="flex justify-center mb-1">
                    <div class="text-blue-500  rounded-full p-3">
                        <!-- Icon 3 (Placeholder SVG) -->
                        <Icon name="ic:baseline-brush" mode="svg" size="50" ></Icon>
                    </div>
                </div>
                <h3 class="text-lg font-bold mb-2 text-[#252B42]">Fastest way to take action</h3>
                <p class="text-gray-600">
                Slate helps you see how many more days you need to work to reach your financial goal.
                </p>
            </div>
            </div>

            <!-- Video Section -->
            <div class="mt-16 md:block hidden">
                <img
                src="/video-screen.png"
                alt="Video Thumbnail"
                class="rounded-lg"
                />
                <!-- Play Button -->
                <!-- <div class="absolute inset-0 flex items-center justify-center">
                <button class="bg-blue-500 text-white rounded-full p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-6.423-4.226A1 1 0 007 7.62v8.76a1 1 0 001.329.943l6.423-3.852a1 1 0 000-1.705z" />
                    </svg>
                </button>
                </div> -->
            </div>
        </div>
        <div class="grid md:grid-cols-2 pt-20 ">
            <div class="md:text-left text-center md:w-1/2 w-4/5 m-auto md:m-0 mb-8 ">
                <h2 class="text-4xl font-normal text-[#252B42] mb-6">Fastest way to organize</h2>
                <p class="h4-section text-lg mb-10 md:mb-0">Most calendars are designed for teams.</p>
                <p class="mb-8 h4-section hidden md:block text-lg">State is designed for freelancers.</p>
                <Button text="Try for free"/>
            </div>
            <div class="">
                <img src="/img-ecran.png" alt="" srcset="" class="md:h-3/4 h-auto  ">
            </div>
        </div>
        <div class="grid md:grid-cols-2 pt-20 ">
            <div class=" md:order-1 order-2">
                <img src="/left-img.png" alt="" srcset="" class="md:h-3/4 h-auto ">
            </div>
            <div class=" md:order-2 order-1 md:text-left text-center  m-auto md:m-0">
                <div class="hidden md:block md:w-1/2 w-4/5">
                    <h3 class="text-heading text-sm font-bold mb-1">At your fingertips</h3>
                    <h2 class="text-heading text-4xl h4-section font-normal mb-6 ">Lighting fast prototyping</h2>
                    
                </div>
                <div class="block md:hidden">
                    <h3 class="text-heading text-sm font-bold mb-1">At your fingertips</h3>
                    <h2 class="text-4xl font-normal text-heading mb-6">Newsletter</h2>
                    <p class="h4-section text-lg mb-10 md:mb-0">Most calendars are designed for teams.</p>
                    <p class="mb-8 h4-section hidden md:block text-lg">State is designed for freelancers.</p>
                </div>
                <div class="order-3 md:order-2 hidden md:block">
                    <p class="text-heading font-bold">Subscribe to our newsletters</p>
                    <p class="mb-8">Avalaible exclusivery on Figmaland</p>
                    <form action="#">
                        <!-- Formulaire -->
                        <div class="flex items-center justify-center gap-4">
                            <!-- Champ email -->
                            <input
                            type="email"
                            placeholder="Your Email"
                            class="w-full px-4 py-3 border rounded-full bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-gray-100 text-xs placeholder:text-black "
                            />

                            <!-- Bouton Subscribe -->
                            <Button text="Subscribe"/>
                        </div>
                    </form>
                </div>
            </div>
            <div class="block md:hidden order-3 md:order-2 pb-10 mt-8 text-center">
                <p class="text-heading font-bold">Subscribe to our newsletters</p>
                <p class="mb-8">Avalaible exclusivery on Figmaland</p>
                    <form action="#">
                        <!-- Formulaire -->
                        <div class="flex items-center justify-center space-x-4 md:flex-row flex-col md:gap-0 gap-4">
                            <!-- Champ email -->
                            <input
                            type="email"
                            placeholder="Your Email"
                            class="w-full px-4 py-3 border rounded-full bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-gray-100 text-xs placeholder:text-black "
                            />

                            <!-- Bouton Subscribe -->
                            <Button text="Subscribe" size="100%" left="0"/>
                        </div>
                    </form>
            </div>
        </div>
    </div>
    <Partner/>
    <Testimonials/>
    <Pricing/>
    <ContactUs/>
</template>

<script setup lang="ts">

    definePageMeta({
        layout: "home",
    });
</script>