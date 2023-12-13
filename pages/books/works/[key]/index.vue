<script  setup>


import { useBooksStore } from '../store/books.js';
const bookStore = useBooksStore()
const {key}=useRoute().params

await bookStore.fetchBookByKey(key)



</script>

<template>
    <div class="w-full h-screen container">
        <BookDetails :book="bookStore.bookByKey" />
    </div> 
</template>

