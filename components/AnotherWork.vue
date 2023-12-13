<template>
    <div class="flex flex-col align-stretch justify-evenly max-w-[16rem] h-50  
    overflow-hidden border-2
border-gray-900 shadow-[4px_4px_2px_2px_rgba(10,18,18)] px-0 pb-10 ">    
    <div class="flex flex-col justify-between mx-2">
        <h3 class="font-semibold text-xl font-sans truncate mb-5 mt-5">{{work.title}}</h3>
        <hr>
        <p class="text-gray-700 font-md ">{{description}} ... </p>
   <div class="flex justify-center">
     <NuxtLink class=" text-sky-800 hover:text-gray-600 font-light font-md "
    :to="`/books${work.key}`">View details </NuxtLink>
   </div>
    </div>
    
    </div>

    <div v-if="isOpen" class="modal-overlay">
    <div class="modal">
      <h6>{{work.title}}</h6>
      <p>{{work.description}}</p>
      <button @click="isOpen=false" >Got it</button>
    </div>
  </div>

</template>

<script setup>
const {work} = defineProps(['work']);
let description = work.description ? work.description.toString():
'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt delectus maxime voluptas aut nihil repellat sunt nostrum! Sint, tempora reiciendis? Aut nihil magni sed '
let isOpen=ref(false);

</script>


<style scoped>


.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.modal {
  text-align: center;
  background-color: white;
  height: 500px;
  width: 500px;
  margin-top: 10%;
  padding: 60px 0;
  border-radius: 20px;
}
.close {
  margin: 10% 0 0 16px;
  cursor: pointer;
}

.close-img {
  width: 25px;
}

.check {
  width: 150px;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

p {
  font-size: 16px;
  margin: 20px 0;
}

button {
  background-color: #F9A826;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 50px;
}
</style>