<template>
   <nav class="border-b-2 border-gray-900">
      <div class="container mx-auto px-6 py-5 flex justify-between items-center">
        <NuxtLink class="font-bold text-2xl lg:text-xl uppercase duration-500 hover:scale-105" to="/">
        booklibrary</NuxtLink>
        <div class="block lg:hidden" @click="isOpen=!isOpen">
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
        <div :class="isOpen ?'block':'hidden'">
        <div  class="navbar-menu relative z-50 " >
		<div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
		<nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
			<div class="flex items-center mb-8">
				<NuxtLink class="mr-auto text-2xl font-bold lg:text-xl uppercase
                duration-500 hover:scale-105" to="/">booklibrary</NuxtLink>
				<button class="navbar-close" @click="isOpen=false">
					<svg class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
					</svg>
				</button>
			</div>
			<div>
				<ul v-for="(item,index) in navItems" :key="index">
                    <li class="mb-1"><NuxtLink :to="`/${item.link}`" 
                        class="block p-4 text-sm font-semibold text-gray-400 
                        hover:text-[#F9A826] rounded ">
                        {{ item.name }}</NuxtLink></li>
				</ul>
			</div>
			<div v-if="!isLoggedIn" class="mt-auto">
				<div class="pt-6">
					<NuxtLink to="/login" class="block px-4 py-3 mb-3 leading-loose text-xs text-center 
                    font-semibold bg-gray-50 hover:bg-gray-100 
                    rounded-xl" >Sign in</NuxtLink>
					<NuxtLink to="/signup" class="block px-4 py-3 mb-2 leading-loose text-xs text-center
                     text-white font-semibold bg-[#F9A826] hover:bg-[#f9a826e5]  
                     rounded-xl" >Sign Up</NuxtLink>
				</div>
				
			</div>
		</nav>
	        </div>
        </div>
        


        <NuxtLink v-if="isLoggedIn" to="/profile" class="flex items-center hover:text-gray-200" href="#">
        <svg class="h-9 lg:h-10 p-2 text-gray-800 hover:text-gray-700" aria-hidden="true" focusable="false" data-prefix="far" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" >
        <path fill="currentColor" d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path></svg>
        </NuxtLink>
        <Button v-else class="bg-yellow-50 text-gray-700 border-2 border-gray-700
        px-1.5 py-1 font-semibold text-sm duration-500 hover:scale-105">
        <NuxtLink to="/signup"> Create account</NuxtLink>
        </Button>
      </div>
    </nav>

    <div class="">
    <slot/>
    
    </div>

   


<!-- <div class="pt-96">
    <section class=" bg-gray-50 border-t-2 border-gray-900 ">
    <div class=" px-4 py-12 mx-auto space-y-8  sm:px-6 lg:px-8">
        <footer class="flex flex-wrap justify-center -mx-5 -my-2 hover:text-gray-500">
            <div class="px-5 py-2" v-for="(item,index) in footerItems" :key="index" >
                <NuxtLink :to="`/${item.link}`"
                class="text-base leading-6 text-gray-500 hover:text-gray-900">
                    {{item.name}}
                </NuxtLink>
            </div> 
        </footer>
    </div>
</section>
</div> -->


</template>

<script setup>
let isOpen = ref(false);
let isLoggedIn = ref(false)


const user = useSupabaseUser();
    if (user.value){
        isLoggedIn=true
    }


const navItems = [
	{
        name: "Home",
        link: "",
	},
    {
        name: "Books",
        link: "books",
	},
    {
        name: "Subjects",
        link: "subjects",
	},
    {
        name: "Authors",
        link: "authors",
	},
    {
        name: "About us",
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




</script>

<style >

</style>