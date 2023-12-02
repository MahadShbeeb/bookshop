<template>
  <nav class="border-b-2 border-gray-900">
      <div class="container mx-auto px-6 py-5 flex justify-between items-center">
        <NuxtLink class="font-bold text-2xl lg:text-xl duration-500 hover:scale-105" to="/">
          BOOKSHOP
        </NuxtLink>
        <div class="block lg:hidden" @click="isOpen=!isOpen">
          <button class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div class="hidden lg:block ">
        <div class="w-full max-w-xs xl:max-w-lg 2xl:max-w-2xl bg-gray-100 rounded-md hidden xl:flex items-center">
      <select class="outline-none bg-transparent uppercase font-semibold text-sm p-4 mr-4" name="" id="">
        <option>all categories</option>

      </select>
      <input class="border-l outline-none border-gray-300 bg-transparent font-semibold text-sm pl-4"
       type="text" v-model="searchedInput" placeholder="I'm searching for ...">
      <svg class="ml-auto h-5 px-4 text-gray-500" aria-hidden="true" focusable="false" 
      data-prefix="far" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 512 512" >
        <path fill="currentColor" d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"></path></svg>
    </div>     
        </div>
         <NuxtLink to="/login"> </NuxtLink>        
      </div>
    </nav>

    <div :class="isOpen ?'block':'hidden'">
        <div  class="navbar-menu relative z-50 " >
		<div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
		<nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
			<div class="flex items-center mb-8">
				<NuxtLink class="mr-auto text-2xl font-bold  
                lg:text-xl duration-500 hover:scale-105" to="/">
					BOOKSHOP
				</NuxtLink>
				<button class="navbar-close" @click="isOpen=false">
					<svg class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
					</svg>
				</button>
			</div>
      
      <div>
        <select class="outline-none bg-transparent uppercase font-semibold text-sm p-4 mr-4" name="" id="">
        <option>all categories</option>

      </select>
      </div>

      <div class="mt-auto">
				 
      <div class=" bg-gray-100 rounded-md flex items-center">
        <input class="border-l mt-5 mb-5  outline-none border-gray-300 bg-transparent font-semibold text-sm pl-4"
       type="text" v-model="searchedInput" placeholder="I'm searching for ...">
      <svg class="ml-auto mt-2 h-5 px-4 text-gray-500" aria-hidden="true" focusable="false" 
      data-prefix="far" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 512 512" >
        <path fill="currentColor" d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"></path></svg>
    
      </div>
			</div>
			
		</nav>
  
 
	        </div>
        </div>
<div>
  <slot/>
</div>

<div class="border-t-2 border-gray-900 ">
 <section class="bg-gray-50 ">
    <div class=" max-w-screen-xl  px-4 py-12 mx-auto space-y-8  sm:px-6 lg:px-8">
        <footer class="flex flex-wrap justify-center -mx-5 -my-2">
            <div class="px-5 py-2" v-for="(item,index) in footerItems" :key="index" >
                <NuxtLink :to="`/${item.link}`"
                class="text-base leading-6 text-gray-500 hover:text-gray-900">
                    {{item.name}}
                </NuxtLink>
            </div> 
            
        </footer> 
    </div>
</section>
    </div>
   
</template>

<script setup>
import { useBooksStore } from '../store/books.js';
const bookStore = useBooksStore()
let searchedInput=ref('');
let isOpen = ref(false);

console.log(searchedInput)

// await bookStore.fetchSearchedBook(searchedInput)

const footerItems = [
	{
        name: "Home",
        link: "",
	},
    {
        name: "Books",
        link: "/books",
	},
    {
        name: "About us",
        link: "",
	},
    {
        name: "Pricing",
        link: "",
	},
    {
        name: "Team",
        link: "",
	},
    {
        name: "Blog",
        link: "",
	}
]

</script>