<script  setup>
import { useBooksStore } from '../store/books.js';
const bookStore = useBooksStore()

const {subject}=useRoute().params

await bookStore.fetchBooksBySubject(subject)


definePageMeta({
    layout:'books'
})

</script>

<template>
     <div class="w-full h-screen">
     <div v-if="bookStore.isLoading" class="w-full h-screen absolute bg-white 
    bg-opacity-60 z-10 flex items-center justify-center">
    <div class="flex items-center">
        <div class="flex items-center justify-center h-screen">
    <div class="relative">
        <div class="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-300"></div>
        <div class="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8
         border-[#F9A826] animate-spin">
        </div>
    </div>
</div>
    </div>
  </div>
   <h1 class="text-2xl font-light text-slate-900 mb-10 text-center
  sm:text-xl lg:text-3xl xl:text-4xl pt-10 mx-10 uppercase ">{{ subject }} BOOKS</h1>
<div class="inline-block py-20 px-10 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 
sm:grid-cols-1 gap-5 flex justify-center ">
   
    <div class="" v-for="book in bookStore.booksBySubject['works']" :key="book.key">
        <SubjectBookCard :book='book' />
    </div>
    </div>
   </div> 
</template>

