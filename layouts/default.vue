<template>
   <nav class="border-b-2 border-gray-900">
      <div class="container mx-auto px-6 py-5 flex justify-between items-center">
        <NuxtLink class="font-bold text-2xl lg:text-xl duration-500 hover:scale-105" to="/">
          BOOKSHOP
        </NuxtLink>
        <div class="block lg:hidden" @click="isOpen!=isOpen">
          <button class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div class="hidden lg:block ">
          <ul class="inline-flex"
          v-for="(item,index) in navItems" :key="index" >

            <li class="hover:text-gray-700"><NuxtLink :to="`/${item.link}`" class="px-4 "
              >{{ item.name }}</NuxtLink></li>

          </ul>
          
        </div>
        <Button class="bg-yellow-50 text-gray-700 border-2 border-gray-700
        px-1.5 py-1 font-semibold text-sm duration-500 hover:scale-105">
         <NuxtLink to="/login"> Create account</NuxtLink>
        </Button>
        
      </div>
    </nav>

    <div class="">
    <slot/>
    </div>
<div class="border-t-2 border-gray-900 ">
 <section class="bg-gray-50 ">
    <div class=" max-w-screen-xl   px-4 py-12 mx-auto space-y-8  sm:px-6 lg:px-8">
        <footer class="flex flex-wrap justify-center -mx-5 -my-2 hover:text-gray-500">
            <div class="px-5 py-2" v-for="(item,index) in footerItems" :key="index" >
                <NuxtLink :to="`/${item.link}`"
                class="text-base leading-6 text-gray-500 hover:text-gray-900">
                    {{item.name}}
                </NuxtLink>
            </div> 
            
         </footer>
         <footer class="flex flex-wrap justify-center -mx-5 -my-2 ">
            <div class="px-5 py-2" v-for="(item,index) in secondFooterItems" :key="index" >
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

const navItems = [
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
        name: "Contact",
        link: "",
	},
    {
        name: "FAQ",
        link: "",
	}
];

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
const secondFooterItems = [
	{
        name: "Privacy polices ",
        link: "",
	},
    {
        name: "Term and conditions ",
        link: "",
	},
    {
        name: "Contact us",
        link: "",
	}
];

</script>