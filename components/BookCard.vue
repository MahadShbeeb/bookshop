<template>
    <div class="border-2 border-gray-900 shadow-[3px_3px_0px_0px_rgba(10,18,18)] duration-500 
    hover:scale-105 relative flex max-w-[18rem] flex-col rounded-none bg-white text-gray-700 ">  
    <div class=" m-0 text-gray-700 rounded-none ">
    <img class=" object-contain h-60 w-80 " :src="img" /> 
  </div>
  <div class="p-6">
    <h4 class="block font-sans text-2xl font-semibold text-blue-gray-900 truncate">{{ book.title }}</h4>
    <p class="block mt-3 font-sans text-sm text-gray-700 uppercase">by {{ authorName }}</p>
    <!-- <p class="block mt-3 font-sans text-md text-gray-500"
    v-if="book.number_of_pages_median">{{ book.number_of_pages_median }} Pages</p> -->
  </div>
  <div class="flex items-center justify-between p-6">
    <div class="flex items-center  space-x-3">
      <Button class="border-2 border-gray-900 shadow-[3px_3px_0px_0px_rgba(10,18,18)]
        bg-yellow-500 px-3 py-1.5 text-gray-700 font-bold text-sm duration-500
          hover:scale-105">Buy it!</Button>
          <Button class="text-sm text-yellow-500 hover:text-yellow-300 px-4 py-2">
          <NuxtLink :to="`/books${book.key}`">details</NuxtLink></Button>
    </div>
    <!-- <Button @click="isFav=!isFav">
<svg :class="isFav?'text-red-500':'text-gray-300'" class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" stroke="currentColor" >
  <path strokeLinecap="round" strokeLinejoin="round"
  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>     
    </Button> -->
  </div>
</div>
</template>

<script setup>
const {book}=defineProps(['book']);

import { useBooksStore } from '../store/books.js';
const bookStore = useBooksStore()

await bookStore.fetchBookCoverByTitle(book.title)

let authorName = book.author_name?book.author_name[0]:'the author name is not available';

let img = book.isbn? 'https://covers.openlibrary.org/b/isbn/'+book.isbn[0]+'-M.jpg':''

</script>

<style scoped>


</style>