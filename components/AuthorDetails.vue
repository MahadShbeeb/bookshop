<script setup>
const {author}=defineProps(['author']);

import { useBooksStore } from '../store/books.js';
const bookStore = useBooksStore()

let authorBio = author.bio ? author.bio :'Sorry,there is no bio';

await bookStore.fetchAuthorName(author.key)
await bookStore.fetchAuthorsWorksByKey(author.key)


const slider = ref(null);
const onSwiper = (swiper) => {
  slider.value = swiper;
};
</script>

<template>
<div class="flex flex-col w-screen h-screen ">
        <div class="card  ">
            <div class="grid md:grid-cols-2 sm:grid-cols-1 gap-10">
                <div class=" flex items-center p-7 order-2">
                <img :src="`https://covers.openlibrary.org/a/olid/${author.key.split('/').slice(-1)}-M.jpg`" alt="author photo"
                class=" object-contain h-60 w-96 mx-auto">
                </div>
                <div class="p-7 order-1 mx-10">
                    <h1 class="mt-6 text-2xl font-semibold sm:mt-8 sm:text-xl lg:text-3xl
                    xl:text-4xl text-gray-950">{{ bookStore.authorName }}</h1>            
                    <p class="font-md  my-7 text-gray-900">{{author.birth_date}} - {{author.death_date}}</p>
                    <p class="font-md  my-7 text-gray-700"></p>
                    <h3 class="mt-2 text-gray-600 sm:mt-4 sm:text-xl my-4">Author bio : </h3>
                    <hr>
                    <p class="my-4">{{ authorBio }} </p> 
                    <h5 class="mt-2 text-gray-600 sm:mt-4 sm:text-xl my-4">Another sources : </h5>
                    <hr class="my-4">
                    <span v-for="(link,index) in author.links " :key="index">
                    <NuxtLink class="underline text-sky-900 " :to="link['url']">{{ link["title"] }}</NuxtLink>
                    </span>

                </div>
            </div>       
        </div>
<div class="pt-5 ">
<h1 class="pb-5  xl:text-4xl lg:text-3xl text-2xl sm:text-xl font-semibold text-slate-900 mb-10 text-center
  ">Another works by {{ bookStore.authorName }}: </h1>
<Swiper class="text-center swiper swiper-content"
    :modules="modules"
    :slides-per-view="6"
    :space-between="10"
    centeredSlides: true,
    :pagination="{ clickable: true }"
    @swiper="onSwiper"
    :breakpoints="{300:{ slidesPerView:1 },500:{ slidesPerView:2 },
      700:{ slidesPerView:3 },900:{ slidesPerView:4 }, 1000:{ slidesPerView:5 } }">

    <div class="flex justify-between my-10 mx-0 ">
      <button @click.stop="slider.slidePrev()" type="button" class="absolute top-0 start-0
       z-30 flex items-center justify-center h-full px-4 cursor-pointer group 
       focus:outline-none" data-carousel-prev>
        <span class="">
            <svg class="w-4 h-4 text-slate-900 text-light rtl:rotate-180"
             aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
        </span>
    </button>
    <button @click.stop="slider.slideNext()" type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="">
            <svg class="w-4 h-4 text-slate-900 text-light text-xl rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
        </span>
    </button>
    </div>

    
<swiper-slide class="swiper-slide" v-for="(work,index) in bookStore.authorsWorksByKey" :key="index">
      <AnotherWork :work="work" />
</swiper-slide>

  </Swiper>
        </div>
      
        </div>    

</template>

<style scoped>
.swiper-slide {
height: auto !important;
 width: auto;
}
.swiper-content {
height: 100% !important
}
.swiper{
  margin: 0 auto;
  overflow: visible;
}
</style>