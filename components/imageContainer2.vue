<template >
    <div class="w-full h-auto justify-center flex">
        <img v-show="selectedImg" class="object-contain" :src="img" alt="">
        <img v-show="!selectedImg" class="object-contain" :src="img2" alt="">
    </div>
</template>


<script>
export default {
    data(){
        return{
            img: '/muretos.svg',
            img2: '/moth.svg',
            selectedImg: true 
        }
    },
    methods: {
        togImg(){
            this.selectedImg = !this.selectedImg
        }
    }
}
</script>