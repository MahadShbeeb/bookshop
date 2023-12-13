<template>
    <section class="">
  <div class="container grid md:grid-cols-2 sm:grid-cols-1 gap-5 h-full px-6 py-24">
    <div class="first-image order-1 bg-right bg-cover max-w-full h-screen
      g-6 ">     
    </div>
    <div class="order-2 pt-20 px-10">
        <form @submit.prevent="registerUser">
            <div class="sm:text-3xl text-4xl font-light text-center
             text-gray-900 mb-12 font-sans">
            Sign Up 
        </div>
             <div>
                 <input type="email" class="focus:outline-none border-b w-full pb-2
                  border-[#F9A826] placeholder-gray-500 my-8"
                  v-model="emailAddress" id="email"  placeholder="Email Address " required/>
            </div>
            <div class="">
                <input type="password" class="focus:outline-none border-b w-full pb-2
                 border-[#F9A826] placeholder-gray-500 mb-8" 
                 v-model="password" id="password" placeholder="Password " required/>
            </div>
        <div v-if="successMsg" class="text-green-500 font-sans text-sm">{{ successMsg }}</div>
        <div v-if="errorMsg" class="text-red-500 font-sans text-sm">{{ errorMsg }}</div>
        
            <div class="flex justify-center my-6">
                <button class=" rounded-full  p-3 w-full sm:w-56 
                bg-[#F9A826] hover:bg-[#f9a826e5]  text-white text-lg font-semibold " >
                    Sign up  
                </button>
            </div>
            <p class="text-gray-700 text-center text-sm">You already have an account ?
              <NuxtLink to="/login" class="text-[#F9A826] hover:text-[#f9a826e5]
               text-sm">Log in</NuxtLink></p>
        
        
            </form>
      </div>
  </div>
</section> 
</template>

<script setup>
let emailAddress = ''
let password = ''
let successMsg = ''
let errorMsg = ''
const client = useSupabaseClient();


async function registerUser() {
  try {
    const { data, error } = await client.auth.signUp({
      email: emailAddress,
      password: password,
    });
    if (error) throw error;


    successMsg = "Check your email for confirmation";
  } catch (error) {
    errorMsg = errorMsg ?error.message : "Error signing up";
  }


}



</script>

<style scoped>
.first-image{
  background-image: url('assets/images/knowledge.png') ;
  
}
</style>