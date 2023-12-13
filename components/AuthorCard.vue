<template>
    <div class="border-2 border-gray-900 shadow-[4px_4px_2px_2px_rgba(10,18,18)]
    duration-500 hover:scale-105 relative flex max-w-[30rem] flex-row rounded-none
  bg-white text-gray-700 ">
    
    <div class="flex flex-col p-2 m-0 text-gray-700 rounded-none ">
    <img class=" object-contain h-48 w-50 " 
    :src="`https://covers.openlibrary.org/a/olid/${author.key.split('/').slice(-1)}-M.jpg`"/>

  </div>
  <div class="flex flex-col p-6">
    <h4 class="block font-sans text-2xl  font-semibold text-blue-gray-900 truncate
    ">{{ author.name }}</h4>
    <p class="block mt-3 font-sans text-md text-gray-700">{{ author.top_work }}</p>
    <p class="block mt-3 font-sans text-sm text-gray-600">{{ author.work_count }} Books</p>
    <p class="block mt-3 font-sans text-sm text-gray-600">
    {{ author.top_subjects[0] }}</p>
    <NuxtLink :to="`/authors/${author.key}`" 
    class="block mt-3 font-sans text-sm text-sky-800
     hover:text-gray-500">more details</NuxtLink>
</div>

</div>
</template>

<script setup>
const {author}=defineProps(['author']);

import { useBooksStore } from '../store/books.js';
const bookStore = useBooksStore()

</script>

<style scoped>


</style>