<template>
<h1>profile</h1>
<p>{{ email }}</p>
 <div
    class="rounded p-3 flex items-center space-x-3 bg-white"
  >
    <img
      class="rounded-full w-12 h-12 border-2 border-blue-400"
      :src="profile"
    />
    <div class="text-right">
      <div class="font-medium">{{ email }}</div>
      <div v-if="errorMsg" class="text-red-500 font-sans text-sm">{{ errorMsg }}</div>
      <button @click="signOutUser" class=" rounded-full  p-3 w-full sm:w-56 
                bg-[#F9A826] hover:bg-[#f9a826e5]  text-white text-lg font-semibold " >
                    Log out 
</button>
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

</style>