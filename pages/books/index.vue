<script setup>
import { useBooksStore } from '../store/books.js';
const bookStore = useBooksStore()

await bookStore.fetchBooksBySubject('accessible_book')
const classicBooks = bookStore.booksBySubject

await bookStore.fetchBooksBySubject('ancient_civilization')
const ancientCivilizationBooks = bookStore.booksBySubject

const slider = ref(null);
const secondSlider=ref(null);

const onSwiper = (swiper) => {
  slider.value = swiper;
};

const onSecondSwiper = (swiper) => {
  secondSlider.value = swiper;
};

const router = useRouter()
let searchedInput = '';


let onSearch=()=>{
router.push({ path: "/books/search" });
}
let onSubmit = async() =>{
await bookStore.fetchSearchedBook(searchedInput)
}



</script>
<template>

<div class="pt-5 mx-10 my-30">
   <div class=" pt-10 flex flex-row justify-center items-center">
<h1 class="text-xl text-center font-semibold text-gray-900 mb-10 mt-10 
  sm:text-md lg:text-2xl xl:text-2xl px-10">Search for books :</h1>
<form @submit.prevent="onSubmit" class="flex justify-center   ">
       
     <div class='max-w-full mx-auto'>
    <div class="relative border-2 border-gray-900 flex items-center w-full h-12 
    rounded-lg focus-within:shadow-lg
     bg-white overflow-hidden">
     <input @keyup.enter="onSearch" v-model="searchedInput"
        class=" h-full w-full outline-none text-sm mx-5 text-gray-700 pr-2"
        placeholder="Search for book.." /> 
        <div class="grid place-items-center h-full w-12 text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
             viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>

        
    </div>
</div>
       </form>
    </div>
 <div>
    <NuxtLink to="subjects/accessible_book">
         <h3 class=" text-xl font-md text-slate-900 mb-10 mt-10 text-start
  sm:text-xl lg:text-2xl xl:text-3xl uppercase px-10" >classic books</h3>
    </NuxtLink>
    <Swiper 
    :modules="modules"
    :slides-per-view="6"
    :space-between="5"
    centeredSlides: true,
    :pagination="{ clickable: true }"
    @swiper="onSwiper"
    :breakpoints="{200:{ slidesPerView:1 },300:{ slidesPerView:2 }, 1000:{ slidesPerView:3 } }">

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

<swiper-slide class="px-10" 
v-for="book in classicBooks['works']" :key="book.key">
  <div class="bg-white rounded-none ">
    <SubjectBookCard :book='book'/>
  </div>
  
</swiper-slide>

  </Swiper>
</div> 
<div>
    <NuxtLink to="subjects/ancient_civilization">
         <h3 class=" text-xl font-md text-slate-900 mb-10 mt-10 text-start
  sm:text-xl lg:text-2xl xl:text-3xl uppercase px-10" >ancient civilization books</h3>
    </NuxtLink>
    <Swiper
    :modules="modules"
    :slides-per-view="6"
    :space-between="5"
    :pagination="{ clickable: true }"
    @swiper="onSecondSwiper"
    :breakpoints="{200:{ slidesPerView:1 },300:{ slidesPerView:2 }, 1000:{ slidesPerView:3 } }">

    <div class="flex justify-between my-10 mx-0 ">
      <button @click.stop="secondSlider.slidePrev()" type="button" class="absolute top-0 start-0
       z-30 flex items-center justify-center h-full px-4 cursor-pointer group 
       focus:outline-none" data-carousel-prev>
        <span class="">
            <svg class="w-4 h-4 text-slate-900 text-light rtl:rotate-180"
             aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
        </span>
    </button>
    <button @click.stop="secondSlider.slideNext()" type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="">
            <svg class="w-4 h-4 text-slate-900 text-light text-xl rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
        </span>
    </button>
    </div>

<swiper-slide class="px-10" 
 v-for="book in ancientCivilizationBooks['works']" :key="book.key">
  <div class="bg-white rounded-none ">
    <SubjectBookCard :book='book'/>
  </div>
  
</swiper-slide>

  </Swiper>
</div> 
</div>

</template>



<style scoped>
.searchbox{
    padding: 20%;
}
</style>