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
<div class="py-20 px-10 grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5 
flex justify-center ">

    <div class="" v-for="author in bookStore.authorsByName" :key="author.key">
        <AuthorCard :author='author' />
    </div>
    </div>
   </div>

</template>


<script setup>


import { useBooksStore } from '../store/books.js';
const bookStore = useBooksStore()


</script>

<style scoped>

</style>