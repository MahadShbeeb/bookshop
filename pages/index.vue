<template>
  <nav class="border-b-2 border-gray-900">
      <div class="container mx-auto px-6 py-4 flex justify-between items-center">
        <NuxtLink class="font-bold text-2xl lg:text-xl" to="/">
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

            <li><NuxtLink :to="`/${item.link}`" class="px-4">{{ item.name }}</NuxtLink></li>

          </ul>
          
        </div>
        <Button class="bg-yellow-50 text-gray-700 border-2 border-gray-700
        px-1.5 py-1 font-semibold text-sm">
          Create account
        </Button>
        
      </div>
    </nav>

      <div  class=" py-20 px-10 grid md:grid-cols-2 sm:grid-cols-1 gap-5 ">
      <div class="container mx-auto px-6 pt-20 order-2 space-y-5">
        <h2 class="text-4xl font-bold mb-2 text-gray-900">
          Feast your eyes on a good book!
        </h2>
        <h3 class="text-xl mb-8 text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis rerum porro nisi,
          ratione nesciunt dolorum praesentium commodi sed! Pariatur animi omnis 
          consectetur voluptas qui atque voluptate possimus aut praesentium alias.
        </h3>

        <Button class="bg-yellow-400 px-3 py-1.5 text-gray-700 border-2
        border-gray-900 shadow-md font-bold text-sm">
          Start Exploring
        </Button>
      </div>
      <div class="firstimage order-1 h-screen bg-center bg-cover max-w-full ">
      </div>
      
    </div>

    <div>
      <div class="gradbox">
        <div class="grid grid-cols-4 gap-2">
        <div class=" text-center pt-10">
          <div class="text-xl bg-white w-10 h-10 
          flex justify-center items-center rounded-full mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
            <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg>
        </div>
        <p class="text-md font-semibold text-white mb-5">Free delivery</p>
        <p class="text-sm text-gray-100 w-60 mx-auto truncate">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sed ex odit?
              Molestiae odio porro at sequi, vel quia corporis ex deserunt, animi, voluptates eveniet.
        </p>
        </div>


        
        <div class=" text-center pt-10">
          <div class="text-xl bg-white w-10 h-10 
          flex justify-center items-center rounded-full mb-6 mx-auto">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M3.848 19h-.848c-.796 0-1.559-.316-2.121-.879-.563-.562-.879-1.325-.879-2.121v-3c0-7.175 5.377-13 12-13s12 5.825 12 13v3c0 .796-.316 1.559-.879 2.121-.562.563-1.325.879-2.121.879h-.848c-2.69 4.633-6.904 5-8.152 5-1.248 0-5.462-.367-8.152-5zm16.152-5.876c-.601.236-1.269-.18-1.269-.797 0-.304-.022-.61-.053-.915-1.761-.254-3.618-1.926-3.699-3.723-1.315 2.005-4.525 4.17-7.044 4.17 1.086-.699 1.839-2.773 1.903-3.508-.581 1.092-2.898 3.136-4.551 3.487l-.018.489c0 .619-.669 1.032-1.269.797v3.771c.287.256.632.464 1.041.594.225.072.412.224.521.424 2.206 4.046 5.426 4.087 6.438 4.087.929 0 3.719-.035 5.877-3.169-1.071.433-2.265.604-3.759.653-.37.6-1.18 1.016-2.118 1.016-1.288 0-2.333-.784-2.333-1.75s1.045-1.75 2.333-1.75c.933 0 1.738.411 2.112 1.005 1.9-.026 4.336-.334 5.888-2.645v-2.236zm-11-.624c.686 0 1.243.672 1.243 1.5s-.557 1.5-1.243 1.5-1.243-.672-1.243-1.5.557-1.5 1.243-1.5zm6 0c.686 0 1.243.672 1.243 1.5s-.557 1.5-1.243 1.5-1.243-.672-1.243-1.5.557-1.5 1.243-1.5zm5.478-1.5h1.357c-.856-5.118-4.937-9-9.835-9-4.898 0-8.979 3.882-9.835 9h1.357c.52-4.023 3.411-7.722 8.478-7.722s7.958 3.699 8.478 7.722z"/></svg>
        </div>
        <p class="text-md font-semibold text-white mb-5">24/7 Customer service</p>
        <p class="text-sm text-gray-100 w-60 mx-auto truncate">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sed ex odit?
              Molestiae odio porro at sequi, vel quia corporis ex deserunt, animi, voluptates eveniet.
        </p>
        </div>

        <div class=" text-center pt-10">
          <div class="text-xl bg-white w-10 h-10 
          flex justify-center items-center rounded-full mb-6 mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.706c-2.938-1.83-7.416-2.566-12-2.706v17.714c3.937.12 7.795.681 10.667 1.995.846.388 1.817.388 2.667 0 2.872-1.314 6.729-1.875 10.666-1.995v-17.714c-4.584.14-9.062.876-12 2.706zm-10 13.104v-13.704c5.157.389 7.527 1.463 9 2.334v13.168c-1.525-.546-4.716-1.504-9-1.798zm20 0c-4.283.293-7.475 1.252-9 1.799v-13.171c1.453-.861 3.83-1.942 9-2.332v13.704zm-2-10.214c-2.086.312-4.451 1.023-6 1.672v-1.064c1.668-.622 3.881-1.315 6-1.626v1.018zm0 3.055c-2.119.311-4.332 1.004-6 1.626v1.064c1.549-.649 3.914-1.361 6-1.673v-1.017zm0-2.031c-2.119.311-4.332 1.004-6 1.626v1.064c1.549-.649 3.914-1.361 6-1.673v-1.017zm0 6.093c-2.119.311-4.332 1.004-6 1.626v1.064c1.549-.649 3.914-1.361 6-1.673v-1.017zm0-2.031c-2.119.311-4.332 1.004-6 1.626v1.064c1.549-.649 3.914-1.361 6-1.673v-1.017zm-16-6.104c2.119.311 4.332 1.004 6 1.626v1.064c-1.549-.649-3.914-1.361-6-1.672v-1.018zm0 5.09c2.086.312 4.451 1.023 6 1.673v-1.064c-1.668-.622-3.881-1.315-6-1.626v1.017zm0-2.031c2.086.312 4.451 1.023 6 1.673v-1.064c-1.668-.622-3.881-1.316-6-1.626v1.017zm0 6.093c2.086.312 4.451 1.023 6 1.673v-1.064c-1.668-.622-3.881-1.315-6-1.626v1.017zm0-2.031c2.086.312 4.451 1.023 6 1.673v-1.064c-1.668-.622-3.881-1.315-6-1.626v1.017z"/></svg>
        </div>
        <p class="text-md font-semibold text-white mb-5">Best quality</p>
        <p class="text-sm text-gray-100 w-60 mx-auto truncate">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sed ex odit?
              Molestiae odio porro at sequi, vel quia corporis ex deserunt, animi, voluptates eveniet.
        </p>
        </div>

        <div class=" text-center pt-10">
          <div class="text-xl bg-white w-10 h-10 
          flex justify-center items-center rounded-full mb-6 mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4 14.083c0-2.145-2.232-2.742-3.943-3.546-1.039-.54-.908-1.829.581-1.916.826-.05 1.675.195 2.443.465l.362-1.647c-.907-.276-1.719-.402-2.443-.421v-1.018h-1v1.067c-1.945.267-2.984 1.487-2.984 2.85 0 2.438 2.847 2.81 3.778 3.243 1.27.568 1.035 1.75-.114 2.011-.997.226-2.269-.168-3.225-.54l-.455 1.644c.894.462 1.965.708 3 .727v.998h1v-1.053c1.657-.232 3.002-1.146 3-2.864z"/></svg>
        </div>
        <p class="text-md font-semibold text-white mb-5">Affordable prices</p>
        <p class="text-sm text-gray-100 w-60 mx-auto truncate">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sed ex odit?
              Molestiae odio porro at sequi, vel quia corporis ex deserunt, animi, voluptates eveniet.
        </p>
        </div>
        </div>

        <div class=" grid grid-cols-4 pt-10 ml-10">
        <div class="relative pt-10 grid h-[30rem] w-full max-w-[18rem] flex-col 
        items-end justify-center overflow-hidden bg-white border-4 border-gray-900 
        text-center text-gray-700">
  <div class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none 
  bg-transparent bookimage
  bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
    <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
  </div>
  <div class="relative p-6 px-6 py-14 md:px-12">
    <h2 class="mb-6 block text-2xl text-white font-extralight">
      Book title
    </h2>
    <h5 class="block mb-4 font-sans text-md font-light text-gray-200">
      Auther name
    </h5>
  </div>
