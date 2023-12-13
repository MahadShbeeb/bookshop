<script  setup>

import { useBooksStore } from '../store/books.js';
const bookStore = useBooksStore()
const {key}=useRoute().params

await bookStore.fetchAuthorByKey(key)

</script>

<template>
    <div class="w-full h-screen container">
        <AuthorDetails :author="bookStore.authorByKey"/>
    </div> 
</template>

