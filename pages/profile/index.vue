<template>

  


 <div class="py-12 h-screen bg-white">
  <div class="max-w-md mx-auto bg-gray-50 rounded-xl shadow-md overflow-hidden md:max-w-md">
  <div class="md:flex">
      <div class="w-full p-2 py-10">
        

        <div class="flex justify-center">
          <div class="relative">

    <img class="w-32 h-32 rounded-full mx-auto" src="https://picsum.photos/200" alt="Profile picture">
          </div>
          
        </div> 

        <div class="flex flex-col text-center mt-3 mb-4">

          <span class="text-md text-gray-700">{{ email  }}</span>
           
        </div>
        <div>
          <ul class="flex flex-col items-center mb-4">
          <li class="flex items-center " >
           <svg class="w-5 h-5 mr-4 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg><NuxtLink class="text-gray-900 hover:text-gray-700 cursor-pointer">My Favourites  </NuxtLink></li>


<li class="flex items-center text-gray-800 hover:text-gray-700 " >
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
  stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-4 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>
<NuxtLink class="text-gray-900 hover:text-gray-700 cursor-pointer">My Cart </NuxtLink></li></ul>
        </div>
              <div class="flex justify-center my-6">
                <button @click="signOutUser" class=" rounded-full  p-3 w-full sm:w-56 bg-[#F9A826]
                 hover:bg-[#f9a826e5]  text-white text-lg font-semibold " >
                    Sign out  
                </button>
            </div>
      </div>
  </div>
</div>
  
</div> 
</template>

<script setup>

definePageMeta({
  middleware : ["auth"]
})

const user=useSupabaseUser();
const client = useSupabaseClient();
const router =useRouter();

let email = user.value ? user.value.email:''

async function signOutUser() {
  try {
    const { error } = await client.auth.signOut();
    if (error) throw error;

    router.push('/login')
  } catch (error) {
    errorMsg = error.message
    console.log(error.message)
  }
};


</script>

<style scoped>
.profile-image{
    background-image: url('/assets/images/profile.png') ;

}
</style>