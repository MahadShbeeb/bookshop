<template>
  <nav class="border-b-2 border-gray-900">
      <div class="container mx-auto px-6 py-5 flex justify-between items-center">
        <NuxtLink class="font-bold text-2xl lg:text-xl duration-500 hover:scale-105" to="/">
          BOOKSHOP
        </NuxtLink>
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div class="hidden lg:block ">
        <div class="w-full max-w-xs xl:max-w-lg 2xl:max-w-2xl bg-gray-100 rounded-md hidden xl:flex items-center">
      <select class="outline-none bg-transparent uppercase font-bold text-sm p-4 mr-4" name="" id="">
        <option>all categories</option>

      </select>
      <input class="border-l outline-none border-gray-300 bg-transparent font-semibold text-sm pl-4"
       type="text" placeholder="I'm searching for ...">
      <svg class="ml-auto h-5 px-4 text-gray-500" aria-hidden="true" focusable="false" 
      data-prefix="far" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 512 512" >
        <path fill="currentColor" d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"></path></svg>
    </div>
          
        </div>
        <Button class="">
         <NuxtLink to="/login"> </NuxtLink>
        </Button>
        
      </div>
    </nav>
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
let isOpen=ref(false);


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