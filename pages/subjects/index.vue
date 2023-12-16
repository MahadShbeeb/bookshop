<template>
  <div>
<div class="pt-5 mx-10 my-30">
  <h1 class=" text-2xl font-semibold text-slate-900 mb-10 mt-10 text-start
  sm:text-xl lg:text-3xl xl:text-4xl" >Explore our subjects </h1>
<Swiper

    :modules="modules"
    :slides-per-view="6"
    :space-between="10"
    :pagination="{ clickable: true }"
    @swiper="onSwiper"
    :breakpoints="{100:{ slidesPerView:1 },300:{ slidesPerView:2 },500:{ slidesPerView:3 },
      700:{ slidesPerView:4 },900:{ slidesPerView:5 }, 1000:{ slidesPerView:6 } }">

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

    <swiper-slide v-for="(subject, index) in subjects" :key="index">
  <div class="bg-white rounded-none ">
    <NuxtLink :to="`/subjects/${subject}`" class="space-y-2 text-center" >
    <img :src="`https://openlibrary.org/static/images/categories/${subject}.svg`" alt="" 
    class="rounded-none object-contain h-40 w-60 ">
    <p class="uppercase font-md pt-5 text-gray-700  " >{{subject.replaceAll("_"," ")}}</p>
    <p class="font-light text-sm text-gray-500">{{ parseInt(Math.random() * 10000) }} Books</p>
    </NuxtLink>
  </div>
  
</swiper-slide>

  </Swiper>
</div>

  </div>
</template>

<script setup>
const slider = ref(null);
const onSwiper = (swiper) => {
  slider.value = swiper;
};

const subjects=['art','religion','science','fantasy','mystery_and_detective_stories',
'romance','plays','science_fiction','textbooks','medicine','history','recipes','biographies','music','children']

</script>

<style scoped>
.category{
  height: 450px;
}
</style>