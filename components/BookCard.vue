<template>
    <div class="border-2 border-gray-900 shadow-[4px_4px_2px_2px_rgba(10,18,18)]
     duration-500 hover:scale-105
    relative flex max-w-[18rem] flex-col rounded-none bg-white 
     text-gray-700 shadow-md">
  <div class="relative m-0  overflow-hidden text-gray-700 bg-transparent rounded-none ">
    <img class="w-80" src="https://images.unsplash.com/photo-1571167530149-c1105da4c2c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80" />
  </div>
  <div class="p-6">
    <h4 class="block font-sans text-2xl  font-semibold text-blue-gray-900">
      Book Title
    </h4>
    <p class="block mt-3 font-sans text-md text-gray-700">
      loram
    </p>
  </div>
  <div class="flex items-center justify-between p-6">
    <div class="flex items-center -space-x-3">
      <Button class="border-2 border-gray-900 shadow-[3px_3px_0px_0px_rgba(10,18,18)]
        bg-[#F9A826] px-3 py-1.5 text-gray-700 font-bold text-sm duration-500 hover:scale-105">
          Buy it!
        </Button>
    </div>
     <Button @click="isFav=!isFav">
<svg :class="isFav?'text-red-500':'text-gray-300'" class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" stroke="currentColor" >
  <path strokeLinecap="round" strokeLinejoin="round"
   d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>

      
     </Button>
  </div>
</div>
</template>

<script setup>
let isFav = ref(false);

</script>

<style scoped>

.book-image{
  background-image: url('assets/images/Mark.jpg') ;
}
</style>