</div>

<div class="relative pt-10 grid h-[30rem] w-full max-w-[18rem] flex-col 
        items-end justify-center overflow-hidden bg-white border-4 border-gray-900 
        text-center text-gray-700">
  <div class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none 
  bg-transparent bookimage
  bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
    <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
  </div>
  <div class="relative p-6 px-6 py-14 md:px-12">
    <h2 class="mb-6 block text-2xl text-white font-extralight">
      Book title
    </h2>
    <h5 class="block mb-4 font-sans text-md font-light text-gray-200">
      Auther name
    </h5>
  </div>
</div>
<div class="relative pt-10 grid h-[30rem] w-full max-w-[18rem] flex-col 
        items-end justify-center overflow-hidden bg-white border-4 border-gray-900 
        text-center text-gray-700">
  <div class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none 
  bg-transparent bookimage
  bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
    <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
  </div>
  <div class="relative p-6 px-6 py-14 md:px-12">
    <h2 class="mb-6 block text-2xl text-white font-extralight">
      Book title
    </h2>
    <h5 class="block mb-4 font-sans text-md font-light text-gray-200">
      Auther name
    </h5>
  </div>
</div>
<div class="relative pt-10 grid h-[30rem] w-full max-w-[18rem] flex-col 
        items-end justify-center overflow-hidden bg-white border-4 border-gray-900 
        text-center text-gray-700">
  <div class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none 
  bg-transparent bookimage
  bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
    <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
  </div>
  <div class="relative p-6 px-6 py-14 md:px-12">
    <h2 class="mb-6 block text-2xl text-white font-extralight">
      Book title
    </h2>
    <h5 class="block mb-4 font-sans text-md font-light text-gray-200">
      Auther name
    </h5>
  </div>
