<template>
<section class="">
  <div class="container grid md:grid-cols-2 sm:grid-cols-1 gap-5 h-full px-6 py-24">
    <div class="first-image flex-shrink-0 order-1 bg-center bg-cover max-w-full h-screen
      g-6 ">     
    </div>
    <div class="order-2 pt-20 px-10">
        <form @submit.prevent="signInUser">
            <div class="sm:text-3xl text-4xl font-light text-center
             text-gray-900 mb-12 font-sans">
            Log In 
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
            <div v-if="errorMsg" class="text-red-500 font-sans text-sm">{{ errorMsg }}</div>

            <div class="flex justify-center my-6 space-x-2">
                <button @click="login=true" class=" rounded-full  p-3 w-full sm:w-56 
                bg-[#F9A826] hover:bg-[#f9a826e5]  text-white text-lg font-semibold " >
                    Log in  
                </button>
                
            </div>
            <p class="text-gray-700 text-center text-sm">You don't have an account ? <NuxtLink to="/signup" 
              class="text-[#F9A826] hover:text-[#f9a826e5] text-sm">sign up</NuxtLink></p>
        
            </form>
      </div>
  </div>
</section> 
</template>

<script setup>
let errorMsg=''
let emailAddress = ''
let password = ''
let login = ref(true)
const router=useRouter()
const client = useSupabaseClient();


async function signInUser() {
  try {
    const { data, error } = await client.auth.signInWithPassword({
      email: emailAddress,
      password: password,
    });

    if (error) throw error;

    router.push('/profile')
  } catch (error) {
    errorMsg = error.message
  }
}


async function signOutUser() {
  const { error } = await client.auth.signOut();

  if (error) {
    return;
  }

  await navigateTo('/');
};

</script>

<style  scoped>
.first-image{
  background-image: url('assets/images/creativethinking.png') ;
  
}
</style>