<template>
   <section class="">
  <div class="container grid md:grid-cols-2 sm:grid-cols-1 gap-5 h-full px-6 py-24">
    <div class="first-image order-1 bg-center bg-cover max-w-full h-screen
      g-6 ">     
    </div>
    <div class="order-2 pt-20 px-10">
        <form>
            <div class="sm:text-3xl text-4xl font-light text-center
             text-gray-900 mb-12 font-sans">
            Login 
        </div>
             <div>
                 <input type="username" class="focus:outline-none border-b w-full pb-2
                  border-[#F9A826] placeholder-gray-500 my-8"
                  v-model="username"  placeholder="User Name "/>
            </div>
            <div class="">
                <input type="password" class="focus:outline-none border-b w-full pb-2
                 border-[#F9A826] placeholder-gray-500 mb-8" 
                 v-model="password" placeholder="Password " />
            </div>

            <div class="flex justify-center my-6">
                <button @click="onSubmit" class=" rounded-full  p-3 w-full sm:w-56 
                bg-[#F9A826] hover:bg-[#f9a826e5]  text-white text-lg font-semibold " >
                    Login  
                </button>
            </div>
        </form>
      </div>
  </div>
</section>
</template>

<script setup>
definePageMeta({
    layout:'books'
})
</script>

<style scoped>
.first-image{
  background-image: url('assets/images/creativethinking.png') ;
  
}
</style>