</div>
        </div>
      </div>
    </div>

    <div class="bestbook grid md:grid-cols-2 sm:grid-cols-1 gap-5">
      <div class="  bookimage h-100 object-fill bg-center bg-cover max-w-full ">
      </div>
      <div class="container mx-auto px-6 pt-20 order-2 space-y-5">
        <h2 class="text-4xl font-semibold mb-2 text-white">
          Best selling book of the month!
        </h2>
        <div class="flex gap-0.5">
    <svg class="h-4 w-4 shrink-0 fill-amber-400" viewBox="0 0 256 256">
        <path
            d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
        </path>
    </svg>
    <svg class="h-4 w-4 shrink-0 fill-amber-400" viewBox="0 0 256 256">
        <path
            d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
        </path>
    </svg>
    <svg class="h-4 w-4 shrink-0 fill-amber-400" viewBox="0 0 256 256">
        <path
            d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
        </path>
    </svg>
    <svg class="h-4 w-4 shrink-0 fill-gray-300" viewBox="0 0 256 256">
        <path
            d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
        </path>
    </svg>
    <svg class="h-4 w-4 shrink-0 fill-gray-300" viewBox="0 0 256 256">
        <path
            d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
        </path>
    </svg>
</div>

        <p class="text-md mb-8 text-gray-50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis rerum porro nisi,
          ratione nesciunt dolorum praesentium commodi sed! Pariatur animi omnis 
          consectetur voluptas qui atque voluptate possimus aut praesentium alias.
        </p>
        <p class="text-gray-200">By author </p>
      </div>
    </div>

  

  

<section class="bg-white">
    <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <footer class="flex flex-wrap justify-center -mx-5 -my-2">
            <div class="px-5 py-2" v-for="(item,index) in footerItems" :key="index" >
                <NuxtLink :to="`/${item.link}`"
                class="text-base leading-6 text-gray-500 hover:text-gray-900">
                    {{item.name}}
                </NuxtLink>
            </div> 
            
        </footer>
          <footer class="flex flex-wrap justify-center -mx-5 -my-2">
            <div class="px-5 py-2" v-for="(item,index) in secondFooterItems" :key="index" >
                <NuxtLink :to="`/${item.link}`"
                class="text-base leading-6 text-gray-500 hover:text-gray-900">
                    {{item.name}}
                </NuxtLink>
            </div> 
            
        </footer>
        
    </div>
</section>

</template>

<script setup>
let isOpen=ref(false);

const navItems = [
	{
        name: "Home",
        link: "",
	},
    {
        name: "Categories",
        link: "",
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
        name: "Categories",
        link: "",
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

<style scoped>
.gradbox {
 height: 750px;
 background-color: white; 
 background-image: linear-gradient(to bottom, rgb(18, 18, 18) 50%, rgba(0,0,0,0) 50%); 
}
.bestbook{
  height: 500px;
  background-color: rgb(18, 18, 18); 
}
.bookimage{
  background-image: url('assets/images/Mark.jpg') ;
}
.firstimage{
  background-image: url('assets/images/reading.png') ;
}
</style>