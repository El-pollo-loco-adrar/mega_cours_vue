<template>
    <div class="p-6">
        <h1 class="text-2xl font-bold mb-4">Friends List</h1>

        <OneFriend 
            v-for="ami in lesAmis" :key="ami.id" :friend="ami" @deleteFriend="deleteInLesamis" @togglePremium="changePremium"
        />
        <NewFriend 
            @add-ami="addFriend"
        />
    </div>
</template>

<script setup lang='js'>
import { ref, computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'
import OneFriend from './OneFriend.vue';
import NewFriend from './NewFriend.vue';


const lesAmis = ref([
    {
        id: 'lasticot',
        name: 'COCO L ASTICOT',
        phone: '01234 5678 991',
        email: 'coco@lasticot.com',
        premium: true
    },
    {
        id: 'lasticot2',
        name: 'COCO L ASTICOT',
        phone: '01234 5678 991',
        email: 'coco@lasticot.com',
        premium: false
    },
    {
        id: 'kimonoSurUnFrigo',
        name: "Steven Seagal",
        phone: '+338765477',
        email: 'steven@seagal.com',
        premium: true
    },
    {
        id: 'yoyoyo2',
        name: "JAROD",
        phone: '+338765477',
        email: 'jAROD@seagal.com',
        premium: true
    },
    {
        id: 'yoyoyo',
        name: "JAROD",
        phone: '+338765477',
        email: 'jAROD@seagal.com',
        premium: false
    },
]);

function deleteInLesamis(id){
    lesAmis.value = lesAmis.value.filter(ami => ami.id !==id)
}
function changePremium(id, value){
    const ami = lesAmis.value.find(ami => ami.id === id)
    if (ami){
        ami.premium = value
    }
}
function addFriend(newFriend){
    lesAmis.value.push(newFriend)
}
</script>

<style scoped lang="css">
</style>