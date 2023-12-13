<template>
    <div class=" pt-20 flex flex-row justify-center items-center">
<h1 class="text-xl text-center font-semibold text-gray-900 mb-10 mt-10 
  sm:text-md lg:text-2xl xl:text-2xl px-10">Search for authors :</h1>
<form @submit.prevent="onSubmit" class="flex justify-center   ">
       
     <div class='max-w-full mx-auto'>
    <div class="relative border-2 border-gray-900 flex items-center w-full h-12 
    rounded-lg focus-within:shadow-lg
     bg-white overflow-hidden">
     <input @keyup.enter="onSearch" v-model="searchedInput"
        class="peer h-full w-full outline-none text-sm mx-5 text-gray-700 pr-2"
        type="text"
        id="search"
        placeholder="Search for author.." /> 
        <div class="grid place-items-center h-full w-12 text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>

        
    </div>
</div>
       </form>
    </div>
</template>

<script setup>
import { useBooksStore } from '../store/books.js';
const bookStore = useBooksStore()
const router = useRouter()
let searchedInput = '';


let onSearch=()=>{
router.push({ path: "/authors/search" });
}
let onSubmit = async() =>{
await bookStore.fetchSearchedAuthors(searchedInput)
}


</script>
