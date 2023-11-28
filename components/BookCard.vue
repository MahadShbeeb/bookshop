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
      Book Category
    </h4>
    <p class="block mt-3 font-sans text-md text-gray-700">
      loram
    </p>
  </div>
  <div class="flex items-center justify-between p-6">
    <div class="flex items-center -space-x-3">
      <Button class="border-2 border-gray-900 shadow-[3px_3px_0px_0px_rgba(10,18,18)]
        bg-[#F9A826] px-3 py-1.5 text-gray-700 font-bold text-sm duration-500 hover:scale-105">
          Explore
        </Button>
    </div>
  </div>
</div>
</template>

<script setup>

</script>

<style scoped>

.book-image{
  background-image: url('assets/images/Mark.jpg') ;
}
</style>