<script setup>

const {book}=defineProps(['book']);

import { useBooksStore } from '../store/books.js';
const bookStore = useBooksStore()

let authorKey=book.authors?book.authors[0]["author"][ "key"]:'';


await bookStore.fetchAuthorName(authorKey)
await bookStore.fetchBookCoverByTitle(book.title)

let img = bookStore.imgIsbn ? 'https://covers.openlibrary.org/b/isbn/'+bookStore.imgIsbn+'-M.jpg'
:'https://images.unsplash.com/photo-1571167530149-c1105da4c2c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80';

let description = book.description ? book.description :'Sorry,there is no bio';

</script>

<template>
        <div>
            <div class="card absolute ">
            <div class="grid md:grid-cols-2 sm:grid-cols-1 gap-10">
                <div class="p-7 order-1">
                    <img :src="img" class="h-full object-center mx-auto">
                </div>
                <div class="p-7 order-2 text-center ">
                    <h1 class="mt-6 text-2xl font-semibold text-gray-950 sm:mt-8 
                    sm:text-xl lg:text-3xl xl:text-4xl">{{ book.title }}</h1>
                    <p class="font-md  my-7 text-gray-700">by 
                   <NuxtLink :to="authorKey" class="underline text-sky-900 ">
                    {{ bookStore.authorName }}</NuxtLink></p>
                    <h3 class="mt-2 text-gray-600 sm:mt-4 sm:text-xl my-4">Book subjects : </h3>
                    <hr class="mb-4">
                    <span  v-for="(subject,index) in book.subjects.slice(0,10) " :key="index">
                    <p class=" inline-block font-xs text-gray-800"> {{subject}} ,</p>
                    </span>
                    <h3 class="mt-2 text-gray-600 sm:mt-4 sm:text-xl my-4">Book summary : </h3>
                    <hr>
                    <p class="my-4 text-gray-800">{{ description }} </p>                    
                </div>
            </div>           
        </div>
        </div>
</template>



